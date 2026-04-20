import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { publications, type PubType } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FILTERS: Array<'All' | PubType> = ['All', 'Journal', 'Conference', 'Under Review'];

const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | PubType>('All');
  const { ref, isVisible } = useScrollReveal(0.08);

  const filtered = activeFilter === 'All'
    ? publications
    : publications.filter(p => p.type === activeFilter);

  const count = (f: 'All' | PubType) =>
    f === 'All' ? publications.length : publications.filter(p => p.type === f).length;

  return (
    <section id="publications" className="section" style={{ background: 'rgba(13,17,23,0.6)' }}>
      <div className="section-inner">
        <p className="section-label">// Academic Output</p>
        <h2 className="section-title">Publi<span>cations</span></h2>

        {/* Filter tabs */}
        <div
          role="tablist"
          style={{
            display:      'flex',
            flexWrap:     'wrap',
            gap:          '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {FILTERS.map(f => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.72rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding:       '0.45rem 1rem',
                  borderRadius:  '0.35rem',
                  border:        `1px solid ${active ? 'var(--cyan)' : 'var(--border-color)'}`,
                  background:    active ? 'rgba(0,229,255,0.12)' : 'transparent',
                  color:         active ? 'var(--cyan)' : 'var(--muted)',
                  cursor:        'none',
                  transition:    'all 0.2s',
                }}
              >
                {f} ({count(f)})
              </button>
            );
          })}
        </div>

        {/* Publications list */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {filtered.map((pub) => (
            <article
              key={pub.num}
              style={{
                display:             'grid',
                gridTemplateColumns: '3rem 1fr',
                gap:                 '1.25rem',
                background:          'var(--bg3)',
                border:              '1px solid var(--border-color)',
                borderRadius:        '0.85rem',
                padding:             '1.5rem',
                transition:          'border-color 0.25s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.25)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)')}
            >
              {/* Number column (fixed width prevents any overlap) */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize:   '2rem',
                  fontWeight: 800,
                  color:      'rgba(0,229,255,0.18)',
                  lineHeight: 1,
                  userSelect: 'none',
                  flexShrink: 0,
                }}
              >
                {String(pub.num).padStart(2, '0')}
              </div>

              {/* Content column — min-width: 0 prevents overflow */}
              <div style={{ minWidth: 0 }}>
                <h3
                  style={{
                    fontFamily:  'var(--font-display)',
                    fontSize:    '1rem',
                    fontWeight:  700,
                    lineHeight:  1.45,
                    marginBottom:'0.5rem',
                    color:       'var(--white)',
                    /* Never let the title be absolute-positioned or overflow */
                    wordBreak:   'break-word',
                  }}
                >
                  {pub.title}
                </h3>

                <p
                  style={{
                    fontFamily:  'var(--font-mono)',
                    fontSize:    '0.72rem',
                    color:       'var(--muted)',
                    marginBottom:'0.4rem',
                    lineHeight:  1.6,
                  }}
                >
                  {pub.authors}
                </p>

                <p
                  style={{
                    fontFamily:  'var(--font-mono)',
                    fontSize:    '0.75rem',
                    color:       'var(--gold)',
                    marginBottom:'0.75rem',
                  }}
                >
                  {pub.venue}, {pub.year}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
                  {/* Status badge */}
                  <span
                    style={{
                      fontFamily:  'var(--font-mono)',
                      fontSize:    '0.68rem',
                      letterSpacing:'0.06em',
                      textTransform:'uppercase',
                      padding:     '0.2rem 0.6rem',
                      borderRadius:'0.25rem',
                      background:  pub.status === 'Published'
                        ? 'rgba(0,229,255,0.1)'
                        : 'rgba(255,209,102,0.1)',
                      color: pub.status === 'Published' ? 'var(--cyan)' : 'var(--gold)',
                      border: `1px solid ${pub.status === 'Published' ? 'rgba(0,229,255,0.2)' : 'rgba(255,209,102,0.2)'}`,
                    }}
                  >
                    {pub.status}
                  </span>

                  {/* Type badge */}
                  <span
                    style={{
                      fontFamily:  'var(--font-mono)',
                      fontSize:    '0.68rem',
                      letterSpacing:'0.06em',
                      textTransform:'uppercase',
                      padding:     '0.2rem 0.6rem',
                      borderRadius:'0.25rem',
                      background:  'rgba(255,107,157,0.08)',
                      color:       'var(--pink)',
                      border:      '1px solid rgba(255,107,157,0.2)',
                    }}
                  >
                    {pub.type}
                  </span>

                  {/* Link */}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display:    'inline-flex',
                        alignItems: 'center',
                        gap:        '0.3rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize:   '0.7rem',
                        color:      'var(--muted)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--cyan)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
                    >
                      <ExternalLink size={12} />
                      View
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
