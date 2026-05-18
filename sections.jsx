// Aquaman page sections — Hero, Services, Process, Gallery, Testimonials, Stats, Contact, Footer

const PHONE = '(901) 340-9733';
const PHONE_HREF = 'tel:+19013409733';
const IG = '@aquamanservicesllc';
const IG_HREF = 'https://www.instagram.com/aquamanservicesllc?igsh=dW00aXl3ZW82czFp&utm_source=qr';
const FB = 'Aquaman Services';
const FB_HREF = 'https://www.facebook.com/share/1SXb4mEzVP/?mibextid=wwXIfr';
const EMAIL = 'Aquamancarwash2024@gmail.com';
const EMAIL_HREF = 'mailto:Aquamancarwash2024@gmail.com';

/* ─────────── NAV ─────────── */

const CircularLogo = () =>
<a href="#top" style={{
  display: 'inline-flex', alignItems: 'center', gap: 16,
  color: 'white', flexShrink: 0,
  textDecoration: 'none'
}}>
    <div style={{
    width: 52, height: 52,
    background: 'linear-gradient(135deg, #15315A 0%, #1E5BC6 100%)',
    borderRadius: '50%',
    display: 'grid', placeItems: 'center',
    boxShadow: '0 4px 14px rgba(30,91,198,.35)',
    flexShrink: 0
  }}>
      <img
      src="images/aquaman-logo.svg"
      alt="Aquaman"
      style={{ width: 32, height: 32, display: 'block', filter: 'brightness(0) invert(1)' }} />
    
    </div>
    <span style={{
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontWeight: 800,
    fontSize: 26,
    letterSpacing: '-0.025em',
    color: 'white',
    lineHeight: 1
  }}>                        AQUAMAN

  </span>
  </a>;


const Nav = ({ onBook }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
  { id: 'services', label: 'Services' },
  { id: 'enhancements', label: 'Enhancement' },
  { id: 'reel', label: 'Videos' },
  { id: 'contact', label: 'Contact' }];

  const socials = [
  { href: IG_HREF, label: 'Instagram', icon: <Icon.Instagram />, hover: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FCB045 100%)', color: '#E1306C' },
  { href: FB_HREF, label: 'Facebook', icon: <Icon.Facebook />, hover: '#1877F2', color: '#1877F2' },
  { href: `sms:${PHONE.replace(/[^\d+]/g, '')}`, label: 'Text message', icon: <Icon.Message />, hover: '#22C55E', color: '#22C55E' }];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(0, 0, 0, .88)' : 'rgba(0, 0, 0, .35)',
      backdropFilter: scrolled ? 'blur(14px)' : 'blur(6px)',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'blur(6px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.06)' : '1px solid transparent',
      transition: 'background .3s ease, border-color .3s ease, backdrop-filter .3s ease'
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 28px', gap: 24
      }}>
        <CircularLogo />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-links">
          {links.map((l, i) =>
          <a key={i} href={`#${l.id}`} style={{
            color: '#FFFFFF', fontSize: 15, fontWeight: 500,
            fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.01em',
            transition: 'opacity .15s ease',
            opacity: 0.92
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.65'}
          onMouseLeave={(e) => e.target.style.opacity = '0.92'}>
            
              {l.label}
            </a>
          )}
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }} className="nav-right">
          <a href={PHONE_HREF} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            color: 'white'
          }} className="nav-call">
            {/* Speech bubble badge */}
            <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
              <svg viewBox="0 0 80 80" width="64" height="64">
                <path
                  d="M 40,8 C 60,8 74,22 74,40 C 74,58 60,72 40,72 C 36,72 32,71 28,70 L 14,76 L 18,62 C 10,56 6,48 6,40 C 6,22 20,8 40,8 Z"
                  fill="none" stroke="#2F7BFF" strokeWidth="1.5" />
                
              </svg>
              <div style={{
                position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
                fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 22, color: 'white',
                paddingBottom: 8
              }}>
                24
              </div>
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '.16em',
                color: '#2F7BFF', textTransform: 'uppercase'
              }}>Call us</div>
              <div style={{
                fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 17, color: 'white'
              }}>{PHONE}</div>
            </div>
          </a>

          {/* Social icons row — sibling of the phone <a>, not nested */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="nav-socials">
            {socials.map((s, i) =>
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith('sms:') ? undefined : '_blank'}
              rel="noreferrer noopener"
              aria-label={s.label}
              title={s.label}
              style={{
                width: 28, height: 28,
                display: 'grid', placeItems: 'center',
                borderRadius: 6,
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.14)',
                color: 'white',
                transition: 'all .2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = s.hover;
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)';
                e.currentTarget.style.transform = '';
              }}>
              
                <span style={{ width: 14, height: 14, display: 'grid', placeItems: 'center' }}>
                  {React.cloneElement(s.icon, { width: 14, height: 14 })}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1080px) {
          .nav-links { display: none !important; }
        }
        @media (max-width: 640px) {
          .nav-call > div:last-child { display: none !important; }
        }
      `}</style>
    </header>);

};

/* ─────────── HERO ─────────── */
// 🎬 Para cambiar el video de fondo, reemplaza este URL con tu propio archivo .mp4
// Puede ser una URL externa o un archivo en este proyecto (ej. "videos/hero.mp4")
const HERO_VIDEO_SRC = 'videos/hero.mp4';
const HERO_VIDEO_POSTER = ''; // opcional: imagen de respaldo mientras carga

const Hero = ({ onBook }) =>
<section id="top" style={{
  position: 'relative',
  background: '#000',
  color: 'white', overflow: 'hidden',
  minHeight: '100vh', display: 'flex', alignItems: 'center',
  paddingTop: 140, paddingBottom: 80
}}>
    {/* Background video */}
    <video
    autoPlay muted loop playsInline
    poster={HERO_VIDEO_POSTER}
    style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      objectFit: 'cover', zIndex: 0
    }}>
    
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
    </video>
    {/* Cinematic dark overlay — keeps the video visible but legible */}
    <div style={{
    position: 'absolute', inset: 0, zIndex: 1,
    background: 'linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.35) 40%, rgba(0,0,0,.55) 100%)'
  }}></div>
    {/* Vignette */}
    <div style={{
    position: 'absolute', inset: 0, zIndex: 1,
    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,.7) 100%)'
  }}></div>

    <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
      <div className="fadeup" style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Eyebrow */}
        <div style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500,
        fontSize: 'clamp(16px, 1.6vw, 19px)',
        color: 'rgba(255,255,255,.85)', letterSpacing: '-0.01em',
        marginBottom: 24
      }}>
          We come to you · Premium detailing on demand
        </div>

        {/* Main title */}
        <h1 className="display" style={{
        fontSize: 'clamp(40px, 7vw, 96px)',
        margin: '0 0 36px',
        lineHeight: 1.02,
        fontWeight: 700,
        color: 'white',
        letterSpacing: '-0.04em',
        textShadow: '0 4px 30px rgba(0,0,0,.5)',
        textWrap: 'balance'
      }}>
          Premium mobile detailing,<br />
          brought to your driveway.
        </h1>

        {/* Vertical divider line */}
        <div style={{
        width: 1, height: 60,
        background: 'linear-gradient(180deg, transparent, rgba(255,255,255,.5), transparent)',
        margin: '0 auto 40px'
      }}></div>

        {/* CTAs */}
        <div style={{
        display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'
      }}>
          <button className="btn btn-primary" onClick={onBook}
        style={{ fontSize: 14, padding: '18px 32px' }}>
            Book Your Detail <Icon.Arrow />
          </button>
          <a href="#services" className="btn btn-ghost"
        style={{ fontSize: 14, padding: '18px 32px' }}>
            Our Services
          </a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div style={{
    position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
    color: 'rgba(255,255,255,.5)', fontSize: 10, letterSpacing: '.24em',
    textTransform: 'uppercase', fontWeight: 700, zIndex: 2
  }}>
      <span>Scroll</span>
      <div style={{ width: 1, height: 40, background: 'linear-gradient(180deg, rgba(255,255,255,.5), transparent)' }}></div>
    </div>
  </section>;


/* ─────────── MARQUEE ─────────── */

/* ─────────── BRANDS MARQUEE ─────────── */
const BrandLogo = ({ name }) => {
  const logos = {
    meguiars:
    <svg viewBox="0 0 200 60" width="160" height="48" style={{ display: 'block' }}>
        <text x="100" y="38" textAnchor="middle"
      style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: 30, fontWeight: 800, fontStyle: 'italic',
        letterSpacing: '-0.04em', fill: 'currentColor',
      }}>
          Meguiar<tspan dx="-3">’</tspan>s
        </text>
        <line x1="32" y1="48" x2="168" y2="48" stroke="currentColor" strokeWidth="1.5" />
      </svg>,

    ps:
    <svg viewBox="0 0 220 60" width="180" height="48" style={{ display: 'block' }}>
        <g transform="translate(8,10)">
          <rect x="0" y="0" width="36" height="40" rx="3" fill="currentColor" />
          <text x="18" y="28" textAnchor="middle"
        style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 18, fontWeight: 900, fill: '#0B1A2E' }}>
            P&amp;S
          </text>
        </g>
        <text x="120" y="22" textAnchor="middle"
      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 14, fontWeight: 900, letterSpacing: '.06em', fill: 'currentColor' }}>
          P&amp;S DETAIL
        </text>
        <text x="120" y="42" textAnchor="middle"
      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, letterSpacing: '.32em', fill: 'currentColor', opacity: 0.7 }}>
          PRODUCTS
        </text>
      </svg>,

    superior:
    <svg viewBox="0 0 200 60" width="160" height="48" style={{ display: 'block' }}>
        <g transform="translate(100, 8)">
          <path d="M 0,-2 L 4,8 L 14,8 L 6,14 L 9,24 L 0,18 L -9,24 L -6,14 L -14,8 L -4,8 Z"
        fill="currentColor" opacity="0.85" />
        </g>
        <text x="100" y="48" textAnchor="middle"
      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 18, fontWeight: 900, letterSpacing: '.14em', fill: 'currentColor' }}>
          SUPERIOR
        </text>
      </svg>,

    turtle:
    <svg viewBox="0 0 220 60" width="180" height="48" style={{ display: 'block' }}>
        <g transform="translate(8, 12) scale(0.85)">
          <ellipse cx="22" cy="20" rx="20" ry="14" fill="currentColor" />
          <path d="M 8,20 L 36,20 M 22,8 L 22,32 M 14,12 L 30,28 M 30,12 L 14,28"
        stroke="#0B1A2E" strokeWidth="1.5" opacity="0.5" fill="none" />
          <circle cx="42" cy="20" r="5" fill="currentColor" />
          <rect x="6" y="32" width="6" height="4" rx="2" fill="currentColor" />
          <rect x="32" y="32" width="6" height="4" rx="2" fill="currentColor" />
        </g>
        <text x="148" y="38" textAnchor="middle"
      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 22, fontWeight: 900, letterSpacing: '.04em', fill: 'currentColor' }}>
          TURTLE WAX
        </text>
      </svg>,

    chemicalguys:
    <svg viewBox="0 0 240 60" width="190" height="48" style={{ display: 'block' }}>
        <text x="120" y="32" textAnchor="middle"
      style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: 22, fontWeight: 800, fontStyle: 'italic',
        letterSpacing: '-0.01em', fill: 'currentColor',
      }}>
          Chemical Guys
        </text>
        <path d="M 30,30 Q 50,22 70,30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 170,30 Q 190,22 210,30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="120" y="50" textAnchor="middle"
      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 8, fontWeight: 700, letterSpacing: '.32em', fill: 'currentColor', opacity: 0.6 }}>
          PROFESSIONAL DETAILING
        </text>
      </svg>,

    suds:
    <svg viewBox="0 0 200 60" width="160" height="48" style={{ display: 'block' }}>
        <g transform="translate(20, 30)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="-3" cy="-3" r="2" fill="currentColor" opacity="0.6" />
        </g>
        <text x="120" y="26" textAnchor="middle"
      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 20, fontWeight: 900, letterSpacing: '.18em', fill: 'currentColor' }}>
          SUDS
        </text>
        <text x="120" y="46" textAnchor="middle"
      style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 10, fontWeight: 600, letterSpacing: '.42em', fill: 'currentColor', opacity: 0.7 }}>
          L A B
        </text>
      </svg>,
  };
  return logos[name] || <span style={{ fontWeight: 700 }}>{name}</span>;
};

const brandList = [
{ id: 'meguiars', name: "Meguiar's" },
{ id: 'ps', name: 'P&S Detail Products' },
{ id: 'superior', name: 'Superior Products' },
{ id: 'turtle', name: 'Turtle Wax' },
{ id: 'chemicalguys', name: 'Chemical Guys' },
{ id: 'suds', name: 'Suds Lab' }];


const BrandsMarquee = () => {
  const loopBrands = [...brandList, ...brandList];
  return (
    <section style={{
      background: '#0B1A2E',
      borderTop: '1px solid rgba(255,255,255,.06)',
      borderBottom: '1px solid rgba(255,255,255,.06)',
      padding: '36px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <span style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: 11, fontWeight: 700,
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: '#5C8CE0'
        }}>
          Our trusted brands
        </span>
      </div>
      <div className="brand-marquee">
        <div className="brand-track">
          {loopBrands.map((b, i) =>
          <div key={i} className="brand-item" aria-label={b.name} title={b.name}>
              <BrandLogo name={b.id} />
            </div>
          )}
        </div>
      </div>
      <style>{`
        .brand-marquee {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%);
        }
        .brand-track {
          display: flex;
          align-items: center;
          gap: 70px;
          width: max-content;
          animation: brand-scroll 38s linear infinite;
        }
        .brand-marquee:hover .brand-track {
          animation-play-state: paused;
        }
        .brand-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 56px;
          color: rgba(255,255,255,.7);
          opacity: 0.85;
          transition: opacity .3s ease, color .3s ease, transform .3s ease;
          padding: 0 4px;
        }
        .brand-item:hover {
          opacity: 1;
          color: #FFFFFF;
          transform: scale(1.05);
        }
        @keyframes brand-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 720px) {
          .brand-track { gap: 50px; animation-duration: 30s; }
          .brand-item { height: 44px; }
          .brand-item svg { width: 130px !important; height: 38px !important; }
        }
      `}</style>
    </section>);

};

/* ─────────── MARQUEE (legacy values strip) ─────────── */
const Marquee = () => {
  const items = ['PROFESSIONAL', 'RELIABLE', 'TRUSTED', 'MOBILE', 'CERTIFIED', 'INSURED'];
  const Row = () =>
  <>
      {items.map((it, i) =>
    <span key={i} style={{
      display: 'inline-flex', alignItems: 'center', gap: 60,
      fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 36,
      color: 'rgba(11,26,46,.08)', letterSpacing: '.02em'
    }}>
          {it}
          <span style={{ color: '#1E5BC6', fontSize: 18 }}>◆</span>
        </span>
    )}
    </>;

  return (
    <div className="marquee" style={{ background: '#0B1A2E', padding: '18px 0', borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div className="marquee-track">
        {[1, 2, 3].map((i) =>
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 60, flexShrink: 0 }}>
            {items.map((it, j) =>
          <span key={j} style={{
            display: 'inline-flex', alignItems: 'center', gap: 60,
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 28,
            color: 'rgba(255,255,255,.12)', letterSpacing: '.06em',
            whiteSpace: 'nowrap'
          }}>
                {it}
                <span style={{ color: '#2F7BFF', fontSize: 14 }}>◆</span>
              </span>
          )}
          </div>
        )}
      </div>
    </div>);

};

/* ─────────── SERVICES ─────────── */
const services = [
{
  icon: <Icon.ExteriorWash />,
  title: 'Exterior Car Cleaning',
  desc: 'Hand wash, wheel & rim cleaning, tire shine, glass cleaning and exterior dressing.',
  features: ['Two-bucket hand wash', 'Wheels & tires', 'Window cleaning']
},
{
  icon: <Icon.Shield />,
  title: 'Exterior Protection',
  desc: 'Ceramic spray sealant for long-lasting shine, hydrophobic finish and UV resistance.',
  features: ['Ceramic spray sealant', '3-month protection', 'Paint decontamination'],
  featured: true
},
{
  icon: <Icon.Seat />,
  title: 'Interior Car Cleaning',
  desc: 'Vacuum, wipe-down of all surfaces, dashboard treatment and interior detail.',
  features: ['Full vacuum', 'Dash & console wipe', 'Door panels']
},
{
  icon: <Icon.Vacuum />,
  title: 'Deep Interior Cleaning',
  desc: 'Seat shampoo, carpet extraction, vent & crevice cleaning. For heavy use vehicles.',
  features: ['Seat shampoo', 'Carpet extraction', 'Vents & crevices']
}];


const ServiceCard = ({ s }) =>
<div style={{
  background: s.featured ? '#0B1A2E' : 'white',
  color: s.featured ? 'white' : '#0B1A2E',
  padding: 32, position: 'relative',
  border: s.featured ? 'none' : '1px solid #DDE3EC',
  transition: 'transform .25s ease, box-shadow .25s ease',
  cursor: 'pointer',
  clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))'
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-6px)';
  e.currentTarget.style.boxShadow = '0 20px 40px rgba(11,26,46,.12)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = '';
  e.currentTarget.style.boxShadow = '';
}}>
  
    {s.featured &&
  <div style={{
    position: 'absolute', top: 18, right: 18,
    background: '#2F7BFF', color: 'white',
    padding: '4px 10px', fontSize: 10, fontWeight: 700,
    letterSpacing: '.14em', textTransform: 'uppercase',
    borderRadius: 2
  }}>
        Most popular
      </div>
  }
    <div style={{ marginBottom: 22 }}>
      <HexIcon blue={s.featured}>{s.icon}</HexIcon>
    </div>
    <h3 style={{
    fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 22,
    margin: '0 0 10px', lineHeight: 1.15
  }}>{s.title}</h3>
    <p style={{
    margin: '0 0 18px', fontSize: 14, lineHeight: 1.55,
    color: s.featured ? 'rgba(255,255,255,.7)' : '#5B6B82'
  }}>{s.desc}</p>
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {s.features.map((f) =>
    <li key={f} style={{
      display: 'flex', alignItems: 'center', gap: 10,
      fontSize: 13, color: s.featured ? 'rgba(255,255,255,.85)' : '#0B1A2E'
    }}>
          <span style={{ color: s.featured ? '#2F7BFF' : '#1E5BC6', display: 'flex' }}><Icon.Check /></span>
          {f}
        </li>
    )}
    </ul>
    <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 18, borderTop: `1px solid ${s.featured ? 'rgba(255,255,255,.1)' : '#DDE3EC'}`
  }}>
      <div style={{
      fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
      color: s.featured ? 'rgba(255,255,255,.6)' : '#5B6B82',
      textTransform: 'uppercase'
    }}>
        Mobile · We come to you
      </div>
      <a href="#contact" style={{
      display: 'flex', alignItems: 'center', gap: 6,
      fontSize: 12, fontWeight: 700, letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: s.featured ? '#2F7BFF' : '#1E5BC6'
    }}>
        Book <Icon.Arrow />
      </a>
    </div>
  </div>;


/* ─────────── SERVICES (minimal list) ─────────── */
const allServices = [
'Exterior Hand Wash',
'Interior Detail',
'Deep Interior Cleaning',
'Paint Correction',
'Headlight Restoration',
'Rim Polishing',
'Leather Seat Cleaning',
'Pet Hair Removal',
'Glass Coating',
'Engine Bay Wash',
'Wheel & Tire Detail',
'Odor Removal'];


const motivation = [
{ n: '01', t: 'Detail like it\'s our own', d: 'Every vehicle gets the same care we give our own cars — slow, deliberate, and obsessive about the small stuff.' },
{ n: '02', t: 'Your time matters', d: 'We come to you. No driving across town, no waiting rooms, no half a day wasted at a shop.' },
{ n: '03', t: 'Honest pricing', d: 'No hidden upsells. We tell you what your vehicle actually needs — nothing more, nothing less.' }];


const Services = () =>
<section id="services" style={{
  padding: '120px 0',
  background: 'white',
  position: 'relative'
}}>
    <div className="container">
      <div style={{
      display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80,
      alignItems: 'start'
    }} className="services-layout">

        {/* Left column: services list */}
        <Reveal>
          <div>
            <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '.22em',
            color: '#8B96A8', textTransform: 'uppercase',
            marginBottom: 24
          }}>
              All Services · {allServices.length}
            </div>
            <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            borderTop: '1px solid #DDE3EC'
          }}>
              {allServices.map((s, i) =>
            <li
              key={s}
              className="service-row"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '22px 0',
                borderBottom: '1px solid #DDE3EC',
                cursor: 'pointer',
                transition: 'padding .2s ease'
              }}>
              
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 11, fontWeight: 500,
                  color: '#8B96A8', letterSpacing: '.04em',
                  minWidth: 28
                }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 600, letterSpacing: '-0.02em',
                  color: '#0B1A2E'
                }}>
                      {s}
                    </span>
                  </div>
                  <span className="service-arrow" style={{
                width: 36, height: 36, borderRadius: '50%',
                background: '#F6F8FA',
                display: 'grid', placeItems: 'center',
                color: '#5B6B82',
                transition: 'all .2s ease',
                flexShrink: 0
              }}>
                    <Icon.Arrow />
                  </span>
                </li>
            )}
            </ul>
            <div style={{ marginTop: 32 }}>
              <a href="#contact" className="btn btn-primary" style={{ fontSize: 14 }}>
                Get a quote for any service <Icon.Arrow />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right column: heading + motivation */}
        <Reveal delay={0.1}>
          <div style={{ position: 'sticky', top: 120 }}>
            <div className="eyebrow" style={{ color: '#1E5BC6', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 24, height: 1, background: 'currentColor' }}></span>
              What we do
            </div>
            <h2 className="display" style={{
            fontSize: 'clamp(36px, 4.6vw, 56px)',
            margin: '0 0 22px',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            color: '#0B1A2E',
            lineHeight: 1.02
          }}>
              Every detail.<br />Done right.
            </h2>
            <p style={{
            margin: '0 0 40px', fontSize: 16, lineHeight: 1.65,
            color: '#5B6B82', maxWidth: 440
          }}>
              From a quick hand wash to a full transformation — we bring water, power and pro-grade products straight to your driveway.
            </p>

            {/* Motivation pillars */}
            <div style={{
            display: 'flex', flexDirection: 'column', gap: 4,
            borderTop: '1px solid #DDE3EC', paddingTop: 8
          }}>
              {motivation.map((m, i) =>
            <div key={m.n} style={{
              padding: '24px 0',
              borderBottom: i < motivation.length - 1 ? '1px solid #DDE3EC' : 'none',
              display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 20,
              alignItems: 'start'
            }}>
                  <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11, fontWeight: 500,
                color: '#1E5BC6', letterSpacing: '.08em',
                paddingTop: 4
              }}>
                    {m.n}
                  </div>
                  <div>
                    <div style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 17, fontWeight: 700,
                  letterSpacing: '-0.015em', color: '#0B1A2E',
                  marginBottom: 6
                }}>
                      {m.t}
                    </div>
                    <div style={{
                  fontSize: 14, lineHeight: 1.55, color: '#5B6B82'
                }}>
                      {m.d}
                    </div>
                  </div>
                </div>
            )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>

    <style>{`
      .service-row:hover {
        padding-left: 8px !important;
      }
      .service-row:hover .service-arrow {
        background: #0B1A2E !important;
        color: white !important;
      }
      @media (max-width: 900px) {
        .services-layout { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>;


/* ─────────── PROCESS ─────────── */
const Process = () => {
  const steps = [
  { n: '01', t: 'Book Online or Call', d: 'Pick a service and a time slot. Text or call us directly — we confirm fast.', icon: <Icon.Phone /> },
  { n: '02', t: 'We Drive To You', d: 'Home, work, or anywhere you are. Our mobile rig brings water, power, and pro tools.', icon: <Icon.Truck /> },
  { n: '03', t: 'We Detail On-Site', d: 'Professional wash, polish or interior service. Typically 1.5–3 hours start to finish.', icon: <Icon.Sparkle /> },
  { n: '04', t: 'You Drive Off Shining', d: 'Walk-around inspection, satisfaction guaranteed. Pay by card, cash or Zelle.', icon: <Icon.Check /> }];

  return (
    <section id="process" style={{
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
      color: 'white'
    }}>
      {/* Full-bleed background image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(images/raptor.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0B1A2E'
      }}></div>
      {/* Dark overlay for legibility */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg, rgba(11,26,46,.78) 0%, rgba(11,26,46,.72) 50%, rgba(11,26,46,.85) 100%)'
      }}></div>
      {/* Hex pattern texture */}
      <div className="hex-bg-dark" style={{
        position: 'absolute', inset: 0, zIndex: 1, opacity: 0.25
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="process-grid">
          <Reveal>
            <div style={{ position: 'sticky', top: 120 }}>
              <SectionTitle
                eyebrow="How it works"
                title="From booking to clean in 4 simple steps."
                subtitle="No drop-offs. No waiting rooms. No driving around. We come to you — wherever 'you' happens to be."
                light />
              
              <div style={{ display: 'flex', gap: 14 }}>
                <a href="#contact" className="btn btn-primary">
                  Get a quote <Icon.Arrow />
                </a>
              </div>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {steps.map((s, i) =>
            <Reveal key={s.n} delay={i * 0.1}>
                <div style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28,
                padding: '28px 0',
                borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,.15)' : 'none',
                position: 'relative'
              }}>
                  <div style={{
                  fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 64,
                  color: 'transparent', WebkitTextStroke: '1.5px #2F7BFF',
                  lineHeight: 1, alignSelf: 'start'
                }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                      <div style={{
                      width: 32, height: 32, borderRadius: 6,
                      background: '#2F7BFF', color: 'white',
                      display: 'grid', placeItems: 'center'
                    }}>{s.icon}</div>
                      <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 22, margin: 0, color: 'white' }}>{s.t}</h3>
                    </div>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,.78)', fontSize: 15, lineHeight: 1.6, paddingLeft: 44 }}>{s.d}</p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>);

};

/* ─────────── ENHANCEMENT SERVICES ─────────── */
const enhancements = [
{ name: 'Interior Detail', desc: 'Full cabin refresh', video: 'videos/enh-interior.mp4' },
{ name: 'Paint Correction', desc: 'Swirl & scratch removal', video: 'videos/enh-paint.mp4' },
{ name: 'Headlight Restoration', desc: 'Clear hazy lenses', video: 'videos/enh-headlight.mp4' },
{ name: 'Rim Polishing', desc: 'Pulido de rines', video: 'videos/enh-rim.mp4' },
{ name: 'Leather Seat Cleaning', desc: 'Limpieza de cuero', video: 'videos/enh-leather.mp4' },
{ name: 'Pet Hair Removal', desc: 'Limpieza de pelos', video: 'videos/enh-pet.mp4' },
{ name: 'Glass Coating', desc: 'Hydrophobic windows', video: 'videos/enh-glass.mp4' },
{ name: 'Engine Bay Wash', desc: 'Steam degrease & detail', video: 'videos/enh-engine.mp4' }];


const Enhancements = () =>
<section id="enhancements" style={{
  padding: '120px 0',
  background: '#0B1A2E',
  color: 'white', position: 'relative', overflow: 'hidden'
}}>
    <div className="hex-bg-dark" style={{ position: 'absolute', inset: 0, opacity: 0.4 }}></div>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60,
      alignItems: 'end', marginBottom: 56
    }} className="enh-header">
        <Reveal>
          <SectionTitle
          eyebrow="Enhancement services"
          title={<>Restore, protect <span style={{ color: '#2F7BFF' }}>& elevate.</span></>}
          light />
        
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{
          margin: '0 0 24px', fontSize: 16, lineHeight: 1.65,
          color: 'rgba(255,255,255,.7)', maxWidth: 540
        }}>
            At Aquaman Services, we <strong style={{ color: 'white' }}>restore</strong>, <strong style={{ color: 'white' }}>protect</strong> and <strong style={{ color: 'white' }}>elevate</strong> the appearance of your vehicle so it keeps looking its best. Long-lasting finishes that revitalize every surface.
          </p>
        </Reveal>
      </div>

      <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 20
    }} className="enh-grid">
        {enhancements.map((e, i) =>
      <Reveal key={e.name} delay={i * 0.06}>
            <EnhancementCard e={e} index={i} />
          </Reveal>
      )}
      </div>

      <Reveal delay={0.4}>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: 14 }}>
            Request Enhancement Quote <Icon.Arrow />
          </a>
        </div>
      </Reveal>
    </div>
    <style>{`
      /* Desktop: 8-col grid, each card spans 2 cols = 4 per row, 4+4 with 8 cards. */
      .enh-grid > * { grid-column: span 2; }
      @media (max-width: 1100px) {
        .enh-grid { grid-template-columns: repeat(6, 1fr) !important; }
      }
      @media (max-width: 900px) {
        .enh-header { grid-template-columns: 1fr !important; align-items: start !important; }
        .enh-grid { grid-template-columns: repeat(4, 1fr) !important; }
      }
      @media (max-width: 600px) {
        .enh-grid { grid-template-columns: 1fr !important; }
        .enh-grid > * { grid-column: auto !important; }
      }
    `}</style>
  </section>;


const EnhancementCard = ({ e, index }) => {
  const [hover, setHover] = React.useState(false);
  const [inView, setInView] = React.useState(false);
  const videoRef = React.useRef(null);
  const cardRef = React.useRef(null);

  // Detect when card is in viewport
  React.useEffect(() => {
    if (!cardRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto-play when in view + trim last 5 seconds (some clips have outro/promo)
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const TRIM_END = 5; // seconds to skip at the end
    const onTimeUpdate = () => {
      if (v.duration && v.currentTime >= v.duration - TRIM_END) {
        v.currentTime = 0;
        const p = v.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      }
    };
    v.addEventListener('timeupdate', onTimeUpdate);

    if (inView) {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      v.pause();
    }
    return () => v.removeEventListener('timeupdate', onTimeUpdate);
  }, [inView]);

  // Subtle distinct tint per card so placeholders aren't identical
  const tints = [
  'linear-gradient(135deg, #1a2940 0%, #2c3f5a 100%)',
  'linear-gradient(135deg, #2a1f40 0%, #4a3060 100%)',
  'linear-gradient(135deg, #15315A 0%, #1E5BC6 100%)',
  'linear-gradient(135deg, #1a2030 0%, #2a3550 100%)',
  'linear-gradient(135deg, #20283a 0%, #364556 100%)',
  'linear-gradient(135deg, #15315A 0%, #2F7BFF 100%)'];

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        aspectRatio: '4/5',
        overflow: 'hidden',
        cursor: 'pointer',
        clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'transform .3s ease'
      }}>
      
      {/* Background — video if provided, else tinted placeholder */}
      {e.video ?
      <>
          <video
          ref={videoRef}
          src={e.video}
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            transition: 'transform .6s ease',
            transform: hover ? 'scale(1.04)' : 'scale(1)'
          }} />
        
          {/* Subtle dark overlay for label readability */}
          <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(11,26,46,.2) 50%, rgba(11,26,46,.85) 100%)',
          pointerEvents: 'none'
        }}></div>
        </> :

      <>
          <div className="slot slot-dark" style={{
          position: 'absolute', inset: 0,
          background: tints[index % tints.length],
          border: 'none',
          transition: 'transform .6s ease',
          transform: hover ? 'scale(1.06)' : 'scale(1)'
        }}>
            <div style={{ color: 'rgba(255,255,255,.45)', textAlign: 'center' }}>
              [ photo ]<br />{e.name.toLowerCase()}
            </div>
          </div>
          <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 40%, rgba(11,26,46,.85) 100%)',
          pointerEvents: 'none'
        }}></div>
        </>
      }

      {/* Label pill — fixed height for uniformity */}
      <div style={{
        position: 'absolute', bottom: 18, left: 18, right: 18,
        background: 'rgba(255,255,255,.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,.16)',
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 12,
        minHeight: 72,
        clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 14px 100%)'
      }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 15, color: 'white',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {e.name}
          </div>
          <div style={{
            fontSize: 11, color: 'rgba(255,255,255,.55)',
            marginTop: 3, letterSpacing: '.02em',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
          }}>
            {e.desc}
          </div>
        </div>
        <div style={{
          width: 32, height: 32, flexShrink: 0,
          background: hover ? '#2F7BFF' : 'rgba(47,123,255,.25)',
          color: 'white',
          display: 'grid', placeItems: 'center',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          transition: 'background .2s ease'
        }}>
          <Icon.Arrow />
        </div>
      </div>

      {/* Corner accent on hover */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 0, height: 0,
        borderTop: hover ? '40px solid #2F7BFF' : '40px solid transparent',
        borderLeft: '40px solid transparent',
        transition: 'border-color .3s ease'
      }}></div>
    </div>);

};

const FeaturedEnhancementCard = ({ e }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        marginTop: 20,
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        background: 'linear-gradient(135deg, #15315A 0%, #1E5BC6 100%)',
        color: 'white',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))',
        cursor: 'pointer',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform .3s ease'
      }}
      className="featured-enh">
      
      {/* Image side */}
      <div style={{
        position: 'relative',
        minHeight: 360,
        background: 'linear-gradient(135deg, #0B1A2E 0%, #15315A 100%)',
        overflow: 'hidden',
        display: 'grid', placeItems: 'center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(47,123,255,.25) 0%, transparent 60%)'
        }}></div>
        <div className="hex-bg-dark" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}></div>
        <div style={{
          position: 'relative', textAlign: 'center',
          color: 'rgba(255,255,255,.5)'
        }}>
          [ photo ]<br />engine bay before / after
        </div>
        {/* Steam badge */}
        <div style={{
          position: 'absolute', top: 20, left: 20,
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px',
          background: 'rgba(47,123,255,.2)',
          border: '1px solid rgba(47,123,255,.4)',
          fontSize: 10, fontWeight: 700, letterSpacing: '.16em',
          textTransform: 'uppercase', color: '#5C8CE0',
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        }}>
          <Icon.Sparkle /> Steam Detail
        </div>
      </div>

      {/* Content side */}
      <div style={{
        padding: '44px 48px', position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(11,26,46,.4) 0%, transparent 100%)'
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '6px 14px',
          background: 'rgba(255,255,255,.12)',
          border: '1px solid rgba(255,255,255,.2)',
          marginBottom: 18, alignSelf: 'flex-start',
          fontSize: 10, fontWeight: 700, letterSpacing: '.16em',
          textTransform: 'uppercase'
        }}>
          <span style={{ color: '#2F7BFF' }}>★</span> Premium Service
        </div>
        <h3 className="display" style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 44px)',
          margin: '0 0 14px', lineHeight: 1, letterSpacing: '-0.01em'
        }}>
          {e.name}
        </h3>
        <p style={{
          margin: '0 0 22px', fontSize: 15, lineHeight: 1.6,
          color: 'rgba(255,255,255,.78)', maxWidth: 440
        }}>
          {e.desc}
        </p>
        <ul style={{
          listStyle: 'none', padding: 0, margin: '0 0 28px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px'
        }}>
          {e.bullets.map((b) =>
          <li key={b} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: 13, color: 'rgba(255,255,255,.9)'
          }}>
              <span style={{ color: '#2F7BFF', display: 'flex' }}><Icon.Check /></span>
              {b}
            </li>
          )}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: 13 }}>
            Book Engine Wash <Icon.Arrow />
          </a>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.16em',
              color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' }}>Starting at</span>
            <span className="display" style={{ fontSize: 26, fontWeight: 900 }}>$65</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .featured-enh { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>);

};

/* ─────────── REEL (vertical video gallery, hover to play) ─────────── */
const reelClips = [
{ src: 'videos/clip-1.mp4' },
{ src: 'videos/clip-2.mp4' },
{ src: 'videos/clip-3.mp4' },
{ src: 'videos/clip-4.mp4' },
{ src: 'videos/clip-5.mp4' },
{ src: 'videos/clip-6.mp4' },
{ src: 'videos/clip-7.mp4' }];


const ReelCard = ({ clip, index }) => {
  const ref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(true);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.play().then(() => setPlaying(true)).catch(() => {});
  };
  const pause = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };
  const toggleMute = (e) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div
      onMouseEnter={play}
      onMouseLeave={pause}
      onClick={() => playing ? pause() : play()}
      style={{
        position: 'relative',
        aspectRatio: '9 / 16',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#000',
        clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
        transform: playing ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: playing ?
        '0 30px 60px rgba(30,91,198,.35), 0 0 0 1px rgba(47,123,255,.4)' :
        '0 10px 30px rgba(0,0,0,.3)',
        transition: 'transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease'
      }}>
      
      <video
        ref={ref}
        src={clip.src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover'
        }} />
      

      {/* Always-visible top label */}
      <div style={{
        position: 'absolute', top: 14, left: 14,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 12px',
        background: 'rgba(11,26,46,.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,.18)',
        fontSize: 10, fontWeight: 700, letterSpacing: '.16em',
        textTransform: 'uppercase', color: 'white',
        zIndex: 3
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: playing ? '#2F7BFF' : 'rgba(255,255,255,.6)',
          boxShadow: playing ? '0 0 8px #2F7BFF' : 'none',
          transition: 'all .2s'
        }}></span>
        {playing ? 'Playing' : 'Hover to play'}
      </div>

      {/* Mute toggle (only when playing) */}
      {playing &&
      <button
        onClick={toggleMute}
        style={{
          position: 'absolute', top: 14, right: 14,
          width: 36, height: 36,
          background: 'rgba(11,26,46,.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,.18)',
          color: 'white',
          display: 'grid', placeItems: 'center',
          borderRadius: '50%',
          zIndex: 3,
          cursor: 'pointer'
        }}
        aria-label={muted ? 'Unmute' : 'Mute'}>
        
          {muted ?
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 9 V15 H7 L12 19 V5 L7 9 Z" fill="currentColor" />
              <path d="M16 9 L22 15 M22 9 L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg> :

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 9 V15 H7 L12 19 V5 L7 9 Z" fill="currentColor" />
              <path d="M16 8 C18 10 18 14 16 16 M19 5 C22 8 22 16 19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        }
        </button>
      }

      {/* Play overlay (when paused) */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'grid', placeItems: 'center',
        background: playing ? 'transparent' : 'linear-gradient(180deg, rgba(11,26,46,.1) 0%, rgba(11,26,46,.55) 100%)',
        transition: 'background .3s ease',
        pointerEvents: 'none',
        zIndex: 2
      }}>
        <div style={{
          width: 70, height: 70,
          borderRadius: '50%',
          background: 'rgba(255,255,255,.92)',
          color: '#0B1A2E',
          display: 'grid', placeItems: 'center',
          opacity: playing ? 0 : 1,
          transform: playing ? 'scale(0.6)' : 'scale(1)',
          transition: 'opacity .3s ease, transform .3s ease',
          boxShadow: '0 10px 30px rgba(0,0,0,.4)'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 5 V19 L20 12 Z" />
          </svg>
        </div>
      </div>

      {/* Bottom reel number indicator */}
      <div style={{
        position: 'absolute', bottom: 14, left: 14,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 12px',
        background: 'rgba(11,26,46,.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,.14)',
        fontSize: 10, fontWeight: 700, letterSpacing: '.18em',
        textTransform: 'uppercase', color: 'white',
        zIndex: 3
      }}>
        Reel · {String(index + 1).padStart(2, '0')}
      </div>

      {/* Hover hint (only when not playing, fades out on hover) */}
      <div style={{
        position: 'absolute', bottom: 90, left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(47,123,255,.95)',
        color: 'white',
        padding: '5px 12px',
        fontSize: 9, fontWeight: 700, letterSpacing: '.18em',
        textTransform: 'uppercase',
        opacity: 0,
        transition: 'opacity .3s ease',
        zIndex: 3, pointerEvents: 'none',
        whiteSpace: 'nowrap'
      }}></div>
    </div>);

};

const Reel = () =>
<section id="reel" style={{
  padding: '120px 0',
  background: 'linear-gradient(180deg, #0B1A2E 0%, #0F2540 100%)',
  color: 'white', position: 'relative', overflow: 'hidden'
}}>
    <div className="hex-bg-dark" style={{ position: 'absolute', inset: 0, opacity: 0.4 }}></div>
    <div className="container" style={{ position: 'relative' }}>
      <Reveal>
        <SectionTitle
        eyebrow="In motion"
        title={<>Watch the <span style={{ color: '#2F7BFF' }}>shine.</span></>}
        subtitle="Hover over a clip to see the work in motion — real jobs, real cars, real results. Tap to play with sound."
        light
        align="center" />
      
      </Reveal>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16, maxWidth: 1300, margin: '0 auto'
    }} className="reel-grid">
        {reelClips.map((clip, i) =>
      <Reveal key={clip.src} delay={i * 0.06}>
            <ReelCard clip={clip} index={i} />
          </Reveal>
      )}
      </div>

      <Reveal delay={0.4}>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={IG_HREF} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: 14 }}>
            <Icon.Instagram /> See more on Instagram
          </a>
        </div>
      </Reveal>
    </div>
    <style>{`
      /* 4 per row, with 5–7 centered in second row (4 + 3 layout) */
      .reel-grid > *:nth-child(5) { grid-column-start: 1; }
      @media (max-width: 1100px) {
        .reel-grid { grid-template-columns: repeat(3, 1fr) !important; max-width: 900px !important; }
        .reel-grid > *:nth-child(5) { grid-column-start: auto !important; }
      }
      @media (max-width: 800px) {
        .reel-grid { grid-template-columns: 1fr 1fr !important; max-width: 600px !important; }
      }
      @media (max-width: 500px) {
        .reel-grid { grid-template-columns: 1fr !important; max-width: 320px !important; }
      }
    `}</style>
  </section>;


/* ─────────── STATS ─────────── */
const Stats = () => {
  const stats = [
  { n: '500+', l: 'Vehicles Detailed' },
  { n: '4.9', l: 'Average Rating', sub: '★★★★★' },
  { n: '3 hr', l: 'Average Service Time' },
  { n: '100%', l: 'Satisfaction Guarantee' }];

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0B1A2E 0%, #15315A 100%)',
      color: 'white', position: 'relative', overflow: 'hidden'
    }}>
      <div className="hex-bg-dark" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}></div>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40
        }} className="stats-grid">
          {stats.map((s, i) =>
          <Reveal key={s.l} delay={i * 0.08}>
              <div style={{ borderLeft: '2px solid #2F7BFF', paddingLeft: 24 }}>
                <div className="display" style={{
                fontSize: 'clamp(48px, 5vw, 64px)', fontWeight: 900,
                background: 'linear-gradient(180deg, #FFFFFF 0%, #5C8CE0 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: 8
              }}>
                  {s.n}
                </div>
                {s.sub && <div style={{ color: '#2F7BFF', fontSize: 14, marginBottom: 4 }}>{s.sub}</div>}
                <div style={{
                fontSize: 13, fontWeight: 600, letterSpacing: '.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,.6)'
              }}>{s.l}</div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>);

};

/* ─────────── GALLERY (before/after) ─────────── */
const BeforeAfter = ({ label }) => {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef();
  const dragging = React.useRef(false);

  const handleMove = (clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 4, cursor: 'ew-resize', userSelect: 'none' }}
      onMouseDown={(e) => {dragging.current = true;handleMove(e.clientX);}}
      onMouseMove={(e) => {if (dragging.current) handleMove(e.clientX);}}
      onMouseUp={() => {dragging.current = false;}}
      onMouseLeave={() => {dragging.current = false;}}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}>
      
      {/* "After" image (full) */}
      <div className="slot" style={{ position: 'absolute', inset: 0, background:
        'linear-gradient(135deg, #1E5BC6 0%, #15315A 100%)', color: 'rgba(255,255,255,.8)' }}>
        [ AFTER · {label} ]
      </div>
      {/* "Before" image (clipped) */}
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`
      }}>
        <div className="slot" style={{ position: 'absolute', inset: 0, background:
          'linear-gradient(135deg, #5B6B82 0%, #2A3744 100%)', color: 'rgba(255,255,255,.7)' }}>
          [ BEFORE · {label} ]
        </div>
      </div>
      {/* Divider handle */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: `${pos}%`,
        width: 2, background: 'white', boxShadow: '0 0 16px rgba(0,0,0,.4)',
        transform: 'translateX(-50%)', pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 44, height: 44, borderRadius: '50%',
          background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,.3)',
          display: 'grid', placeItems: 'center',
          color: '#0B1A2E'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 6 L3 12 L9 18 M15 6 L21 12 L15 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <div style={{
        position: 'absolute', top: 14, left: 14,
        background: 'rgba(11,26,46,.7)', color: 'white',
        padding: '4px 10px', fontSize: 10, fontWeight: 700,
        letterSpacing: '.16em', textTransform: 'uppercase'
      }}>Before</div>
      <div style={{
        position: 'absolute', top: 14, right: 14,
        background: '#1E5BC6', color: 'white',
        padding: '4px 10px', fontSize: 10, fontWeight: 700,
        letterSpacing: '.16em', textTransform: 'uppercase'
      }}>After</div>
    </div>);

};

const Gallery = () =>
<section id="gallery" style={{ padding: '120px 0', background: 'var(--paper-2)' }}>
    <div className="container">
      <Reveal>
        <SectionTitle
        eyebrow="The transformation"
        title="See the difference. Drag the slider."
        subtitle="Real results from real customers. Every detail is photographed before and after — no filters, no tricks."
        align="center" />
      
      </Reveal>
      <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24
    }} className="gallery-grid">
        <Reveal><BeforeAfter label="Exterior · Full Detail" /></Reveal>
        <Reveal delay={0.1}><BeforeAfter label="Interior · Deep Clean" /></Reveal>
      </div>
      <Reveal delay={0.2}>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="gallery-thumbs">
          {['Wheels', 'Seats', 'Engine bay', 'Paint correction'].map((l, i) =>
        <div key={l} className="slot" style={{ aspectRatio: '1/1' }}>
              [ {l} ]
            </div>
        )}
        </div>
      </Reveal>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .gallery-grid { grid-template-columns: 1fr !important; }
        .gallery-thumbs { grid-template-columns: repeat(2, 1fr) !important; }
      }
    `}</style>
  </section>;


/* ─────────── SOCIAL ─────────── */
const Social = () => {
  const links = [
  {
    name: 'Instagram',
    handle: IG,
    href: IG_HREF,
    icon: <Icon.Instagram />,
    color: '#E1306C',
    bg: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FCB045 100%)'
  },
  {
    name: 'Facebook',
    handle: FB,
    href: FB_HREF,
    icon: <Icon.Facebook />,
    color: '#1877F2',
    bg: '#1877F2'
  },
  {
    name: 'Text message',
    handle: PHONE,
    href: `sms:${PHONE.replace(/[^\d+]/g, '')}`,
    icon: <Icon.Message />,
    color: '#22C55E',
    bg: '#22C55E'
  }];


  return (
    <section id="social" style={{
      padding: '64px 0',
      background: 'white',
      borderTop: '1px solid #EEF1F4',
      borderBottom: '1px solid #EEF1F4'
    }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 28, flexWrap: 'wrap'
        }}>
          {/* Label */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 2,
            paddingRight: 8
          }}>
            <div style={{
              fontSize: 10, fontWeight: 700, color: '#1E5BC6',
              letterSpacing: '.22em', textTransform: 'uppercase'
            }}>
              Stay connected
            </div>
            <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 18, fontWeight: 700, color: '#0B1A2E',
              letterSpacing: '-0.02em'
            }}>
              Follow & message us
            </div>
          </div>

          {/* Vertical divider */}
          <div style={{
            width: 1, height: 36, background: '#DDE3EC'
          }} className="social-divider"></div>

          {/* Icon pills */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {links.map((l) =>
            <a
              key={l.name}
              href={l.href}
              target={l.href.startsWith('sms:') ? undefined : '_blank'}
              rel="noreferrer noopener"
              aria-label={`${l.name} · ${l.handle}`}
              title={`${l.name} · ${l.handle}`}
              style={{
                width: 48, height: 48,
                display: 'grid', placeItems: 'center',
                borderRadius: 12,
                background: '#F6F8FA',
                border: '1px solid #DDE3EC',
                color: '#5B6B82',
                transition: 'all .2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = l.bg;
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${l.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F6F8FA';
                e.currentTarget.style.borderColor = '#DDE3EC';
                e.currentTarget.style.color = '#5B6B82';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}>
              
                {l.icon}
              </a>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .social-divider { display: none !important; }
        }
      `}</style>
    </section>);

};

/* ─────────── REVIEWS ─────────── */
const reviews = [
{ name: 'Marcus T.', text: 'Aquaman came out to my office during lunch — left for a meeting and came back to a brand new looking truck. Worth every dollar.', stars: 5, service: 'Exterior + Ceramic' },
{ name: 'Brenda K.', text: 'Two kids, one dog, three years of road trips. They got it looking better than the day I bought it. Carpets came out spotless.', stars: 5, service: 'Deep Interior' },
{ name: 'Devon R.', text: 'Professional, on time, fair price. Did my wife\'s car for her birthday and she literally cried. Booking again next month.', stars: 5, service: 'Full Detail' }];


const Reviews = () =>
<section id="reviews" style={{ padding: '120px 0', background: 'white' }}>
    <div className="container">
      <Reveal>
        <SectionTitle
        eyebrow="The reviews"
        title="What folks are saying."
        subtitle="Real reviews from Memphis-area customers. Pulled straight from Google and Instagram DMs."
        align="center" />
      
      </Reveal>
      <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24
    }} className="reviews-grid">
        {reviews.map((r, i) =>
      <Reveal key={r.name} delay={i * 0.1}>
            <div style={{
          background: 'var(--paper-2)', padding: 30,
          border: '1px solid #DDE3EC',
          height: '100%', display: 'flex', flexDirection: 'column',
          clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))'
        }}>
              <div style={{ display: 'flex', gap: 2, color: '#1E5BC6', marginBottom: 16 }}>
                {Array.from({ length: r.stars }).map((_, j) => <Icon.Star key={j} />)}
              </div>
              <p style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 500, fontSize: 18, lineHeight: 1.5,
            margin: '0 0 24px', flex: 1, color: '#0B1A2E'
          }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: 18, borderTop: '1px solid #DDE3EC' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: '#5B6B82' }}>{r.service}</div>
                </div>
                <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '.14em',
              color: '#1E5BC6', textTransform: 'uppercase'
            }}>Verified</div>
              </div>
            </div>
          </Reveal>
      )}
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .reviews-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>;


/* ─────────── CONTACT ─────────── */
const Contact = ({ onBook }) =>
<section id="contact" style={{
  padding: '120px 0',
  background: 'linear-gradient(135deg, #0B1A2E 0%, #0F2540 100%)',
  color: 'white', position: 'relative', overflow: 'hidden'
}}>
    <div className="hex-bg-dark" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}></div>
    {/* Diagonal accent */}
    <div style={{
    position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%',
    background: 'linear-gradient(115deg, transparent 40%, rgba(30,91,198,.2) 100%)',
    clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)'
  }}></div>

    <div className="container" style={{ position: 'relative' }}>
      <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'
    }} className="contact-grid">
        <Reveal>
          <SectionTitle
          eyebrow="Book your detail"
          title={<>Text or call to book your detail <span style={{ color: '#2F7BFF' }}>today.</span></>}
          subtitle="Same-week appointments available. Memphis metro and surrounding areas. We bring everything — you just hand us the keys."
          light />
        

          <a href={PHONE_HREF} style={{
          display: 'flex', alignItems: 'center', gap: 18,
          padding: '22px 28px', background: 'rgba(255,255,255,.06)',
          border: '1px solid rgba(255,255,255,.1)',
          marginBottom: 16, transition: 'background .15s ease',
          clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}>
          
            <div style={{
            width: 56, height: 56, background: '#22C55E',
            display: 'grid', placeItems: 'center', color: 'white',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}>
              <Icon.Phone />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
              color: '#5C8CE0', textTransform: 'uppercase', marginBottom: 4 }}>Call or text</div>
              <div className="display" style={{ fontSize: 32, fontWeight: 900 }}>{PHONE}</div>
            </div>
          </a>

          <a href={IG_HREF} target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', gap: 18,
          padding: '22px 28px', background: 'rgba(255,255,255,.06)',
          border: '1px solid rgba(255,255,255,.1)',
          marginBottom: 16, transition: 'background .15s ease',
          clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}>
          
            <div style={{
            width: 56, height: 56,
            background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FCB045 100%)',
            display: 'grid', placeItems: 'center', color: 'white',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}>
              <Icon.Instagram />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
              color: '#5C8CE0', textTransform: 'uppercase', marginBottom: 4 }}>Follow & DM</div>
              <div className="display" style={{ fontSize: 24, fontWeight: 900 }}>{IG}</div>
            </div>
          </a>

          <a href={FB_HREF} target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', gap: 18,
          padding: '22px 28px', background: 'rgba(255,255,255,.06)',
          border: '1px solid rgba(255,255,255,.1)',
          marginBottom: 16, transition: 'background .15s ease',
          clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}>
          
            <div style={{
            width: 56, height: 56, background: '#1877F2',
            display: 'grid', placeItems: 'center', color: 'white',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}>
              <Icon.Facebook />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
              color: '#5C8CE0', textTransform: 'uppercase', marginBottom: 4 }}>Follow on Facebook</div>
              <div className="display" style={{ fontSize: 24, fontWeight: 900 }}>{FB}</div>
            </div>
          </a>

          <a href={EMAIL_HREF} style={{
          display: 'flex', alignItems: 'center', gap: 18,
          padding: '22px 28px', background: 'rgba(255,255,255,.06)',
          border: '1px solid rgba(255,255,255,.1)',
          transition: 'background .15s ease',
          clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}>
          
            <div style={{
            width: 56, height: 56, background: '#EA4335',
            display: 'grid', placeItems: 'center', color: 'white',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}>
              <Icon.Mail />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
              color: '#5C8CE0', textTransform: 'uppercase', marginBottom: 4 }}>Email us</div>
              <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em',
              wordBreak: 'break-all'
            }}>{EMAIL}</div>
            </div>
          </a>

          <div style={{ marginTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
          ['Mon–Sat', '8 AM – 7 PM'],
          ['Sunday', 'By appointment'],
          ['Service area', 'Memphis metro']].
          map(([k, v]) =>
          <div key={k}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
              color: '#5C8CE0', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16 }}>{v}</div>
              </div>
          )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{
          background: 'white', color: '#0B1A2E', padding: 36,
          position: 'relative',
          clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))',
          boxShadow: '0 30px 60px rgba(0,0,0,.4)'
        }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Request a quote</div>
            <h3 className="display" style={{ fontSize: 30, margin: '0 0 24px' }}>Get on the schedule.</h3>
            <QuoteForm onBook={onBook} />
          </div>
        </Reveal>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .contact-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>;


const QuoteForm = ({ onBook }) => {
  const [data, setData] = React.useState({ name: '', phone: '', vehicle: '', service: 'Exterior Car Cleaning' });
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  if (sent) {
    return (
      <div style={{ padding: '40px 0', textAlign: 'center' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: '#1E5BC6', color: 'white',
          display: 'grid', placeItems: 'center',
          margin: '0 auto 18px'
        }}>
          <Icon.Check />
        </div>
        <h4 className="display" style={{ fontSize: 24, margin: '0 0 8px' }}>Got it, {data.name || 'friend'}!</h4>
        <p style={{ color: '#5B6B82', margin: 0 }}>We'll text you at {data.phone || 'your number'} within an hour to confirm.</p>
      </div>);

  }
  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="field">
        <label>Your name</label>
        <input required value={data.name} onChange={(e) => set('name', e.target.value)} placeholder="John Smith" />
      </div>
      <div className="field">
        <label>Phone</label>
        <input required type="tel" value={data.phone} onChange={(e) => set('phone', e.target.value)} placeholder="(901) 555-0000" />
      </div>
      <div className="field">
        <label>Vehicle (year, make, model)</label>
        <input value={data.vehicle} onChange={(e) => set('vehicle', e.target.value)} placeholder="2021 GMC Sierra" />
      </div>
      <div className="field">
        <label>Service</label>
        <select value={data.service} onChange={(e) => set('service', e.target.value)}>
          {services.map((s) => <option key={s.title}>{s.title}</option>)}
          <option>Custom / not sure</option>
        </select>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
        <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
          Request Quote <Icon.Arrow />
        </button>
        <button type="button" className="btn btn-dark" onClick={onBook}>
          Full booking
        </button>
      </div>
      <p style={{ fontSize: 12, color: '#5B6B82', margin: 0, textAlign: 'center' }}>
        No spam. We text you to confirm details.
      </p>
    </form>);

};

/* ─────────── OUTRO / BRAND REVEAL ─────────── */
const Outro = ({ onBook }) => {
  const videoRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  // Track scroll progress inside this section (0 → 1)
  React.useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section bottom enters viewport, 1 when section top exits top
      const total = rect.height + vh;
      const p = Math.max(0, Math.min(1, (vh - rect.top) / total));
      setProgress(p);

      // Speed up the video as user scrolls toward the bottom
      const v = videoRef.current;
      if (v && v.duration && !isNaN(v.duration)) {
        // Smooth speed ramp: 1x → 2.5x toward the end
        const speed = 1 + p * 1.5;
        v.playbackRate = Math.max(1, Math.min(2.8, speed));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        background: '#000',
        color: 'white',
        overflow: 'hidden',
        minHeight: '72vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
      
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '104%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
          filter: 'brightness(0.7) contrast(1.15) saturate(0.95)'
        }}>
        
        <source src="videos/outro.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.15) 40%, rgba(0,0,0,.55) 100%)'
      }}></div>
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,.45) 100%)'
      }}></div>

      {/* Motion-blur speed lines (scale with progress) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        opacity: Math.min(1, progress * 1.4),
        background: `
          repeating-linear-gradient(90deg,
            transparent 0,
            transparent ${40 - progress * 30}px,
            rgba(255,255,255,${0.04 + progress * 0.06}) ${40 - progress * 30}px,
            rgba(255,255,255,${0.04 + progress * 0.06}) ${41 - progress * 30}px
          )
        `,
        mixBlendMode: 'screen'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
        {/* Eyebrow */}
        <div style={{
          fontSize: 'clamp(14px, 1.4vw, 17px)',
          fontWeight: 500, color: 'rgba(255,255,255,.7)',
          letterSpacing: '0.16em', textTransform: 'uppercase',
          marginBottom: 28
        }}>
          ★ Premium mobile detailing ★
        </div>

        {/* AQUAMAN logo + wordmark */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 'clamp(160px, 20vw, 320px)',
          color: 'white',
          textShadow: '0 8px 60px rgba(0,0,0,.5)',
          transform: `scaleX(${1 + progress * 0.04}) translateX(${progress * -8}px)`,
          transition: 'transform .1s linear',
          width: '100%',
          maxWidth: 1400,
          margin: '0 auto'
        }}>
          <div style={{
            width: 'clamp(80px, 13vw, 180px)',
            height: 'clamp(80px, 13vw, 180px)',
            background: 'linear-gradient(135deg, #15315A 0%, #1E5BC6 100%)',
            borderRadius: '50%',
            display: 'grid', placeItems: 'center',
            boxShadow: '0 12px 40px rgba(30,91,198,.45)',
            flexShrink: 0
          }}>
            <img
              src="images/aquaman-logo.svg"
              alt="Aquaman"
              style={{
                width: '66%',
                height: '66%',
                filter: 'brightness(0) invert(1)',
                display: 'block'
              }} />
            
          </div>
          <h2 className="display" style={{
            fontSize: 'clamp(48px, 10vw, 150px)',
            margin: 0,
            lineHeight: 0.9,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'white'
          }}>
            AQUAMAN
          </h2>
        </div>

        {/* Underline */}
        <div style={{
          width: `${60 + progress * 200}px`,
          height: 2,
          background: 'white',
          margin: '32px auto',
          transition: 'width .3s ease'
        }}></div>

        {/* Sub */}
        <div style={{
          fontSize: 'clamp(16px, 1.8vw, 20px)',
          fontWeight: 500, color: 'rgba(255,255,255,.85)',
          letterSpacing: '-0.01em',
          marginBottom: 36
        }}>
          Detailing that comes to you.
        </div>

        {/* CTA */}
        <button onClick={onBook} className="btn btn-primary" style={{
          fontSize: 15, padding: '18px 36px',
          background: 'white', color: '#000'
        }}>
          Book Your Detail <Icon.Arrow />
        </button>
      </div>

      {/* Speed indicator (subtle, bottom corner) */}
      <div style={{
        position: 'absolute', bottom: 24, right: 24, zIndex: 3,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10, fontWeight: 500,
        color: 'rgba(255,255,255,.45)', letterSpacing: '.12em',
        textTransform: 'uppercase'
      }}>
        {(1 + progress * 1.5).toFixed(2)}× SPEED
      </div>
    </section>);

};
const Footer = () =>
<footer style={{ background: '#000', color: 'rgba(255,255,255,.6)', padding: '60px 0 30px' }}>
    <div className="container">
      <div style={{
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40,
      paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.08)'
    }} className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
            width: 64, height: 64,
            background: 'linear-gradient(135deg, #15315A 0%, #1E5BC6 100%)',
            borderRadius: '50%',
            display: 'grid', placeItems: 'center',
            boxShadow: '0 6px 18px rgba(30,91,198,.35)',
            flexShrink: 0
          }}>
              <img
              src="images/aquaman-logo.svg"
              alt="Aquaman"
              style={{ width: 38, height: 38, filter: 'brightness(0) invert(1)' }} />
            
            </div>
            <span style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800,
            fontSize: 30,
            letterSpacing: '-0.025em',
            color: 'white',
            lineHeight: 1
          }}>
              AQUAMAN
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: '20px 0 0', maxWidth: 320 }}>
            Premium mobile detailing in the Memphis metro. Quality you can see, detailing you can trust, satisfaction guaranteed.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 13,
          letterSpacing: '.16em', textTransform: 'uppercase', color: 'white', marginBottom: 16 }}>
            Services
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            {services.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 13,
          letterSpacing: '.16em', textTransform: 'uppercase', color: 'white', marginBottom: 16 }}>
            Site
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <li><a href="#process">How it works</a></li>
            <li><a href="#enhancements">Enhancements</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 13,
          letterSpacing: '.16em', textTransform: 'uppercase', color: 'white', marginBottom: 16 }}>
            Reach us
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
            <li><a href={PHONE_HREF}>{PHONE}</a></li>
            <li><a href={IG_HREF}>{IG}</a></li>
            <li>Memphis, TN</li>
          </ul>
        </div>
      </div>
      <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      paddingTop: 24, fontSize: 12
    }} className="footer-bottom">
        <div>© {new Date().getFullYear()} Aquaman Services LLC. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 24, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>
          <span>Professional</span>
          <span style={{ color: '#1E5BC6' }}>◆</span>
          <span>Reliable</span>
          <span style={{ color: '#1E5BC6' }}>◆</span>
          <span>Trusted</span>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
        .footer-bottom { flex-direction: column !important; gap: 16px; text-align: center; }
      }
    `}</style>
  </footer>;


Object.assign(window, {
  Nav, Hero, Marquee, BrandsMarquee, Services, Process, Stats,
  Gallery, Social, Reviews, Contact, Outro, Footer, services,
  Enhancements, enhancements,
  Reel, reelClips,
  PHONE, PHONE_HREF, IG, IG_HREF, FB, FB_HREF
});