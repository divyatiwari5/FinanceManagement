import "./App.css";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/config";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex">
          <div className="lg:w-64">
            <NavBar />
          </div>
          <div className="flex-1 bg-lightBlue">
            <Header />
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
