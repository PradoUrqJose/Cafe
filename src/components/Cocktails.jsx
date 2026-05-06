import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../../constants/index.js'

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    })

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100, y: 100
      })
      .from('#c-right-leaf', {
        x: 100, y: 100
      })
  })

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Actores Involucrados:</h2>

          <ul>
            <li>
              <div className="md:me-28">
                <h3>Exportador</h3>
                <p>Perú | Perales Huancaruna S.A.C. (PERHUSA)</p>
              </div>
              <span>- Origen</span>
            </li>
            <li>
              <div className="md:me-28">
                <h3>Importador</h3>
                <p>Alemania | Comprador en el mercado alemán</p>
              </div>
              <span>- Destino</span>
            </li>
          </ul>
        </div>

        <div className="loved">
          <h2>Detalles del Proyecto:</h2>

          <ul>
            <li>
              <div className="me-28">
                <h3>Producto a exportar</h3>
                <p>Café Peruano | En grano verde (variedad arábica)</p>
              </div>
              <span>- Producto</span>
            </li>
            <li>
              <div className="me-28">
                <h3>Ruta Logística</h3>
                <p>Marítima | Salida Puerto del Callao - Destino Puerto de Hamburgo</p>
              </div>
              <span>- Ruta</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails
