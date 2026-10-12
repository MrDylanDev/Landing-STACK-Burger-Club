import { Arrow } from './common/Icons'

// pie de pagina con suscripcion a noticias y redes sociales
export function Footer({ subscribed, setSubscribed }) {
  return (
    <footer>
      <div className="footer-brand">
        <a className="logo" href="#top"><span>STACK</span><b>!</b></a>
        <p>SMASHED WITH PURPOSE.<br />SERVED WITH ATTITUDE.</p>
      </div>
      {/* formulario para suscribirse con correo electronico */}
      <div className="newsletter">
        <p className="label">STACK NOTES</p>
        <h3>{subscribed ? 'YOU ARE IN.' : 'GET THE GOOD NEWS.'}</h3>
        <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}>
          <label className="sr-only" htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="Your email address" required />
          <button type="submit" aria-label="Subscribe">→</button>
        </form>
        <small>No spam. Just specials, drops, and fries.</small>
      </div>
      {/* enlaces a redes y contacto */}
      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok <Arrow /></a>
        <a href="mailto:hello@stackburger.club">Email us <Arrow /></a>
      </div>
      <small className="copyright">© 2024 STACK! BURGER CLUB / ALL BITE RESERVED</small>
    </footer>
  )
}
