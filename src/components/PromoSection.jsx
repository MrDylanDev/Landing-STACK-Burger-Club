import { Arrow } from './common/Icons'

// seccion promocional para captar atencion rapida
export function PromoSection() {
  return (
    <section className="promo reveal">
      <div>
        <p className="label">LIMITED TIME / ZERO CHILL</p>
        <h2>DOUBLE THE MEAT.<br /><span>DOUBLE THE FLAVOR.</span></h2>
      </div>
      <a className="button button-dark" href="#menu">Try It Today <Arrow /></a>
    </section>
  )
}
