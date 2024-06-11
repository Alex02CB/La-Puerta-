import Nav2 from './Nav2';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function MasterClass() {

    return (
        <>
            <Nav2 />
            <div className='continer-fluid'>
                <div className='row sectionOne '>
                    <div className=' mt-52 d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>No disponible actualmente</h2>
                        <img className='waverSer w-1 lg:w-10' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>

                    <div className='mt-5 col-lg-12 col-md-12 col-12'>
                        <div className='d-flex'>
                            <div className='col-lg-6 col-md-11 col-12'>
                                <p className=' col-lg-10 col-md-8 col-12 '>Las clases llegarán pronto. Para más información, presione el botón a continuación para enviarnos un correo electrónico.</p>
                            </div>
                        </div>

                        <div className='mt-5 col-lg-3 col-md-6 col-12 '>
                            <Link to="/">
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Email</p>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MasterClass