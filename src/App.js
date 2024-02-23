import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import TitleBar from "./Component/TitleBar";
import LoadingScreen from "./Container/loadingScreen";
import Dashboard from "./Container/Dashboard";
import Settings from "./Container/settings";
import AddWebsite from "./Container/addWebsite";
import WebsitePage from "./Container/websitePage";
import NavBar from "./Component/navBar";

function App() {
  const [loading, setLoading] = useState(true);
  const router = createBrowserRouter([
    {
      path: "",
      element: CreateElement(<Dashboard />),
    },
    {
      path: "settings",
      element: CreateElement(<Settings />),
    },
    {
      path: "addWebsite",
      element: CreateElement(<AddWebsite />),
    },
    {
      path: "websitePage",
      element: CreateElement(<WebsitePage />),
    },
  ]);
  function CreateElement(element) {
    return (
      <>
      <NavBar/>
            <div id="Content">{element}</div>
      </>
    )
  }
  return (
    <div className="Window">
      {loading ? (
        <LoadingScreen loading={loading} setLoading={setLoading} />
      ) : (
        <div className="App">
          <TitleBar />
          <div id="ContentContainer">
            <RouterProvider router={router} />
          
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
