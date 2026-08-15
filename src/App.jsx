import { useEffect, useState } from 'react'

const burgers = [
  { name: 'THE BLOCK', description: 'Double smash, American cheese, pickles, shredded lettuce, house sauce.', price: '$12', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1100&q=88', badge: 'BEST SELLER' },
  { name: 'FIRESTARTER', description: 'Double Angus, pepper jack, jalapeño jam, crispy onions, hot sauce.', price: '$14', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1100&q=88', badge: 'HOT ONE' },
  { name: 'THE OG', description: 'Single smash, melted cheddar, grilled onions, mustard, ketchup.', price: '$10', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1100&q=88', badge: 'CLASSIC' },
]

const benefits = [
  ['01', 'FRESH INGREDIENTS', 'Cut, chopped, and prepped every morning.'],
  ['02', '100% ANGUS BEEF', 'No fillers. No frozen patties. Just beef.'],
  ['03', 'HANDMADE SAUCES', 'Secret recipes made in our kitchen, daily.'],
  ['04', 'FAST DELIVERY', 'Hot off the grill and at your door, fast.'],
  ['05', 'BRIOCHE BUNS', 'Soft, toasted, golden, and built to hold up.'],
  ['06', 'DAILY PREP', 'We start early so your order hits right.'],
]

const gallery = [
  ['https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1100&q=88', 'Stack attack', 'large'],
  ['https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=88', 'Crispy business', 'small'],
  ['https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=88', 'Sauce on sauce', 'small'],
  ['https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=88', 'Kitchen heat', 'wide'],
  ['https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1000&q=88', 'Late-night fuel', 'wide'],
]

const reviews = [
  { quote: 'Best smash burger in the city. The edges are CRIMINAL.', name: 'JAMIE T.', detail: 'Verified customer · 5 visits', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80' },
  { quote: 'Fast, messy, perfect. I have not stopped thinking about that sauce.', name: 'MARCUS L.', detail: 'Verified customer · 12 visits', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80' },
  { quote: 'This is what a burger should taste like. Loud flavor, zero fuss.', name: 'NIA R.', detail: 'Verified customer · 8 visits', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80' },
]

function Flame({ small = false }) { return <span className={small ? 'flame small' : 'flame'} aria-hidden="true">♨</span> }

function Arrow() { return <span aria-hidden="true">↗</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [added, setAdded] = useState('')
  const [review, setReview] = useState(0)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  const order = (name) => { setAdded(name); window.setTimeout(() => setAdded(''), 2200) }
  const nextReview = (direction) => setReview((current) => (current + direction + reviews.length) % reviews.length)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="logo" href="#top" onClick={closeMenu}><span>STACK</span><b>!</b></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#menu" onClick={closeMenu}>Menu</a><a href="#why" onClick={closeMenu}>Why us</a><a href="#gallery" onClick={closeMenu}>Gallery</a><a href="#visit" onClick={closeMenu}>Find us</a>
        </nav>
        <a className="header-order" href="#menu">Order now <Arrow /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true"><source src="/hero-burger.mp4" type="video/mp4" /></video><div className="hero-overlay" />
        <div className="hero-grit" />
        <div className="hero-content"><p className="kicker"><Flame small /> Real food. Real loud.</p><h1>SMASHED.<br /><span>GRILLED.</span><br />LOADED.</h1><p className="hero-subtitle">Real Angus beef. Fresh ingredients. Big flavor. No compromises.</p><div className="hero-actions"><a className="button button-orange" href="#menu">Order Now <Arrow /></a><a className="button button-white" href="#menu">View Menu <Arrow /></a></div></div>
        <div className="scroll-cue"><span>Scroll for the good stuff</span><i /></div>
        <div className="hero-tag">EST. 2018<br /><b>NYC // USA</b></div>
      </section>

      <section className="ticker" aria-label="Brand values"><div>SMASH IT <Flame small /> STACK IT <Flame small /> EAT IT <Flame small /> REPEAT IT <Flame small /> SMASH IT <Flame small /> STACK IT <Flame small /></div></section>

      <section className="menu-section" id="menu"><div className="section-top reveal"><div><p className="label">01 / THE LINEUP</p><h2>MEET THE<br /><span>STACKS.</span></h2></div><p className="section-copy">Big burgers. Bigger attitude.<br />Made fresh to order.</p></div><div className="product-grid">{burgers.map((burger) => <article className="product-card reveal" key={burger.name}><div className="product-image"><img src={burger.image} alt={`${burger.name} smash burger`} loading="lazy" /><span className="badge">{burger.badge}</span><span className="price">{burger.price}</span></div><div className="product-info"><div><h3>{burger.name} <Flame small /></h3><p>{burger.description}</p></div><button className="add-button" onClick={() => order(burger.name)}>{added === burger.name ? 'Added ✓' : 'Add +'} </button></div></article>)}</div></section>

      <section className="why-section" id="why"><div className="section-top reveal"><div><p className="label">02 / NO SHORTCUTS</p><h2>WHY WE<br /><span>GO HARD.</span></h2></div><p className="section-copy">The details matter.<br />The flavor matters more.</p></div><div className="benefit-grid">{benefits.map(([number, title, text]) => <article className="benefit reveal" key={title}><span className="benefit-number">{number}</span><h3>{title}</h3><p>{text}</p><Flame small /></article>)}</div></section>

      <section className="gallery-section" id="gallery"><div className="section-top reveal"><div><p className="label">03 / ON THE GRAM</p><h2>PASS THE<br /><span>PHONE.</span></h2></div><a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer">@stackburgerclub <Arrow /></a></div><div className="gallery-grid">{gallery.map(([image, alt, size]) => <figure className={`gallery-item ${size} reveal`} key={image}><img src={image} alt={alt} loading="lazy" /><figcaption>STACK! / {alt}</figcaption></figure>)}</div></section>

      <section className="reviews" aria-label="Customer reviews"><div className="review-header"><p className="label">04 / THE WORD ON THE STREET</p><div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div></div><div className="review-card reveal"><div className="review-quote">“</div><blockquote>{reviews[review].quote}</blockquote><div className="review-meta"><img src={reviews[review].image} alt="" /><div><strong>{reviews[review].name}</strong><span>{reviews[review].detail}</span></div><div className="carousel-controls"><button onClick={() => nextReview(-1)} aria-label="Previous review">←</button><span>0{review + 1} / 0{reviews.length}</span><button onClick={() => nextReview(1)} aria-label="Next review">→</button></div></div></div></section>

      <section className="promo reveal"><div><p className="label">LIMITED TIME / ZERO CHILL</p><h2>DOUBLE THE MEAT.<br /><span>DOUBLE THE FLAVOR.</span></h2></div><a className="button button-dark" href="#menu">Try It Today <Arrow /></a></section>

      <section className="visit" id="visit"><div className="visit-title reveal"><p className="label">05 / PULL UP</p><h2>FIND YOUR<br /><span>STACK.</span></h2></div><div className="visit-grid reveal"><div><b>THE SHOP</b><p>18 Mercer Street<br />Downtown, NY 10013</p><a href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <Arrow /></a></div><div><b>HOURS</b><p>Mon—Thu / 11am—11pm<br />Fri—Sun / 11am—1am</p><a href="tel:+12125550188">(212) 555-0188 <Arrow /></a></div><a className="button button-orange" href="#menu">Order pickup <Arrow /></a></div></section>

      <footer><div className="footer-brand"><a className="logo" href="#top"><span>STACK</span><b>!</b></a><p>SMASHED WITH PURPOSE.<br />SERVED WITH ATTITUDE.</p></div><div className="newsletter"><p className="label">STACK NOTES</p><h3>{subscribed ? 'YOU ARE IN.' : 'GET THE GOOD NEWS.'}</h3><form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" required /><button type="submit" aria-label="Subscribe">→</button></form><small>No spam. Just specials, drops, and fries.</small></div><div className="footer-links"><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok <Arrow /></a><a href="mailto:hello@stackburger.club">Email us <Arrow /></a></div><small className="copyright">© 2024 STACK! BURGER CLUB / ALL BITE RESERVED</small></footer>
    </main>
  )
}

export default App
