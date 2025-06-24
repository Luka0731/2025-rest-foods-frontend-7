import React, { useState } from "react";
import LoginForm from "../organismes/LoginForm";
import { AuthService } from "../../services/AuthenticationService";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const result = await AuthService.login(values.email, values.password);
      localStorage.setItem("accessToken", result.accessToken);
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setApiError(error.message);
      } else {
        setApiError("Login failed");
      }
    }
  };

  return (
    <>
      <div className="Login">
        <h1>Login</h1>
        <LoginForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          apiError={apiError}
        />
      </div>
    </>
  );
};

export default Login;
