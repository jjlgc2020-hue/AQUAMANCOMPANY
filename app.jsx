// Root app

const App = () => {
  // Every "book" button scrolls to the quote wizard in the contact section
  const openBooking = () => {
    const el = document.getElementById('contact');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Smooth scroll for nav links
  React.useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <Nav onBook={openBooking} />
      <Hero onBook={openBooking} />
      <BrandsMarquee />
      <Services />
      <Process />
      <Enhancements />
      <Reel />
      <Gallery />
      <Stats />
      <Reviews />
      <Contact onBook={openBooking} />
      <Outro onBook={openBooking} />
      <Footer />

      {/* Floating call button (mobile) */}
      <a href={PHONE_HREF} className="fab-call" aria-label="Call Aquaman">
        <Icon.Phone />
      </a>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
