
import "./ScrollStudioBoutique.css";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, src, title, text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div className="boxImgScroll" ref={ref}>
        <img src={src} alt={`Image ${id}`} />
      </div>
      <motion.div style={{ y }}>
        <h2>{title}</h2>
        <p>{text}</p>
      </motion.div>
    </section>
  );
}

export default function ScrollStudioBoutique() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.1
  });

  const images = [
    { id: 1, src: '/imgScroll/estudio1.jpg', title: 'Alojamiento', text: 'Apartamentos para todos los gustos en localizaciones clave del barrio y cercanos al estudio.' },
    { id: 2, src: '/imgScroll/estudio2.jpg', title: 'Title 2', text: 'Text for image 2' },
    { id: 3, src: '/imgScroll/estudio3.jpg', title: 'Title 3', text: 'Text for image 3' },
    { id: 4, src: '/imgScroll/estudio4.jpg', title: 'Title 4', text: 'Text for image 4' },
    { id: 5, src: '/imgScroll/estudio5.jpg', title: 'Title 5', text: 'Text for image 5' },
  ];

  return (
    <>
      {images.map((image) => (
        <Image 
          key={image.id} 
          id={image.id} 
          src={image.src} 
          title={image.title} 
          text={image.text} 
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}




