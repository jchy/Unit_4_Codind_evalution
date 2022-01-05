import "./styles.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./route/AllRoutes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
