import { Flame, Arrow } from './common/Icons'
import { Ticker } from './Ticker'

// seccion principal de bienvenida con video de fondo
export function Hero() {
  return (
    <section className="hero" id="top">
      {/* video de fondo en bucle que se reproduce automaticamente */}
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src="/hero-burger.mp4" type="video/mp4" />
      </video>
      {/* capas oscuras semitransparentes sobre el video para mejorar la lectura */}
      <div className="hero-overlay" />
      <div className="hero-grit" />
      <div className="hero-content">
        <p className="kicker"><Flame small /> Real food. Real loud.</p>
        <h1>SMASHED.<br /><span>GRILLED.</span><br />LOADED.</h1>
        <p className="hero-subtitle">Real Angus beef. Fresh ingredients. Big flavor. No compromises.</p>
        <div className="hero-actions">
          <a className="button button-orange" href="#menu">Order Now <Arrow /></a>
          <a className="button button-white" href="#menu">View Menu <Arrow /></a>
        </div>
      </div>
      {/* marquesina naranja anclada en la parte inferior del hero */}
      <div className="hero-ticker-wrap">
        <Ticker />
      </div>
    </section>
  )
}
