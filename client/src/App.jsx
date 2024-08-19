import { BrowserRouter, Routes, Route } from 'react-router-dom';import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Notes from "./pages/Notes";
import Programming from "./pages/Programming";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
