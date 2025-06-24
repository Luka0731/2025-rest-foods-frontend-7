import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import MenuPage from "./components/pages/MenuPage";
import MenuItemPage from "./components/pages/MenuItemPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import ReservationPage from "./components/pages/ReservationPage";
import DashboardPage from "./components/pages/DashboardPage";
import ContactPage from "./components/pages/ContactPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import MenuItemEditPage from "./components/pages/MenuItemEditPage";
import MenuItemCreatePage from "./components/pages/MenuItemCreatePage";
import TablesPage from "./components/pages/TablesPage";
import ReservationForm from "./components/organismes/ReservationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<MenuItemPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/reservation/:id" element={<ReservationForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/menu/:id/edit"
            element={
              <PrivateRoute>
                <MenuItemEditPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/menu/new"
            element={
              <PrivateRoute>
                <MenuItemCreatePage />
              </PrivateRoute>
            }
          />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/tables"
            element={
              <PrivateRoute>
                <TablesPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
