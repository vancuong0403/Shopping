import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import 'react-toastify/dist/ReactToastify.css';

function App({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  );
}

export default App;
