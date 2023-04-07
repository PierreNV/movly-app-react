import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getCurrentUser } from "./services/servAuth";
import Movies from "./components/movies";
import Home from "./components/home";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Nav from "./components/nav";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import UserLock from "./components/common/userLock";
import AdminLock from "./components/common/adminLock";
import "./App.css";
import Profile from "./components/profile";

class App extends Component {
  state = {};

  async componentDidMount() {
    const user = await getCurrentUser();
    if (user) this.setState({ user });
    if (user && user.isAdmin) this.setState({ isAdmin: true });
  }

  render() {
    return (
      <>
        <header>
          <Nav user={this.state.user} isAdmin={this.state.isAdmin} />
        </header>
        <main className="container-xxl my-md-4 bd-layout">
          <div className="m-3">
            <Routes>
              <Route
                path="*"
                element={<Navigate to="/not-found" replace={true} />}
              />
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={<LoginForm user={this.state.user} />}
              />
              <Route path="/register" element={<RegisterForm />} />
              <Route
                path="/movies/*"
                element={
                  <Movies user={this.state.user} isAdmin={this.state.isAdmin} />
                }
              />
              <Route
                path="/movies/:id"
                element={<UserLock component={MovieForm} />}
              />
              <Route
                path="/customers"
                element={<AdminLock component={Customers} />}
              />
              <Route path="/rentals" element={<Rentals />} />
              <Route
                path="/profile"
                element={<Profile user={this.state.user} />}
              />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </>
    );
  }
}

export default App;
