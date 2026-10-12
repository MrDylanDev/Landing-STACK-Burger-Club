# STACK! Burger Club

Landing page moderna y de alto impacto para **STACK! Burger Club**, una marca de smash burgers artesanales. Diseñada con una estetica urbana, tipografia expresiva y animaciones fluidas orientadas a la conversion.

---

## Demo en video

<p align="center">
  <img src="public/assets/preview.gif" alt="STACK! Burger Club Demo Preview" width="650" />
</p>

<p align="center">
  <a href="https://github.com/MrDylanDev/Landing-STACK-Burger-Club/raw/master/public/assets/demo-video.mp4" download="demo-video.mp4">
    <strong>Descargar video completo (MP4)</strong>
  </a>
</p>

---

## Caracteristicas principales

- **Hero interactivo:** Integracion de video de fondo con superposiciones de contraste y llamado a la accion directo.
- **Marquesina continua (Ticker):** Cinta de valores de marca en bucle infinito continuo sin cortes.
- **Catalogo de productos:** Grilla de smash burgers con estado de confirmacion visual al agregar.
- **Galeria interactiva (Showcase):** Carrusel horizontal con controles de navegacion asistida, soporte tactil y estilo Instagram.
- **Testimonios en carrusel:** Sistema rotativo de resenas de clientes verificados.
- **Arquitectura modular:** Separacion clara de responsabilidades con componentes atomicos y desacoplamiento de datos.
- **Responsive design:** Adaptacion cuidada para dispositivos moviles, tablets y pantallas de escritorio.

---

## Tecnologias utilizadas

- **React 19**
- **Vite**
- **CSS3** (Variables CSS, CSS Grid, Flexbox y animaciones nativas)

---

## Estructura del proyecto

```text
Landing-Hamburger/
├── public/
│   ├── assets/
│   │   ├── preview.gif        # Gif demostrativo para documentacion
│   │   └── demo-video.mp4     # Video completo descargable
│   └── hero-burger.mp4        # Video de fondo del hero
├── src/
│   ├── components/            # Componentes modulares
│   │   ├── common/
│   │   │   └── Icons.jsx      # Iconos vectoriales y decorativos
│   │   ├── Footer.jsx
│   │   ├── GallerySection.jsx # Carrusel horizontal de galeria
│   │   ├── Header.jsx         # Barra de navegacion superior
│   │   ├── Hero.jsx           # Seccion principal con video
│   │   ├── MenuSection.jsx    # Seccion de productos
│   │   ├── PromoSection.jsx   # Banner promocional
│   │   ├── ReviewsSection.jsx # Carrusel de testimonios
│   │   ├── Ticker.jsx         # Marquesina continua
│   │   ├── VisitSection.jsx   # Horarios y ubicacion
│   │   └── WhySection.jsx     # Beneficios e ingredientes
│   ├── data/
│   │   └── menuData.js        # Informacion de productos, beneficios y resenas
│   ├── App.jsx                # Orquestador principal de la aplicacion
│   ├── main.jsx               # Punto de entrada de React
│   └── styles.css             # Estilos globales y reglas de diseno
├── index.html
├── package.json
└── vite.config.js
```

---

## Instalacion y ejecucion

1. **Clonar el repositorio:**
   ```bash
   git clone git@github.com:MrDylanDev/Landing-STACK-Burger-Club.git
   cd Landing-STACK-Burger-Club
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Compilar para produccion:**
   ```bash
   npm run build
   ```

---

## Licencia

Este proyecto esta bajo licencia privada para STACK! Burger Club.
