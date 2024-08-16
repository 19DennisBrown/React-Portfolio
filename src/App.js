import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
// import vid from './components/assets/'

function App() {
  // const Video=()=>{
  //   return(
  //     <div>
  //       <video src={vid} autoplay muted loop type='video/mp4'/>
  //       <p>where is the video</p>
  //     </div>
  //   )
  // }
  return(
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Hero path="/home" />
        <Skills/>
        < Projects />
        <ContactMe/>
      </div>
      <Footer/>
      {/* <Video/> */}
    </div>
  );
}

export default App;


//   return (
//     <BrowserRouter>
//       <Linking/>

//       <Routes>
//         <Route >
//           <Route path="/form" element={<Form />} />
//           <Route path="/list" element={<List />} />
          
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
