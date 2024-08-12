import './App.css';

import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contacts from './components/Contacts/Contacts';
import Logout from './components/Logout/Logout';
import Sushi from './components/Sushi/Sushi';
import Drinks from './components/Drinks/Drinks';
import Sauce from './components/Sauce/Sauce';
import { ErrorPage } from './components/Error/ErrorPage';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';


const DetailSushi = lazy(() => import('./components/DetailSushi/DetailSushi'));
const DetailSauce = lazy(() => import('./components/DetailSauce/DetailSauce'));
const DetailDrink = lazy(() => import('./components/DetailDrink/DetailDrink'));

function App() {

  return (
    <AuthProvider>
        <Header />
        <Toaster
          position="bottom-left"
          toastOptions={{
            duration: 1500,
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
              marginBottom: '30px',
              marginLeft: '20px'
            },
          }} />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Catalog />} />
            <Route path="/menu/sushi" element={<Sushi />}></Route>
            <Route path="/menu/drinks" element={< Drinks />}></Route>
            <Route path="/menu/sauce" element={<Sauce />}></Route>
            <Route path="/menu/sushi/:id" element={<DetailSushi />}></Route>
            <Route path="/menu/drinks/:id" element={<DetailDrink />}></Route>
            <Route path="/menu/sauce/:id" element={<DetailSauce />}></Route>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/error" element={<ErrorPage />} />

            <Route>
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

          </Routes>
        <Footer />
    </AuthProvider>

  )
}

export default App
