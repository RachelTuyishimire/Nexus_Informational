import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigationBar/NavBar';
import Footer from './components/footer/footer';
import Team from './components/team/team';
import Home from './components/home/home';
import About from './components/about/about';
import Product from './whatwedo';


function App() {
  return (
    <div>
    <Navbar />
    <Home/>
    <About/>
    <Product/>
    {/* Your main content */}
    <Team/>
    <Footer />
  </div>
  
  );
}

export default App;
