import { Arrow } from './common/Icons'

// barra de navegacion principal superior
export function Header({ scrolled, menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="logo" href="#top" onClick={closeMenu}><span>STACK</span><b>!</b></a>
      {/* enlaces de navegacion que se despliegan en mobile */}
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        <a href="#menu" onClick={closeMenu}>Menu</a>
        <a href="#why" onClick={closeMenu}>Why us</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#visit" onClick={closeMenu}>Find us</a>
      </nav>
      {/* boton de llamado a la accion directo al menu */}
      <a className="header-order" href="#menu">Order now <Arrow /></a>
      {/* boton hamburguesa para abrir el menu en pantallas chicas */}
      <button 
        className="menu-toggle" 
        aria-label={menuOpen ? 'Close menu' : 'Open menu'} 
        aria-expanded={menuOpen} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
    </header>
  )
}
