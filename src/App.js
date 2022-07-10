import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';
import { Project } from './components/project/Project';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          {/* <Route exact path='/' element={<Home/>}></Route> */}
          <Route exact path='/myPortfolio' element={<Home/>}></Route>
          <Route exact path='/myPortfolio/resume' element={<Resume/>}></Route>
          <Route exact path='/myPortfolio/contact' element={<Contact/>}></Route>
          <Route path='/myPortfolio/work/:id' element={<Project/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
