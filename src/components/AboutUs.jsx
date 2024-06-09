import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReadMoreComponent from './leermas/ReadMoreComponent'

function AboutUs() {

    return (
        <>
            <Nav />
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
                        <div className='bannerAboutUs'></div>
                    </div>
                </div>

            </motion.div>

            <div className='container-fluid '>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>Sobre Nosotros</h2>
                        <img className='waverSer' src="/LogoFooter.png" alt="La Puerta Estudios" />
                    </div>

                    <div className='point'>
                        <img src="/point.svg" />
                    </div>

                    <div className='mt-3 col-lg-12 col-md-12 col-12'>

                        <ReadMoreComponent />

                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-5  col-lg-12 col-md-12 col-12'>
                        <h2>Familia LA PUERTA</h2>
                        <img className=' w-2 lg:w-5 ' src="/imgEstudio/nota.svg" alt="La Puerta Estudios" />
                    </div>

                    <div className='flex flex-wrap gap-24'>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/roca.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Carlos Roca</h3>
                            <p className='mb-3'>Técnico de estudio, productor y mánager.</p>
                            <a className='text-zinc-500	' href="@ayquealegria">@ayquealegria</a>
                        </div>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/roca.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Ulises Ramos</h3>
                            <p className='mb-3'>Técnico de estudio, productor y mánager.</p>
                            <a className='text-zinc-500	' href="@ayquealegria">@ayquealegria</a>
                        </div>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/roca.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Carlos Roca</h3>
                            <p className='mb-3'>Técnico de estudio, productor y mánager.</p>
                            <a className='text-zinc-500	' href="@ayquealegria">@ayquealegria</a>
                        </div>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/roca.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Carlos Roca</h3>
                            <p className='mb-3'>Técnico de estudio, productor y mánager.</p>
                            <a className='text-zinc-500	' href="@ayquealegria">@ayquealegria</a>
                        </div>
                        
                    </div>

                </div>
            </div>


            {/* POEMA */}

            <div className='backgroundPoema'>
                <div className='container boxHomeContact'>
                    <div className='row d-flex '>
                        <div className='contactDiv col-lg-12 col-sm-10 col-10 '>
                            <div className='col-lg-12  col-sm-12 col-10'>
                                <h2 className='mb-4'>“Deja la puerta entorná por si alguna vez te diera la tentación de entrar”</h2>
                                <p className='col-lg-8 textoHomeContact'><span>La Puerta Entorná </span><br /> Joaquín López</p>
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
                        <p className='textoHomeContact'><span>La Puerta Entorná </span><br /> Joaquín López</p>
                        <Link to="" className='boton'>Contáctanos</Link>
                    </div>
                </div>
            </div>

            {/* FIN POEMA */}

            <Footer />

        </>

    )
}

export default AboutUs