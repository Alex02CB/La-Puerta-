import {Routes,Route} from 'react-router-dom';
import Home from '/src/components/Home.jsx';
import StudioExperience from '/src/components/StudioExperience.jsx';
import StudioBoutique from '/src/components/StudioBoutique.jsx';
import MasterClass from '/src/components/MasterClass.jsx';
import AboutUs from '/src/components/AboutUs.jsx';
import Contact from '/src/components/ContactUs.jsx';
import Footer from './components/Footer';
import Nav from './components/Nav';
import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  return (
    <>

      <div>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/' element={<Footer/>}/>
        <Route path='/' element={<Nav/>}/>
        <Route path='/studioexperience' element={<StudioExperience/>}/>
        <Route path='/studioboutique' element={<StudioBoutique/>}/>
        <Route path='/masterclass' element={<MasterClass/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        </Routes>
      </div>

      
    </>
  )
}

export default App
