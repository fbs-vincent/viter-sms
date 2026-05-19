import { routesDeveloper } from "./routes/routesDeveloper";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element=<>page not found.</> />
          {routesDeveloper.map(({ ...routesProps }, key) => {
            return <Route key={key} {...routesProps} />;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
