
import { useState } from "react";
import { AppFooter } from "./components/footer";
import { HeaderComponent } from "./components/header";
import AddProduct from "./pages/add-product";
import GetProduct from "./pages/get-product";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




function App() {
  const [page, setPage] = useState("add")
  return (
    <div className="App">
      <HeaderComponent/>
    <div style={{paddingTop:'8vh',height:'100vh',display:'flex', flexDirection:'column'}}>
    <div style={{flex:'1'}}>
      {page==="add"?<AddProduct setPage={()=>setPage("get")}/>:<GetProduct setPage={()=>setPage("add")}/>}
    
    
    </div>
    <AppFooter/>
    </div>
    </div>
  );
}

export default App;
