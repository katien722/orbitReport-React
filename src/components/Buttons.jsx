import satData from "./components/satData"

const Buttons = ({ filterByType, setSat, orbitTypes }) => { //pass orbitTypes array of low, med, high
  {orbitTypes.map(type, index) => {
  return (
    <div>
      <button onClick={() => filterByType(type)} key = {index}>
      {type} Orbit
      </button>
      ); 
      }}}
      <button onClick={() setSat}>All Orbits</button>
    </div>
};


export default Buttons;