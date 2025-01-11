
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import Footer from './components/Footer';
import SingleProduct from './SingleProduct';

function App() {
  const theme = {
    colors:{
      bg:"#000",
    },
  };
  return (
   <>
  
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
          <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>  
   </>
   
  );
}

export default App;
