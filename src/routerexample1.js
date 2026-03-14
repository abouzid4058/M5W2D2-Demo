import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// ── Page components ──────────────────────────────────────────────
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is home</p>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// ── App (Router + Links + Routes) ────────────────────────────────
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
