import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import '/src/styles.scss'



const SmoothScroll2 = () => {
  return (
    <div className="bg-white">


      {/* SEGUNDA PARTE */}
      
      <div className="container-fluid ocultarScroll">
        <div className="row containerNuestroEspacio">
          <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
            <h2>Servicios</h2>
            <img className=' imgNota' src="imgEstudio/nota2.svg" alt="La Puerta Estudios" />
          </div>
        </div>
      </div>

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-34%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] ocultarScroll">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <>
    <div className="global">
        <div
        key={card.id}
        className="group relative xl:h-[644px] xl:w-[575px] lg:h-[450px] lg:w-[450px] h-[500px] w-[300px] overflow-hidden bg-neutral-200"
        >
        <div
            style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">

        </div>
        </div>

        <div className="blockText mt-5 w-2/3">
            <h2>{card.title}</h2>
            <p className="mt-2">{card.description}</p>
        </div>
    </div>
    </>
    
  );
};

export default SmoothScroll2;



const cards = [
  {
    url: "/imgEstudio/piano.jpeg",
    title: "Composición y producción",
    description:"Cuenta con profesionales para asesorarte en tus proyectos. Utiliza nuestras instalaciones y material en el proceso.",
    id: 1,
  },
  {
    url: "/imgEstudio/microfono.jpeg",
    title: "Grabación",
    description:"Un ambiente cómodo y luminoso con una acústica increíble y un equipo de alta calidad.",
    id: 2,
  },
  {
    url: "/imgEstudio/mezcla.jpeg",
    title: "Mezcla & Mix",
    description:"Obtén el sonido que quieres mezclando lo mejor de lo analógico y lo digital.",
    id: 3,
  },
  {
    url: "/imgEstudio/Postproduccion.jpg",
    title: "Post-Producción",
    description:"Un sonido innovador para tus producciones audiovisuales. ",
    id: 4,
  }, 

];
