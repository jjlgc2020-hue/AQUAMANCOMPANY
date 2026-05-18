// Aquaman shared components — logos, icons, primitives

const Logo = ({ mark = 'dark', size = 1 }) => {
  // Stylized "A" wordmark inspired by the flyer (chevron/triangular A)
  const ink = mark === 'light' ? '#FFFFFF' : '#0B1A2E';
  const blue = '#1E5BC6';
  const blueBright = '#2F7BFF';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 * size }}>
      <svg width={44 * size} height={44 * size} viewBox="0 0 44 44" fill="none">
        {/* Outer chevron A */}
        <path d="M22 2 L42 42 L32 42 L22 22 L12 42 L2 42 Z" fill={ink} />
        {/* Inner bright triangle */}
        <path d="M22 10 L29 26 L22 26 L15 26 Z" fill={blueBright} />
        {/* Crossbar */}
        <rect x="14" y="30" width="16" height="2.5" fill={blue} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 22 * size,
          color: ink, letterSpacing: '-0.01em',
        }}>
          AQUA<span style={{ color: blue }}>MAN</span>
        </div>
        <div style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: 9 * size,
          color: mark === 'light' ? 'rgba(255,255,255,.65)' : '#5B6B82',
          letterSpacing: '0.32em', marginTop: 3,
        }}>
          SERVICES · MOBILE DETAILING
        </div>
      </div>
    </div>
  );
};

/* ─── Service icons (line, hex container handled by parent) ─── */
const Icon = {
  ExteriorWash: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M3 18 L5 12 C5.5 10.5 6.5 10 8 10 L20 10 C21.5 10 22.5 10.5 23 12 L25 18" stroke="#0B1A2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="18" width="22" height="4" rx="1.5" fill="#0B1A2E" />
      <circle cx="8" cy="22" r="2.5" fill="#0B1A2E" />
      <circle cx="20" cy="22" r="2.5" fill="#0B1A2E" />
      <path d="M9 6 L9.7 7.5 L11.2 8.2 L9.7 8.9 L9 10.4 L8.3 8.9 L6.8 8.2 L8.3 7.5 Z" fill="#1E5BC6" />
      <path d="M22 4 L22.5 5 L23.5 5.5 L22.5 6 L22 7 L21.5 6 L20.5 5.5 L21.5 5 Z" fill="#1E5BC6" />
    </svg>
  ),
  Shield: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3 L24 6 V14 C24 19.5 20 23.5 14 25.5 C8 23.5 4 19.5 4 14 V6 Z" stroke="#0B1A2E" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 10 C14 10 11 13 11 15.5 C11 17.4 12.3 18.5 14 18.5 C15.7 18.5 17 17.4 17 15.5 C17 13 14 10 14 10 Z" fill="#1E5BC6" />
    </svg>
  ),
  Seat: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 4 C8 4 7 7 7 11 V18 H17 V11 C17 7 16 4 16 4 Z" stroke="#0B1A2E" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 18 H22 V22 H7 Z" stroke="#0B1A2E" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17 14 H22 V18" stroke="#0B1A2E" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="20" cy="7" r="1.2" fill="#1E5BC6" />
      <circle cx="22.5" cy="9.5" r="0.8" fill="#1E5BC6" />
    </svg>
  ),
  Vacuum: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="14" y="10" width="10" height="12" rx="2" stroke="#0B1A2E" strokeWidth="1.8" />
      <path d="M14 14 C10 14 9 12 9 9 V5" stroke="#0B1A2E" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="6" y="3" width="6" height="3" rx="1" fill="#0B1A2E" />
      <path d="M14 22 H10 V25 H22 V22" stroke="#0B1A2E" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="19" cy="16" r="1.5" fill="#1E5BC6" />
    </svg>
  ),
  Pin: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3 C9.6 3 6 6.4 6 10.8 C6 16.5 14 25 14 25 C14 25 22 16.5 22 10.8 C22 6.4 18.4 3 14 3 Z" fill="#0B1A2E" />
      <circle cx="14" cy="11" r="3" fill="#FFFFFF" />
    </svg>
  ),
  Truck: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M2 8 H16 V20 H2 Z M16 12 H22 L25 16 V20 H16 Z" stroke="#0B1A2E" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="7" cy="22" r="2.4" fill="#0B1A2E" />
      <circle cx="20" cy="22" r="2.4" fill="#0B1A2E" />
      <path d="M3 11 L5 9" stroke="#1E5BC6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 14 L6 11" stroke="#1E5BC6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 4 L9 4 L11 9 L8.5 10.5 C9.5 13 11 14.5 13.5 15.5 L15 13 L20 15 V19 C20 19.5 19.5 20 19 20 C11 20 4 13 4 5 C4 4.5 4.5 4 5 4 Z" fill="currentColor" />
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7 L12 13 L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Message: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21 12a8 8 0 0 1-11.6 7.15L4 21l1.85-5.4A8 8 0 1 1 21 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="8.5" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  Facebook: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" fill="currentColor" />
    </svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  ),
  Sparkle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 12 L10 18 L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12 H19 M13 6 L19 12 L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L15 9 L22 9.5 L17 14.5 L18.5 22 L12 18 L5.5 22 L7 14.5 L2 9.5 L9 9 Z" />
    </svg>
  ),
};

/* Decorative hex frame for icons */
const HexIcon = ({ children, blue }) => (
  <div style={{ position: 'relative', width: 72, height: 80, flexShrink: 0 }}>
    <svg width="72" height="80" viewBox="0 0 72 80" style={{ position: 'absolute', inset: 0 }}>
      <path
        d="M36 2 L66 18 L66 62 L36 78 L6 62 L6 18 Z"
        fill={blue ? '#1E5BC6' : '#FFFFFF'}
        stroke={blue ? '#1E5BC6' : '#1E5BC6'}
        strokeWidth="1.5"
      />
      {!blue && (
        <path
          d="M36 8 L60 21 L60 59 L36 72 L12 59 L12 21 Z"
          fill="none"
          stroke="#1E5BC6"
          strokeWidth="1"
          opacity="0.3"
        />
      )}
    </svg>
    <div style={{
      position: 'absolute', inset: 0,
      display: 'grid', placeItems: 'center',
      color: blue ? '#FFFFFF' : '#0B1A2E',
    }}>
      {children}
    </div>
  </div>
);

/* Animated section reveal */
const Reveal = ({ children, delay = 0, style }) => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity .8s ease ${delay}s, transform .8s cubic-bezier(.2,.8,.2,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
};

/* Section title block */
const SectionTitle = ({ eyebrow, title, subtitle, light, align = 'left' }) => (
  <div style={{ textAlign: align, marginBottom: 48, maxWidth: align === 'center' ? 720 : 600, marginInline: align === 'center' ? 'auto' : 0 }}>
    <div className="eyebrow" style={{ color: light ? '#5C8CE0' : '#1E5BC6', display: 'flex', alignItems: 'center', gap: 12, justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
      <span style={{ width: 24, height: 1, background: 'currentColor', display: 'inline-block' }}></span>
      {eyebrow}
      <span style={{ width: 24, height: 1, background: 'currentColor', display: 'inline-block' }}></span>
    </div>
    <h2 className="display" style={{
      fontSize: 'clamp(36px, 5vw, 56px)', margin: '14px 0 14px',
      color: light ? '#FFFFFF' : '#0B1A2E',
    }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{
        margin: 0, fontSize: 17, lineHeight: 1.6,
        color: light ? 'rgba(255,255,255,.75)' : '#5B6B82',
      }}>
        {subtitle}
      </p>
    )}
  </div>
);

Object.assign(window, { Logo, Icon, HexIcon, Reveal, SectionTitle });
