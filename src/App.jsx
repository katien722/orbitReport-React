import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react"; 
import satData from "./components/satData.jsx";


function App() {

  const[sat, setStat] = useState(satData);
  const orbitTypes = [...new Set(setData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
  }

  return (
    <div>
      <Banner/>
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes}
        />
      <Table sat={sat} />
    </div>
  );
}

export default App;