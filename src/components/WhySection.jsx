import { Flame } from './common/Icons'
import { benefits } from '../data/menuData'

// seccion que explica las razones de calidad y propuesta de valor
export function WhySection() {
  return (
    <section className="why-section" id="why">
      <div className="section-top reveal">
        <div>
          <p className="label">02 / NO SHORTCUTS</p>
          <h2>WHY WE<br /><span>GO HARD.</span></h2>
        </div>
        <p className="section-copy">The details matter.<br />The flavor matters more.</p>
      </div>
      {/* lista de ventajas numeradas */}
      <div className="benefit-grid">
        {benefits.map(([number, title, text]) => (
          <article className="benefit reveal" key={title}>
            <span className="benefit-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <Flame small />
          </article>
        ))}
      </div>
    </section>
  )
}
