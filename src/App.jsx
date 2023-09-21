import { Outlet, useNavigation } from "react-router-dom"
import Home from "./components/Home/Home"
import { createContext } from "react";
export  const AsserContext = createContext('Gold');
function App() {
  const navigation = useNavigation();

  return (
    <>
      <Home></Home>
      {
        navigation.state === "loading" ? 
        <div className="flex items-center justify-center mt-28">
          <span className="loading loading-spinner loading-lg"></span>
        </div> 
        : 
        <AsserContext.Provider value="Asia">
          <Outlet></Outlet>
        </AsserContext.Provider>
      }

    </>
  )
}

export default App
