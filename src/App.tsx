import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">トップページ</Link>
        <Link to="/history">履歴確認</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
