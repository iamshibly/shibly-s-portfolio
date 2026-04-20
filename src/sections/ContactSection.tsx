import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Send } from 'lucide-react';
import { personalInfo, references } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    width:           '100%',
    background:      'var(--bg2)',
    border:          '1px solid var(--border-color)',
    borderRadius:    '0.5rem',
    padding:         '0.75rem 1rem',
    color:           'var(--white)',
    fontFamily:      'var(--font-body)',
    fontSize:        '0.9rem',
    outline:         'none',
    transition:      'border-color 0.2s',
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(13,17,23,0.6)' }}>
      <div className="section-inner">
        <p className="section-label">// Get In Touch</p>
        <h2 className="section-title">Con<span>tact</span></h2>

        <div
          ref={ref}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 '4rem',
          }}
        >
          {/* ── Left: Info ─────────────────────────────────── */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <p style={{ color: '#a0aec0', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm actively looking for PhD opportunities and research collaborations. Feel free to reach out!
            </p>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: <Mail size={16} />,   text: personalInfo.email },
                { icon: <Phone size={16} />,  text: personalInfo.phone },
                { icon: <MapPin size={16} />, text: personalInfo.location },
              ].map(item => (
                <div
                  key={item.text}
                  style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        '1rem',
                    background: 'var(--bg3)',
                    border:     '1px solid var(--border-color)',
                    borderRadius:'0.5rem',
                    padding:    '0.85rem 1.1rem',
                  }}
                >
                  <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: '0.875rem', color: '#a0aec0' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {[
                { icon: <Github size={18} />,    href: personalInfo.socials.github,   label: 'GitHub' },
                { icon: <Linkedin size={18} />,  href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                { icon: <BookOpen size={18} />,  href: personalInfo.socials.scholar,  label: 'Scholar' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width:          '42px',
                    height:         '42px',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    border:         '1px solid var(--border-color)',
                    borderRadius:   '0.4rem',
                    color:          'var(--muted)',
                    transition:     'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--cyan)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* References */}
            <h4
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.7rem',
                color:         'var(--muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom:  '1rem',
              }}
            >
              References
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {references.map(ref => (
                <div
                  key={ref.name}
                  style={{
                    background:  'var(--bg3)',
                    border:      '1px solid var(--border-color)',
                    borderRadius:'0.5rem',
                    padding:     '0.85rem 1.1rem',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.15rem' }}>
                    {ref.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.15rem' }}>
                    {ref.title} · {ref.institution}
                  </div>
                  <a
                    href={`mailto:${ref.email}`}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cyan)' }}
                  >
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Contact form ─────────────────────────── */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label
                  htmlFor="name"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Dr. Jane Smith"
                  style={inputStyle}
                  onFocus={e => ((e.target as HTMLElement).style.borderColor = 'rgba(0,229,255,0.4)')}
                  onBlur={e  => ((e.target as HTMLElement).style.borderColor = 'var(--border-color)')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="jane@university.edu"
                  style={inputStyle}
                  onFocus={e => ((e.target as HTMLElement).style.borderColor = 'rgba(0,229,255,0.4)')}
                  onBlur={e  => ((e.target as HTMLElement).style.borderColor = 'var(--border-color)')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="I'd love to discuss a potential PhD collaboration..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  onFocus={e => ((e.target as HTMLElement).style.borderColor = 'rgba(0,229,255,0.4)')}
                  onBlur={e  => ((e.target as HTMLElement).style.borderColor = 'var(--border-color)')}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              >
                <Send size={14} />
                {sent ? 'Opening mail client...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
