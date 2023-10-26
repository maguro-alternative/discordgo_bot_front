import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Index from './pages/index'
import Test from './test/test';
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Index/>}/>
            <Route path={"/test-user"} element={<Test/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
