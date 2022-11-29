import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { MainPage } from "./components/main-page";
import { SignUp } from "./components/signup";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["App"]}>
      <h1>Spica Authorization With React</h1>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
