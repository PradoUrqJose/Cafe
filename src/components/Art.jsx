import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { featureLists, goodLists } from '../../constants/index.js'

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true
      }
    })

    maskTimeline
      .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
      .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut ' })
      .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
  })

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">FODA</h2>

        <div className="content">
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">El Café Peruano en Alemania</h2>

          <div id="masked-content">
            <h3>Un Mercado Clave en Europa</h3>
            <p>
              Alemania destaca como uno de los principales destinos del café peruano,
              con alto consumo per cápita y una creciente preferencia por productos
              sostenibles, de alta calidad y con trazabilidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Art
