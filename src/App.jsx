import { Outlet, useNavigation } from "react-router-dom"
import Home from "./components/Home/Home"

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
        <Outlet></Outlet>
      }

    </>
  )
}

export default App
