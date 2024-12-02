import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import FormSayfasi from "./components/FormSayfasi";
import SiparisOnay from "./components/SiparisOnay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app-css">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/form">
          <FormSayfasi />
        </Route>
        <Route path="/siparis">
          <SiparisOnay />
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
