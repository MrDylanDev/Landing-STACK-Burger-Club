// icono de llama de fuego decorativo
export function Flame({ small = false }) {
  return <span className={small ? 'flame small' : 'flame'} aria-hidden="true">♨</span>
}

// icono de flecha hacia arriba a la derecha para botones y enlaces
export function Arrow() {
  return <span aria-hidden="true">↗</span>
}
