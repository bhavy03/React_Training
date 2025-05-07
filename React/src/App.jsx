import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Input from "./Mini_projects/Input.jsx";
// import Father from "./Redux-Toolkit/Father";
// import Responsive from "./Mini_projects/responsive";
// import Main from "./Redux/main";
// import UseReducer from "./Hooks/UseReducer";
// import UseContext from "./Hooks/UseContext";
// import UseLayoutEffect from "./Hooks/UseLayoutEffect";
// import UseEffect from "./Hooks/UseEffect";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
import UseRef from "./Hooks/UseRef";
import ProtectRoute from "./ProtectRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute />}>
          <Route loader={userinfoloader} path="/" element={<UseRef />} />
          <Route path="in" element={<UseCallback />}></Route>
        </Route>
        <Route path="/login" element={<UseMemo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const userinfoloader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};
// now in the redered element use the loaded data with use of useLoader from routerdom
// like const data = useLoaderData();
export default App;
