import { Arrow } from './common/Icons'

// seccion de ubicacion horarios y contacto del local
export function VisitSection() {
  return (
    <section className="visit" id="visit">
      <div className="visit-title reveal">
        <p className="label">05 / PULL UP</p>
        <h2>FIND YOUR<br /><span>STACK.</span></h2>
      </div>
      <div className="visit-grid reveal">
        {/* direccion del local y enlace a google maps */}
        <div>
          <b>THE SHOP</b>
          <p>18 Mercer Street<br />Downtown, NY 10013</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <Arrow /></a>
        </div>
        {/* horarios de atencion y numero de telefono */}
        <div>
          <b>HOURS</b>
          <p>Mon—Thu / 11am—11pm<br />Fri—Sun / 11am—1am</p>
          <a href="tel:+12125550188">(212) 555-0188 <Arrow /></a>
        </div>
        <a className="button button-orange" href="#menu">Order pickup <Arrow /></a>
      </div>
    </section>
  )
}
