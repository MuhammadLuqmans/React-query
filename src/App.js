import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from "./components/Home.page";
import RQSSuperHeroes from "./components/RQSSuperHeroes.page";
import SuperHeroes from "./components/SuperHeroes.page";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ul
        style={{
          display: "flex",
          maxWidth: "500px",
          justifyContent: "space-around",
          margin: "auto",
          padding: "20px",
          textDecoration: "none",
          listStyleType: "none",
        }}
      >
        <li>
          <Link
            style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}
            to="/"
          >
            Home Page
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}
            to="/rqssuperHeroes"
          >
            RQSSuperHeroes Page
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}
            to="/superHeroes"
          >
            SuperHeroes Page
          </Link>
        </li>
      </ul>
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rqssuperHeroes" element={<RQSSuperHeroes />} />
        <Route path="/superHeroes" element={<SuperHeroes />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
