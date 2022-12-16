import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about"
import Form from "./components/form"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className='main'>      
            <About/>   
            <Form/>      
        </div>
        <Footer/>
    </div>
  );
}

export default App;
