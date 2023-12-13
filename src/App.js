import './App.css';

function App() {
  //create an object array
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {/* use .map() method to loop thru the array object and display its values */}
      {planets.map((planit, key)=>{
        return (
        // use ternary operator to display the value or display an empty string
        planit.isGasPlanet ? <h1 key={key}>{planit.name}</h1> : ""
        )
      }) }
    </div>
  );
}

export default App;
