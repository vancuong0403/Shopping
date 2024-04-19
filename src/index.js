import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/Blog/BlogDetail';
import Index from './components/Member';
import Home from './components/Blog/Home';
import AuthProvider from './components/common/AuthProvider';
import Account from './components/Member/Account';
import MyProduct from './components/Member/MyProduct';
import AddProduct from './components/Blog/AddProduct';
import { ToastContainer } from 'react-toastify';
import EditProduct from './components/Blog/EditProduct';
import ProducDetail from './components/Blog/ProductDetail';
import Cart from './components/Blog/Cart';
import ProductWishLisht from './components/Blog/ProductWishList';
import { QtyProvider } from './context/QtyContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <QtyProvider>
    <AuthProvider>
        <App>
          <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:id' element={<BlogDetail/>}/>
            <Route path='/register' element={<Index/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/myproduct' element={<MyProduct/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/myproduct/:id' element={<EditProduct/>}/>
            <Route path='/product/:id' element={<ProducDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/productwishlist' element={<ProductWishLisht/>}/>
          </Routes>
          <ToastContainer/>
        </App>
      </AuthProvider>
    </QtyProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
