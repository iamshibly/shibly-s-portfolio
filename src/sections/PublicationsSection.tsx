import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { publications, type PubType } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FILTERS: Array<'All' | PubType> = ['All', 'Journal', 'International Conference', 'Domestic Conference', 'Under Review'];

const statusStyle = (status: string): React.CSSProperties => {
  if (status === 'Published') return {
    background: 'rgba(0,229,255,0.1)',
    color:      'var(--cyan)',
    border:     '1px solid rgba(0,229,255,0.2)',
  };
  if (status === 'Under Review') return {
    background: 'rgba(255,209,102,0.1)',
    color:      'var(--gold)',
    border:     '1px solid rgba(255,209,102,0.2)',
  };
  return {
    background: 'rgba(255,107,157,0.08)',
    color:      'var(--pink)',
    border:     '1px solid rgba(255,107,157,0.2)',
  };
};

const typeStyle = (type: PubType): React.CSSProperties => ({
  background: 'rgba(255,107,157,0.08)',
  color:      'var(--pink)',
  border:     '1px solid rgba(255,107,157,0.2)',
});

const badgeBase: React.CSSProperties = {
  display:       'inline-block',
  fontFamily:    'var(--font-mono)',
  fontSize:      '0.68rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  padding:       '0.22rem 0.65rem',
  borderRadius:  '0.25rem',
  whiteSpace:    'nowrap',
  flexShrink:    0,
};

const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | PubType>('All');
  const { ref, isVisible } = useScrollReveal(0.08);

  const filtered = activeFilter === 'All'
    ? publications
    : publications.filter(p => p.type === activeFilter);

  const count = (f: 'All' | PubType) =>
    f === 'All' ? publications.length : publications.filter(p => p.type === f).length;

  return (
    <section id="publications" className="section">
      <div className="section-inner">
        <p className="section-label">// Research Output</p>
        <h2 className="section-title">Publications &amp; <span>Manuscript</span></h2>

        {/* Filter tabs */}
        <div
          role="tablist"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
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

        {/* Cards */}
        <div
          ref={ref}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {filtered.map((pub, idx) => (
            <article
              key={pub.num}
              className={`pub-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${idx * 0.07}s` }}
            >
              {/* Index column — fixed, never shrinks */}
              <div className="pub-num" aria-hidden="true">
                {String(pub.num).padStart(2, '0')}
              </div>

              {/* Content column — min-width:0 is critical for text wrapping */}
              <div className="pub-body">
                {/* Title — full width, wraps freely */}
                <h3 className="pub-title">{pub.title}</h3>

                {/* Authors */}
                <p className="pub-authors">{pub.authors}</p>

                {/* Venue + year */}
                <p className="pub-venue">{pub.venue}, {pub.year}</p>

                {/* Badges + link row */}
                <div className="pub-meta-row">
                  <span style={{ ...badgeBase, ...statusStyle(pub.status) }}>
                    {pub.status}
                  </span>
                  <span style={{ ...badgeBase, ...typeStyle(pub.type) }}>
                    {pub.type}
                  </span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                    >
                      <ExternalLink size={11} />
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
