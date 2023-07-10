import { useState } from "react";
import Deta from "./comp/page/detalhes/Deta";
import Home from "./comp/page/home/Home";
import Styledglobal, { Corfundo } from "./Styledglobal";
import { useState } from "react";
function App() {
  const [trocaPag, settrocaPag] = useState("0")

  const chanPag = (change) =>(
    settrocaPag(change)
  )
  return (
    <>
    <Corfundo>
    <Styledglobal/>
    {trocaPag === "0"? (
      <Home pagina={()=> chanPag("0")}/>
    ):(
      <Deta pagina={()=> chanPag("1")}/>)}
    <Home/>
    </Corfundo>
    </>
  );
}

export default App;
