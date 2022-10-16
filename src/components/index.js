import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SignUpPage from './components/SignUp/SignUp';
import SignInPage from './components/SignIn/SignIn';
import AddProductsPage from './components/AddProducts/AddProducts';
import ProductCard from './components/ProductCard/ProductCard';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductDetailsConfirm from './components/ProductDetailsConfirm/ProductDetailsConfirm';
import AddressDetails from './components/AddressDetails/AddressDetails';
import OrderDetails from './components/OrderDetails/OrderDetails';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ModifyProductsPage from './components/ModifyProducts/ModifyProducts';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <section>
          <Routes>
            <Route path='/' element={ <NavigationBar /> }></Route>
            <Route path='/login' element={ <SignInPage /> }></Route>
            <Route path='/signup' element={ <SignUpPage /> }></Route>
            <Route path='/addproducts' element={ <AddProductsPage /> }></Route>
            <Route path='/modifyproducts' element={ <ModifyProductsPage /> }></Route>
            <Route path='/productcard' element={ <ProductCard/> }></Route>
            <Route path='/products' element={<Products/> }></Route>
            <Route path='/productdetails' element={<ProductDetails/>}></Route>
            <Route path='/productdetailsconfirm' element={<ProductDetailsConfirm/>}></Route>
            <Route path='/addressdetails' element={<AddressDetails/>}></Route>
            <Route path='/orderdetails' element={<OrderDetails/>}></Route>
            <Route path='/placeorder' element={<PlaceOrder/>}></Route>
          </Routes>
        </section>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



