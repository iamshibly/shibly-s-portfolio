import { experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <p className="section-label">// Professional Experience</p>
        <h2 className="section-title">Industry <span>Experience</span></h2>

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((exp, i) => (
            <div
              key={i}
              className={`card-base card-accent-left reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''} ${isVisible ? 'visible' : ''}`}
              style={{ paddingLeft: '2rem' }}
            >
              {/* Date — mono cyan */}
              <p
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.72rem',
                  color:         'var(--cyan)',
                  letterSpacing: '0.08em',
                  marginBottom:  '0.6rem',
                }}
              >
                {exp.date}
              </p>

              {/* Role — large white display font */}
              <h3
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.1rem, 2vw, 1.3rem)',
                  fontWeight:   700,
                  color:        'var(--white)',
                  marginBottom: '0.25rem',
                  lineHeight:   1.25,
                }}
              >
                {exp.role}
              </h3>

              {/* Organisation — gold accent */}
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '0.95rem',
                  fontWeight:   500,
                  color:        'var(--gold)',
                  marginBottom: '1rem',
                  letterSpacing:'-0.01em',
                }}
              >
                <Briefcase size={13} style={{ display: 'inline', marginRight: '0.4rem', opacity: 0.7 }} />
                {exp.org}
              </p>

              {/* Description — creamy warm muted */}
              <p
                style={{
                  fontSize:   '0.9rem',
                  color:      'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
