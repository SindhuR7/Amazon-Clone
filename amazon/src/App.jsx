import SignIn from "./pages/SignIn"
import{ BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import VerifyEmail from "./pages/VerifyEmail"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/verify" element={<VerifyEmail/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
