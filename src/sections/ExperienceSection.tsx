import { experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <p className="section-label">// Professional</p>
        <h2 className="section-title">Experi<span>ence</span></h2>

        <div
          ref={ref}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap:                 '1.5rem',
          }}
        >
          {experience.map((exp, i) => (
            <div
              key={i}
              className={`card-base reveal ${i === 1 ? 'reveal-delay-2' : ''} ${isVisible ? 'visible' : ''}`}
              style={{
                borderLeft:    '3px solid transparent',
                borderImage:   'linear-gradient(to bottom, var(--pink), var(--gold)) 1',
                borderRadius:  '0.85rem',
                paddingLeft:   '1.75rem',
              }}
            >
              <div
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.7rem',
                  color:         'var(--pink)',
                  letterSpacing: '0.06em',
                  marginBottom:  '0.4rem',
                }}
              >
                {exp.date}
              </div>
              <h3
                style={{
                  fontFamily:  'var(--font-display)',
                  fontSize:    '1.05rem',
                  fontWeight:  700,
                  marginBottom:'0.2rem',
                }}
              >
                {exp.role}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.85rem' }}>
                {exp.org}
              </p>
              <p style={{ fontSize: '0.875rem', color: '#a0aec0', lineHeight: 1.7 }}>
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
