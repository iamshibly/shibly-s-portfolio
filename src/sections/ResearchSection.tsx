import { researchPositions, type ResearchPosition } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ResearchCard = ({ pos }: { pos: ResearchPosition }) => {
  const isCyan = pos.variant === 'cyan';
  return (
    <div
      className={`card-base ${isCyan ? 'card-accent-top' : 'card-accent-top-gold'}`}
      style={{ paddingTop: '1.75rem' }}
    >
      <div
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.7rem',
          color:         isCyan ? 'var(--cyan)' : 'var(--gold)',
          letterSpacing: '0.08em',
          marginBottom:  '0.5rem',
        }}
      >
        {pos.date}
      </div>

      <h3
        style={{
          fontFamily:  'var(--font-display)',
          fontSize:    '1.1rem',
          fontWeight:  700,
          marginBottom:'0.25rem',
        }}
      >
        {pos.title}
      </h3>

      <div
        style={{
          fontSize:    '0.9rem',
          color:       isCyan ? 'rgba(0,229,255,0.75)' : 'rgba(255,209,102,0.75)',
          marginBottom:'0.15rem',
          fontWeight:  500,
        }}
      >
        {pos.org}
      </div>

      <div
        style={{
          fontFamily:  'var(--font-mono)',
          fontSize:    '0.72rem',
          color:       'var(--muted)',
          marginBottom:'1rem',
          fontStyle:   'italic',
        }}
      >
        {pos.supervisor} · {pos.faculty}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {pos.topics.map((topic, i) => (
          <li
            key={i}
            style={{
              display:  'flex',
              gap:      '0.6rem',
              fontSize: '0.875rem',
              color:    '#a0aec0',
            }}
          >
            <span style={{ color: isCyan ? 'var(--cyan)' : 'var(--gold)', flexShrink: 0, marginTop: '3px' }}>▸</span>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ResearchSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="research" className="section">
      <div className="section-inner">
        <p className="section-label">// Research Experience</p>
        <h2 className="section-title">Research <span>Positions</span></h2>

        <div
          ref={ref}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap:                 '1.5rem',
          }}
        >
          {researchPositions.map((pos, i) => (
            <div
              key={i}
              className={`reveal ${i === 1 ? 'reveal-delay-2' : ''} ${isVisible ? 'visible' : ''}`}
            >
              <ResearchCard pos={pos} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
