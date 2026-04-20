import { education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="education" className="section" style={{ background: 'rgba(13,17,23,0.6)' }}>
      <div className="section-inner">
        <p className="section-label">// Academic Background</p>
        <h2 className="section-title">Edu<span>cation</span></h2>

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((edu, i) => (
            <div
              key={i}
              className={`card-base card-accent-left reveal ${isVisible ? 'visible' : ''}`}
              style={{ paddingLeft: '2rem' }}
            >
              <div
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.72rem',
                  color:         'var(--cyan)',
                  letterSpacing: '0.08em',
                  marginBottom:  '0.5rem',
                }}
              >
                {edu.year}
              </div>

              <h3
                style={{
                  fontFamily:  'var(--font-display)',
                  fontSize:    '1.2rem',
                  fontWeight:  700,
                  marginBottom:'0.25rem',
                }}
              >
                {edu.degree}
              </h3>

              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {edu.institution}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily:  'var(--font-mono)',
                    fontSize:    '0.75rem',
                    background:  'rgba(255,209,102,0.1)',
                    color:       'var(--gold)',
                    border:      '1px solid rgba(255,209,102,0.25)',
                    borderRadius:'0.3rem',
                    padding:     '0.3rem 0.8rem',
                  }}
                >
                  CGPA: {edu.cgpa}
                </span>
                {edu.cgpaRecent && (
                  <span
                    style={{
                      fontFamily:  'var(--font-mono)',
                      fontSize:    '0.75rem',
                      background:  'rgba(255,107,157,0.08)',
                      color:       'var(--pink)',
                      border:      '1px solid rgba(255,107,157,0.2)',
                      borderRadius:'0.3rem',
                      padding:     '0.3rem 0.8rem',
                    }}
                  >
                    {edu.cgpaRecent}
                  </span>
                )}
              </div>

              {edu.ielts && (
                <div
                  style={{
                    borderTop:  '1px solid var(--border-color)',
                    paddingTop: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '0.7rem',
                      color:         'var(--muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom:  '0.75rem',
                    }}
                  >
                    IELTS Academic — Overall Band {edu.ielts.overall}
                  </div>
                  <div
                    style={{
                      display:             'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                      gap:                 '0.5rem',
                    }}
                  >
                    {[
                      { skill: 'Listening', score: edu.ielts.listening },
                      { skill: 'Reading',   score: edu.ielts.reading },
                      { skill: 'Writing',   score: edu.ielts.writing },
                      { skill: 'Speaking',  score: edu.ielts.speaking },
                    ].map(({ skill, score }) => (
                      <div
                        key={skill}
                        style={{
                          background:  'rgba(0,229,255,0.04)',
                          border:      '1px solid var(--border-color)',
                          borderRadius:'0.4rem',
                          padding:     '0.5rem 0.75rem',
                          display:     'flex',
                          justifyContent:'space-between',
                          alignItems:  'center',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                          {skill}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', fontWeight: 600 }}>
                          {score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
