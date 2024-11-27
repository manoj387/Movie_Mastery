import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Header from "./Component/header";
import AllRoutes from "./Routes/AllRoutes";

export default function Home() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Login />
      <Register />
    </>
  );
}