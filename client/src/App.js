import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Modify from "./components/Modify";
import PrivateRoute from "./routes/PrivateRoute";
import AddUser from "./components/AddUser";
import Contact from "./components/contact";
import Affectation from "./components/Affectation";
import Affectation2 from "./components/Affectation2";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/users" component={UsersList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/Modify" component={Modify} />
        <PrivateRoute path="/Contact" component={Contact} />
        <PrivateRoute path="/affectation" component={Affectation} />
        <PrivateRoute path="/affectation2" component={Affectation2} />
        <Route path="/create-user" component={AddUser} />
        
      </Switch>
    </div>
  );
}

export default App;
