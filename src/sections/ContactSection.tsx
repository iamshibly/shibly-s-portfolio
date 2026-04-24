import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo, references } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

/*
 * ── Contact Form powered by Formspree ──────────────────────────────────────
 *
 * HOW TO ACTIVATE REAL EMAIL DELIVERY (takes ~2 minutes, free):
 *
 *  1. Go to https://formspree.io and create a free account.
 *  2. Click "New Form", name it "Portfolio Contact".
 *  3. Copy your Form ID (looks like: xpwzrjkq).
 *  4. Replace the placeholder below with your real Form ID:
 *
 *       const FORMSPREE_ID = 'xpwzrjkq';   ← your actual ID
 *
 *  5. Save & redeploy. Every submission will be emailed to your Formspree
 *     account email (which you point to your real inbox in Settings → Email).
 *
 *  No backend, no server, no API keys needed. 50 submissions/month free.
 * ─────────────────────────────────────────────────────────────────────────── */
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // ← replace with your ID from formspree.io

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If user hasn't set up Formspree yet, explain clearly
    if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      alert(
        'Email delivery not yet configured.\n\n' +
        'To enable it:\n' +
        '1. Sign up free at formspree.io\n' +
        '2. Create a new form\n' +
        '3. Copy your Form ID into ContactSection.tsx'
      );
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section contact-bg">
      <div className="section-inner">
        <p className="section-label">// Get In Touch</p>
        <h2 className="section-title">Con<span>tact</span></h2>

        <div ref={ref} className="contact-grid">

          {/* ── Left: Info + socials + references ──────────── */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <p className="contact-intro">
              I'm actively looking for PhD opportunities and research collaborations.
              Feel free to reach out — I usually respond within 24 hours.
            </p>

            <div className="contact-items">
              {[
                { icon: <Mail size={16} />,   text: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={16} />,  text: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={16} />, text: personalInfo.location, href: undefined },
              ].map(item => (
                <div key={item.text} className="contact-item">
                  <span className="contact-item-icon">{item.icon}</span>
                  {item.href
                    ? <a href={item.href} className="contact-item-text contact-item-link">{item.text}</a>
                    : <span className="contact-item-text">{item.text}</span>
                  }
                </div>
              ))}
            </div>

            <div className="social-row">
              {[
                { icon: <Github size={18} />,   href: personalInfo.socials.github,   label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                { icon: <BookOpen size={18} />, href: personalInfo.socials.scholar,  label: 'Scholar' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label} className="social-btn">
                  {s.icon}
                </a>
              ))}
            </div>

            <p className="subsection-label" style={{ marginTop: '2rem' }}>References</p>
            <div className="ref-list">
              {references.map(r => (
                <div key={r.name} className="ref-card">
                  <div className="ref-name">{r.name}</div>
                  <div className="ref-role">{r.title} · {r.institution}</div>
                  <a href={`mailto:${r.email}`} className="ref-email">{r.email}</a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Formspree-powered form ──────────────── */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="contact-form">

              {/* Name */}
              <div className="form-field">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  id="name" type="text" required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Dr. Jane Smith"
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  id="email" type="email" required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="jane@university.edu"
                  className="form-input"
                />
              </div>

              {/* Message — no character limit enforced, but 5000 char soft guide */}
              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message
                  <span style={{ float:'right', fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'var(--muted)', fontWeight:400 }}>
                    {form.message.length} / 5000
                  </span>
                </label>
                <textarea
                  id="message" required rows={7}
                  maxLength={5000}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="I'd love to discuss a potential PhD collaboration..."
                  className="form-input form-textarea"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{ alignSelf: 'flex-start', marginTop: '0.25rem', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                <Send size={14} />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {/* Feedback banners */}
              {status === 'success' && (
                <div style={{
                  display:'flex', alignItems:'center', gap:'0.5rem',
                  marginTop:'1rem', padding:'0.75rem 1rem',
                  background:'rgba(77,196,255,0.08)', border:'1px solid rgba(77,196,255,0.3)',
                  borderRadius:'0.5rem', color:'var(--cyan)',
                  fontFamily:'var(--font-mono)', fontSize:'0.8rem',
                }}>
                  <CheckCircle size={16} />
                  Message sent! I'll reply within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  display:'flex', alignItems:'center', gap:'0.5rem',
                  marginTop:'1rem', padding:'0.75rem 1rem',
                  background:'rgba(255,107,107,0.08)', border:'1px solid rgba(255,107,107,0.3)',
                  borderRadius:'0.5rem', color:'#ff6b6b',
                  fontFamily:'var(--font-mono)', fontSize:'0.8rem',
                }}>
                  <AlertCircle size={16} />
                  Failed to send. Please email directly: {personalInfo.email}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
