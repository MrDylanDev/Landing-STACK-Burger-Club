import { Flame } from './common/Icons'
import { burgers } from '../data/menuData'

// seccion de la carta con el catalogo de hamburguesas
export function MenuSection({ order, added }) {
  return (
    <section className="menu-section" id="menu">
      <div className="section-top reveal">
        <div>
          <p className="label">01 / THE LINEUP</p>
          <h2>MEET THE<br /><span>STACKS.</span></h2>
        </div>
        <p className="section-copy">Big burgers. Bigger attitude.<br />Made fresh to order.</p>
      </div>
      {/* cuadricula donde se muestran las tarjetas de hamburguesas */}
      <div className="product-grid">
        {burgers.map((burger) => (
          <article className="product-card reveal" key={burger.name}>
            <div className="product-image">
              <img src={burger.image} alt={`${burger.name} smash burger`} loading="lazy" />
              <span className="badge">{burger.badge}</span>
              <span className="price">{burger.price}</span>
            </div>
            <div className="product-info">
              <div>
                <h3>{burger.name} <Flame small /></h3>
                <p>{burger.description}</p>
              </div>
              {/* boton que ejecuta la funcion de agregar recibida por props */}
              <button className="add-button" onClick={() => order(burger.name)}>
                {added === burger.name ? 'Added ✓' : 'Add +'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
