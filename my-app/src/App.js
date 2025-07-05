import './App.css';
import Page2 from './Frontend/Page2';
import Page1 from './Frontend/Page1';
import Urls from './Frontend/Urls';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Urls />}>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
