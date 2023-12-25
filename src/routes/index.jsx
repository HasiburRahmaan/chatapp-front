import Auth from "../components/container/guard/Auth";
import NonAuth from "../components/container/guard/NonAuth";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
import Login from "../pages/Login";
import * as slug from "./slug";

const routes = [
  {
    path: slug.HOME,
    component: <Home />,
    type:'auth'
  },
  {
    path: slug.CHAT,
    component: <Chat />,
    type:'auth'
  },
  {
    path: slug.LOGIN,
    component: <Login />,
    type:'open'
  },
].map((e) => {
  // return e
  if (e.type === "auth") {
    e = {
      ...e,
      component: <Auth>{e.component}</Auth>,
    };
  }
  if (e.type === "open") {
    e = {
      ...e,
      component: <NonAuth>{e.component}</NonAuth>,
    };
  }

  return e;
})

export default routes;
