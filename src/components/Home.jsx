import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import '../styles.scss'
import Footer from './Footer'
import Nav from './Nav'

const imgHome = {

    img1:{
        backgroundImage: 'url(/exteriorLaPuerta.jpeg)',
    },
    img2:{
        backgroundImage:'url(/lapuertaboutiqueHome.jpeg)',
    },
    img3:{
        backgroundImage:'url(/Formaciones.png)',
    },
   
};


function Home() {


    return(
        <>
        
        <Nav></Nav>
       
        <motion.div     
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}>
    
        <div className='container-fluid'>
            <div className='row'>
                <div className='bannerHome'></div>
            </div>
        </div>

        </motion.div>

                {/* --- SER --- */}

        <div className='container-fluid'>
            <div className='row ser'>

                {/* ----SER 1 ---- */}
    
                <div className='ser1 p-0 col-12 col-md-12 col-12 d-flex'>

                    <div className='imageSer col-lg-6 col-md-6 col-6' style={imgHome.img1} >
                        <a href="" className='botonSaberMas'>Saber más</a>
                    </div>

                    <div className=' boxSerText col-lg-6 col-md-6 col-12 '>
                        <div className='d-flex'>
                            <div className='col-lg-6 col-md-11 col-11'>
                                <h1>Estudio</h1>
                                <p className='textSer col-lg-12 col-md-11 col-9'>Un edificio del siglo XIX en el  emblemático barrio del Albayzín. Totalmente reformado mantieniendo la escencia de la arquitectura local.</p>
                            </div>
                            
                            <div className='col-lg-6 col-md-12 col-1 d-flex justify-content-end align-items-start'>
                                <img className='waverSer' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                        </div>

                        <div className='linkEstudio col-lg-6 col-md-6 col-12'>
                            <Link>
                                <div className='buttonSerHome d-flex  justify-content-between'>    
                                    <p>Saber más</p>
                                    <i className="bi bi-arrow-right"></i> 
                                </div>
                            </Link>

                            <Link>
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Reserva</p>
                                    <i className="bi bi-arrow-right"></i> 
                                </div>
                            </Link>
                        </div>
  
                    </div>
                </div>

                {/* ----SER 2 ---- */}
                <div className='ser1 p-0 col-lg-12 col-md-12 col-12 d-flex'>

                    <div className='imageSer col-lg-6  col-md-6 col-6' style={imgHome.img2}>
                        <a href="" className='botonSaberMas'>Saber más</a>
                    </div>

                    <div className='col-lg-6 col-md-6 col-12 boxSerText'>
                        <div className='d-flex'>
                            <div className='col-lg-6 col-md-11 col-11'>
                                <h1>LA PUERTA Boutique</h1>
                                <p className='textSer col-lg-12 col-md-8 col-9 '>Sumérgete en la cultura y gastronomía andalusí.Desarrolla tus proyectos en un entorno histórico con un amplio abanico de ofertas culturales.</p>
                            </div>
                            
                            <div className='col-lg-6 col-md-12 col-1 d-flex justify-content-end align-items-start'>
                                <img className='waverSer' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                        </div>

                        <div className='linkEstudio col-lg-6 col-md-6 col-12  '>
                            <Link>
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Saber más</p>
                                    <i className="bi bi-arrow-right"></i> 
                                </div>
                            </Link>

                            <Link>
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Reserva</p>
                                    <i className="bi bi-arrow-right"></i> 
                                </div>
                            </Link>
                        </div>
  
                    </div>
                </div>

                {/* ----SER 3 ---- */}                
                <div className='ser1 p-0 col-lg-12 col-md-12 col-12 d-flex'>

                    <div className='imageSer col-lg-6  col-md-6 col-6' style={imgHome.img3}>
                        <a href="" className='botonSaberMas'>Saber más</a>
                    </div>

                    <div className='col-lg-6 col-md-6 col-12 boxSerText'>
                        <div className='d-flex'>
                            <div className='col-lg-6 col-md-11 col-11'>
                                <h1>Formaciones</h1>
                                <p className='textSer col-lg-12 col-md-8 col-9'>Apostamos por una formación completa, concreta, actualizada y de calidad, tanto online como presencial, impartida por profesionales del sector que se enfrentan día a día con la materia y técnicas que imparten.</p>
                            </div>
                            
                            <div className='col-lg-6 col-md-12 col-1 d-flex justify-content-end align-items-start'>
                                <img className='waverSer' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                        </div>

                        <div className='linkEstudio col-lg-6 col-md-6 col-12  '>
                            <Link>
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Saber más</p>
                                    <i className="bi bi-arrow-right"></i> 
                                </div>
                            </Link>

                            <Link>
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Reserva</p>
                                    <i className="bi bi-arrow-right"></i> 
                                </div>
                            </Link>
                        </div>
  
                    </div>
                </div>

            </div>
        </div>

        {/* --- FIN SER --- */}

        {/* POEMA */}

        <div className='backgroundPoema'>
            <div className='container boxHomeContact'>
                <div className='row d-flex '>
                    <div className='contactDiv col-lg-12 col-sm-10 col-10 '>
                        <div className='col-lg-12  col-sm-12 col-10'>
                            <h2 className='mb-4'>“Deja la puerta entorná por si alguna vez te diera la tentación de entrar”</h2>
                            <p className='col-lg-8 textoHomeContact'><span>La Puerta Entorná </span><br/> Joaquín López</p>
                        </div>
                        <div className='mt-5 col-lg-3 col-sm-4 col-12 '>
                            <Link>
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Reserva</p>
                                    <i className="bi bi-arrow-right"></i> 
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="poemamobile">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h2 className='mb-4'>“Deja la puerta entorná por si alguna vez te diera la tentación de entrar”</h2>
                    <p className='textoHomeContact'><span>La Puerta Entorná </span><br/> Joaquín López</p>
                    <Link to="" className='boton'>Contáctanos</Link>
                </div>
            </div>
        </div>

        {/* FIN POEMA */}
        <Footer></Footer>
        </>
    )
}

export default Home
