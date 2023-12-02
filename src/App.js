// App.js
import React, { useState } from "react";
import "./App.css";
import MainDash from './components/MainDash/MainDash';
import CaptainDash from './components/CaptainDash/CaptainDash';
import OrganizerDash from './components/OrganizerDash/OrganizerDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar setSelectedOption={setSelectedOption} />
        {selectedOption === "Dashboard" && <MainDash />}
        {selectedOption === "Captain" && <CaptainDash />}
        {selectedOption === "Organizer" && <OrganizerDash />}
        <RightSide />
      </div>
    </div>
  );
}

export default App;
