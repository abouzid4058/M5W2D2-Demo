import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams
} from "react-router-dom";

// ── Simple page components ────────────────────────────────────────
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

// ── Topic (leaf route) ────────────────────────────────────────────
// Uses useParams to read the :topicId URL parameter
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

// ── Topics (nested routes) ────────────────────────────────────────
// useMatch gives us the current matched URL/path so we can build
// nested <Link> hrefs and nested <Route> paths dynamically.
function Topics() {
  // useMatch replaces useRouteMatch from React Router v5
  let match = useMatch("/topics/*") || useMatch("/topics");

  // Build the base URL for nested links
  const baseUrl = "/topics";

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${baseUrl}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${baseUrl}/dogs`}>Dogs</Link>
        </li>
      </ul>

      {/* Nested switch: match a specific topic or show the prompt */}
      <Routes>
        <Route path=":topicId" element={<Topic />} />
        <Route
          index
          element={<h3>Please select a topic.</h3>}
        />
      </Routes>
    </div>
  );
}

// ── App (top-level Router + Links + Routes) ───────────────────────
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About />} />
          {/* The /* wildcard lets nested <Routes> inside Topics work */}
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
