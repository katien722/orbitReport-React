import satData from "./satData.jsx";

const Buttons = ({ filterByType, setSat, orbitTypes }) => { //pass orbitTypes array of low, med, high
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
      <button onClick={() => setSat}>All Orbits</button>
    </div>

  );

};


export default Buttons;