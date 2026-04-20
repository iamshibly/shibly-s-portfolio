import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

/* ─── Nav links ──────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Education',      href: '#education' },
  { label: 'Research',       href: '#research' },
  { label: 'Publications',   href: '#publications' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export const NAV_HEIGHT = 72; /* exported so sections can pad correctly */

/* ─── Logo slot ──────────────────────────────────────────────── */
/* Drop your real logo at public/portfolio-assets/logo/logo.svg  */
/* and update LOGO_SRC below — or replace the <img> with an      */
/* <svg> inline wordmark entirely.                                */
const LOGO_SRC = '/portfolio-assets/logo/placeholder.svg';

const LogoSlot = () => {
  const [imgFailed, setImgFailed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      aria-label="Back to top"
      style={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: 'auto' }}
    >
      {!imgFailed ? (
        <img
          src={LOGO_SRC}
          alt="Site logo"
          height={36}
          onError={() => setImgFailed(true)}
          style={{ height: '36px', width: 'auto', display: 'block' }}
        />
      ) : (
        /* Fallback text-wordmark — replace this string when you have a real logo */
        <span
          style={{
            fontFamily:    'var(--font-mono)',
            fontWeight:    500,
            fontSize:      '0.85rem',
            color:         'var(--muted)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            border:        '1px solid var(--border-color)',
            borderRadius:  '0.3rem',
            padding:       '0.25rem 0.6rem',
          }}
        >
          [ LOGO ]
        </span>
      )}
    </a>
  );
};

/* ─── Top Nav ────────────────────────────────────────────────── */
const TopNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [scrolled,      setScrolled]      = useState(false);

  /* Active section detection */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    let current = '';
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= NAV_HEIGHT + 40) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* Close menu on Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Nav bar ────────────────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          height:         `${NAV_HEIGHT}px`,
          display:        'flex',
          alignItems:     'center',
          padding:        '0 2.5rem',
          background:     scrolled ? 'rgba(6,9,15,0.92)' : 'rgba(6,9,15,0.70)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom:   '1px solid var(--border-color)',
          transition:     'background 0.35s ease',
        }}
      >
        <LogoSlot />

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV_LINKS.map(link => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                className={`nav-link${active ? ' nav-link--active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            display:    'none',   /* shown via media query below */
            background: 'none',
            border:     'none',
            color:      'var(--white)',
            padding:    '0.4rem',
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile backdrop ────────────────────────────────── */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          style={{
            position:  'fixed',
            inset:     0,
            zIndex:    98,
            background:'rgba(6,9,15,0.5)',
          }}
        />
      )}

      {/* ── Mobile dropdown panel ──────────────────────────── */}
      <div
        className="nav-mobile-panel"
        style={{
          position:       'fixed',
          top:            `${NAV_HEIGHT}px`,
          left:           0,
          right:          0,
          zIndex:         99,
          background:     'rgba(6,9,15,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom:   '1px solid var(--border-color)',
          padding:        '0.5rem 2.5rem 1.25rem',
          display:        menuOpen ? 'flex' : 'none',
          flexDirection:  'column',
        }}
      >
        {NAV_LINKS.map(link => {
          const active = activeSection === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href); }}
              className={`nav-mobile-link${active ? ' nav-link--active' : ''}`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* ── Scoped styles ──────────────────────────────────── */}
      <style>{`
        /* Desktop nav links */
        .nav-link {
          position:       relative;
          font-family:    var(--font-mono);
          font-size:      0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color:          var(--muted);
          padding-bottom: 3px;
          transition:     color 0.2s ease;
          white-space:    nowrap;
        }
        .nav-link::after {
          content:          '';
          position:         absolute;
          bottom:           0;
          left:             0;
          width:            0;
          height:           1.5px;
          background:       var(--cyan);
          border-radius:    1px;
          transition:       width 0.25s ease;
        }
        .nav-link:hover,
        .nav-link--active {
          color: var(--cyan);
        }
        .nav-link:hover::after,
        .nav-link--active::after {
          width: 100%;
        }

        /* Mobile links */
        .nav-mobile-link {
          font-family:    var(--font-mono);
          font-size:      0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color:          var(--muted);
          padding:        0.7rem 0;
          border-bottom:  1px solid var(--border-color);
          transition:     color 0.2s ease;
        }
        .nav-mobile-link:last-child {
          border-bottom: none;
        }
        .nav-mobile-link:hover,
        .nav-mobile-link.nav-link--active {
          color: var(--cyan);
        }

        /* Responsive breakpoint */
        @media (max-width: 900px) {
          .nav-desktop    { display: none !important; }
          .nav-hamburger  { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-mobile-panel { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default TopNav;
