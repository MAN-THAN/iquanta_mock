import Main from './Components/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styleSheets/Style";
import Instructions from './Components/Instructions';
import { useAuth } from "./services/Context";


function App() {
  const{mocksData}=useAuth()
 


 
  return (
   
    <ThemeProvider theme={theme}>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Instructions/>}/>
      <Route path="/main/:id/:type" element={<Main />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  
  );
}

export default App;
