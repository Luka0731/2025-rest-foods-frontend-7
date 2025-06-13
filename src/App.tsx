import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MenuPage from './pages/MenuPage'
import MenuItemPage from './pages/MenuItemPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ReservationPage from './pages/ReservationPage'
import DashboardPage from './pages/DashboardPage'
import { ContactPage } from '@mui/icons-material'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './components/PrivateRoute'
import MenuItemEditPage from './pages/MenuItemEditPage'
import MenuItemCreatePage from './pages/MenuItemCreatePage'
import TablesPage from './pages/TablesPage'
import TablesCreatePage from './pages/TablesCreatePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:id" element={<MenuItemPage />}/>
            <Route path="/menu/:id/edit" element={<PrivateRoute><MenuItemEditPage /></PrivateRoute>}/>
            <Route path="/menu/new" element={<PrivateRoute><MenuItemCreatePage /></PrivateRoute>}/>
            <Route path="/reservation" element={<ReservationPage />}/>
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>}/>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tables" element={<PrivateRoute><TablesPage /></PrivateRoute>} />
            <Route path="/tables/new" element={<PrivateRoute><TablesCreatePage /></PrivateRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;