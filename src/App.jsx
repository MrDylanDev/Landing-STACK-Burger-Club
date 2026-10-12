import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { WhySection } from './components/WhySection'
import { GallerySection } from './components/GallerySection'
import { ReviewsSection } from './components/ReviewsSection'
import { PromoSection } from './components/PromoSection'
import { VisitSection } from './components/VisitSection'
import { Footer } from './components/Footer'
import { reviews } from './data/menuData'

function App() {
  // estado para saber si el menu de navegacion en celular esta abierto
  const [menuOpen, setMenuOpen] = useState(false)
  // estado para detectar si el usuario bajo la pagina y cambiar el fondo del header
  const [scrolled, setScrolled] = useState(false)
  // guarda el nombre de la hamburguesa que se agrego para mostrar la confirmacion temporal
  const [added, setAdded] = useState('')
  // indice de la reseña actual que se esta mostrando en el carrusel
  const [review, setReview] = useState(0)
  // estado para saber si el usuario ya se suscribio al newsletter
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    // funcion que revisa la posicion del scroll para estilizar el navbar
    const onScroll = () => setScrolled(window.scrollY > 28)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // detector para agregar animacion a los elementos cuando entran en la pantalla
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    // limpiamos los eventos y el observer cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  // muestra el aviso de agregado por 2.2 segundos y luego lo limpia
  const order = (name) => {
    setAdded(name)
    window.setTimeout(() => setAdded(''), 2200)
  }

  // avanza o retrocede en las reseñas de forma circular
  const nextReview = (direction) => {
    setReview((current) => (current + direction + reviews.length) % reviews.length)
  }

  // cierra el menu desplegable
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />
      <Hero />
      <MenuSection order={order} added={added} />
      <WhySection />
      <GallerySection />
      <ReviewsSection review={review} nextReview={nextReview} />
      <PromoSection />
      <VisitSection />
      <Footer subscribed={subscribed} setSubscribed={setSubscribed} />
    </main>
  )
}

export default App
