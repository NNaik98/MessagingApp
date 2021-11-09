import Chat from "./Chat";
import React  from "react";
import './App.css';
import SideNav from "./SideNav";


function App() {
  return( 


<div className="App">

<div className="AppBody">
  {/* sideNav */}
<SideNav/>
  {/* Main Chat */}
  <Chat/>
</div>

  </div>


)
}


export default App;
