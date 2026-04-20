import { skillGroups } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="section" style={{ background: 'rgba(13,17,23,0.6)' }}>
      <div className="section-inner">
        <p className="section-label">// Technical Proficiency</p>
        <h2 className="section-title">Skills &amp; <span>Tools</span></h2>

        <div
          ref={ref}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap:                 '3rem',
          }}
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.groupTitle}
              className={`reveal ${gi === 1 ? 'reveal-delay-2' : ''} ${isVisible ? 'visible' : ''}`}
            >
              <h3
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.7rem',
                  color:         'var(--muted)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom:  '1.5rem',
                  paddingBottom: '0.5rem',
                  borderBottom:  '1px solid var(--border-color)',
                }}
              >
                {group.groupTitle}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display:        'flex',
                        justifyContent: 'space-between',
                        alignItems:     'center',
                        marginBottom:   '0.3rem',
                      }}
                    >
                      <span style={{ fontSize: '0.88rem', color: 'var(--white)' }}>
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize:   '0.72rem',
                          color:      'var(--cyan)',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.tags.map(tag => (
                  <span key={tag} className="tag" style={{ fontSize: '0.68rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
