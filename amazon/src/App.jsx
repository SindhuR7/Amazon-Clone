import SignIn from "./pages/SignIn"
import{ BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import VerifyEmail from "./pages/VerifyEmail"
import Home from "./pages/Home"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/sign" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/verify" element={<VerifyEmail/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
