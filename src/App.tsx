import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ComponentNavbar from "./components/ComponentNavbar";
import ComponentAllArticles from "./components/ComponentAllArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <ComponentNavbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ComponentAllArticles />} />
           
          </Routes>
        </main>
        <footer></footer>
      </>
    </BrowserRouter>
  );
}

export default App;
