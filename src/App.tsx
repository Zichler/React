import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Lesson08 from './lessons/lesson08/Lesson08';
import NoPage from './components/noPage/NoPage';
import HomePage from './components/homePage/HomePage';
import Lesson01 from './lessons/lesson01/Lesson01';
import Lesson02 from './lessons/lesson02/Lesson02';
import Lesson03 from './lessons/lesson03/Lesson03';
import Lesson04 from './lessons/lesson04/Lesson04';
import Lesson05 from './lessons/lesson05/Lesson05';
import Lesson09 from './lessons/lesson09/Lesson09';
import Lesson10 from './lessons/lesson10/Lesson10';
import Lesson11 from './lessons/lesson11/Lesson11';
import Lesson06 from './lessons/lesson06/Lesson06';
import Lesson07 from './lessons/lesson07/Lesson07';
import Lesson12 from './lessons/lesson12/Lesson12';
import FormGender from './components/formGender/FormGender';
import Lesson13 from './lessons/lesson13/Lesson13';
import RegisterForm from './components/registerForm/RegisterForm';
import LoginForma from './components/registerForm/LoginForma';
import Coctail from './components/coctail/Coctail';
import Counter from './components/Counter/Counter';
import Bitcoin from './components/bitcoin/Bitcoin';
import Playground from './components/Playground/Playground';
import UserPage from './components/usersPage/UsersPage';
import Lesson14 from './lessons/lesson14/Lesson14';
import ProductPage from './components/productPage/ProductPage';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import Sandwich from './components/Sandwich/Sandwich';
import { ThemeProvider } from './themeContect/ThemeProvaider';
import Lesson16 from './lessons/lesson16/Lesson16';
import Lesson17 from './lessons/lesson17/Lesson17';

function App(): JSX.Element {
  return (
    <ThemeProvider>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="form-gender" element={<FormGender />} />
          <Route path="register-form" element={<RegisterForm />} />
          <Route path="login-form" element={<LoginForma />} />
          <Route path="/coctail" element={<Coctail />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/userspage" element={<UserPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="lesson1" element={<Lesson01 />} />
          <Route path="lesson2" element={<Lesson02 />} />
          <Route path="lesson3" element={<Lesson03 />} />
          <Route path="lesson4" element={<Lesson04 />} />
          <Route path="lesson5" element={<Lesson05 />} />
          <Route path="lesson6" element={<Lesson06 />} />
          <Route path="lesson7" element={<Lesson07 />} />
          <Route path="lesson8" element={<Lesson08 />} />
          <Route path="lesson9" element={<Lesson09 />} />
          <Route path="lesson10" element={<Lesson10 />} />
          <Route path="lesson11" element={<Lesson11 />} />
          <Route path="lesson12" element={<Lesson12 />} />
          <Route path="lesson13" element={<Lesson13 />} />
          <Route path="lesson14" element={<Lesson14 />} />
          <Route path="lesson16" element={<Lesson16 />} />
          <Route path="lesson17" element={<Lesson17 />} />
          <Route path="lesson14/:id" element={<ProductPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </ThemeProvider>
  );
}

export default App;
