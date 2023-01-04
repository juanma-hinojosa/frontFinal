import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Error from "./pages/error";
import Groups from "./pages/groups";
import Highlights from "./pages/highlights";
import Home from "./pages/home";
import Volunter from "./pages/volunter";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/volunter" element={<Volunter />} />
          <Route path ="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
