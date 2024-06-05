import { useRef } from 'react'
import '/src/styles.scss'
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion"


function ScrollSticky() {

  // UseRef es un hook de react, nos devuelte un objeto con una sola propiedad
  const targetRef = useRef(null);
  // UseScroll es un hook de framer, el cual nos devuelve un progeso de nuestro scroll desde 0 hasta 1. Esto quiere decir que su valor medio puede ser 0.0003000
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <motion.div className="cardContainer" onViewportEnter={() => console.log('Eyy que pasa')}>
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{ amount: "all" }} className="cardStudio cardStudio1">
          <div className='container-fluid '>
            <div className='row plantilla'>

              <div className='col-lg-12 plantillaImg'>
                <img src="imgBoutique/alojamiento.jpeg" alt="La Puerta Estudios" />
              </div>

              <div className='mt-6'>

                <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                  <h2>Alojamiento</h2>
                  <img className='w-5' src="imgEstudio/nota3.svg" alt="La Puerta Estudios" />
                </div>

                <div className='col-lg-6 col-md-11 col-12'>
                  <p className=' col-lg-10 col-md-8 col-12 '>Apartamentos para todos los gustos en localizaciones clave del barrio y cercanos al estudio.</p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{ amount: "all" }} className="cardStudio cardStudio2">
          <div className='container-fluid '>
            <div className='row plantilla'>

              <div className='col-lg-12 plantillaImg'>
                <img src="imgBoutique/alojamiento.jpeg" alt="La Puerta Estudios" />
              </div>

              <div className='mt-6'>

                <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                  <h2>Gastronomía</h2>
                  <img className='w-5' src="imgEstudio/nota.svg" alt="La Puerta Estudios" />
                </div>

                <div className='col-lg-6 col-md-11 col-12'>
                  <p className=' col-lg-10 col-md-8 col-12 '>Disfruta de las mejores ofertas gastronómicas de la ciudad.</p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{ amount: "all" }} className="cardStudio cardStudio3">
          <div className='container-fluid '>
            <div className='row plantilla'>

              <div className='col-lg-12 plantillaImg'>
                <img src="imgBoutique/alojamiento.jpeg" alt="La Puerta Estudios" />
              </div>

              <div className='mt-6'>

                <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                  <h2>Cultura</h2>
                  <img className='w-5' src="imgEstudio/nota2.svg" alt="La Puerta Estudios" />
                </div>

                <div className='col-lg-6 col-md-11 col-12'>
                  <p className=' col-lg-10 col-md-8 col-12 '>Empápate con la gran variedad de oferta cultural que ofrece Granada.</p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}


export default ScrollSticky
