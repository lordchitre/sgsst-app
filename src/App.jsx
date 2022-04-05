import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";

import { Home } from './pages/home';
import { Register } from './pages/Register';
import { Navbar } from './components/navbar/Navbar';

const _theme = createTheme({
  palette: {
    primary: {
      main: "#3f37c9",
    },
  },
});   

function App() {

  return (
    <ThemeProvider theme={_theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
    </ThemeProvider>
  )
}

export default App
