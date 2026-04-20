import { Award } from 'lucide-react';
import { certifications, awards } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CertificationsSection = () => {
  const { ref: awardsRef, isVisible: awardsVis } = useScrollReveal(0.1);
  const { ref: certsRef,  isVisible: certsVis  } = useScrollReveal(0.1);

  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <p className="section-label">// Achievements</p>
        <h2 className="section-title">Certs &amp; <span>Awards</span></h2>

        {/* Awards */}
        <h3
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.7rem',
            color:         'var(--muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom:  '1.25rem',
          }}
        >
          Honors &amp; Awards
        </h3>
        <div
          ref={awardsRef}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap:                 '1rem',
            marginBottom:        '3rem',
          }}
        >
          {awards.map((award, i) => (
            <div
              key={i}
              className={`card-base reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''} ${awardsVis ? 'visible' : ''}`}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{award.icon}</div>
              <div
                style={{
                  fontFamily:  'var(--font-display)',
                  fontSize:    '0.875rem',
                  fontWeight:  700,
                  marginBottom:'0.25rem',
                  color:       'var(--white)',
                }}
              >
                {award.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize:   '0.7rem',
                  color:      'var(--muted)',
                }}
              >
                {award.org} · {award.year}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.7rem',
            color:         'var(--muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom:  '1.25rem',
          }}
        >
          Certifications
        </h3>
        <div
          ref={certsRef}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap:                 '1rem',
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`card-base reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''} ${certsVis ? 'visible' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div
                style={{
                  flexShrink:    0,
                  width:         '36px',
                  height:        '36px',
                  borderRadius:  '0.4rem',
                  background:    'rgba(0,229,255,0.08)',
                  border:        '1px solid var(--border-color)',
                  display:       'flex',
                  alignItems:    'center',
                  justifyContent:'center',
                  color:         'var(--cyan)',
                }}
              >
                <Award size={16} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily:  'var(--font-display)',
                    fontSize:    '0.875rem',
                    fontWeight:  600,
                    marginBottom:'0.15rem',
                    whiteSpace:  'nowrap',
                    overflow:    'hidden',
                    textOverflow:'ellipsis',
                  }}
                  title={cert.name}
                >
                  {cert.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
