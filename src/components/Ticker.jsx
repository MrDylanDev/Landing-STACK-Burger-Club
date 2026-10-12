import { Flame } from './common/Icons'

// frases repetitivas de la marca
const items = ['SMASH IT', 'STACK IT', 'EAT IT', 'REPEAT IT']

// grupo de frases repetidas para que el texto sea largo y no deje espacios vacios
function TickerGroup() {
  return (
    <div className="ticker-content">
      {items.map((text, index) => (
        <span key={`a-${index}`}>
          {text} <Flame small />
        </span>
      ))}
      {items.map((text, index) => (
        <span key={`b-${index}`}>
          {text} <Flame small />
        </span>
      ))}
      {items.map((text, index) => (
        <span key={`c-${index}`}>
          {text} <Flame small />
        </span>
      ))}
      {items.map((text, index) => (
        <span key={`d-${index}`}>
          {text} <Flame small />
        </span>
      ))}
    </div>
  )
}

// marquesina con animacion continua
export function Ticker() {
  return (
    <div className="ticker" aria-label="Brand values">
      {/* pista que contiene dos grupos identicos para lograr el desplazamiento infinito */}
      <div className="ticker-track">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  )
}
