import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import './App.css'
import routes from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import AppState from "./contexts/AppContext/AppState";
import Main from "./components/Main";

function App() {
  return (
    <AppState>
      <Notification />
      <Navbar />
        <Routes>
          {
            routes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={item.component}
                />
              );
            })
          }
        </Routes>
    </AppState>

  );
}

export default App;
