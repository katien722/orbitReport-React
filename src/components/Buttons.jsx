import satData from "./satData.jsx";
import "./styling.css"

const Buttons = ({ filterByType, setSat, orbitTypes }) => { 
 console.log(satData);
  return (
    <div>
      {orbitTypes.map((type, index) => {
        return (
          <button onClick={() => filterByType(type)} key={index}>
            {type} Orbit

          </button>
        )
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>

  );

};


export default Buttons;