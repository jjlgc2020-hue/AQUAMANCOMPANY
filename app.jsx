// Root app

const App = () => {
  // Every "book" button opens the quote wizard instantly. The shareable
  // /agenda link lands here with ?book=1 and opens the form automatically.
  const [quoteOpen, setQuoteOpen] = React.useState(() => {
    try { return new URLSearchParams(window.location.search).get('book') === '1'; }
    catch (e) { return false; }
  });
  const openBooking = () => setQuoteOpen(true);

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

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
