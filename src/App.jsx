import { useState } from "react";

import routes from "./routes";
import { Route, Routes, BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter >
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
          <Route  path={'*'} element={<div>404</div>} />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
