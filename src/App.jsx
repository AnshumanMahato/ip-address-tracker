import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  const [coords, setCoords] = useState({ lng: 85.13, lat: 25.6 });
  return (
    <div className="h-screen w-full font-Rubik flex flex-col">
      <Header setCoords={setCoords} />
      <Map coords={coords} />
    </div>
  );
}

export default App;
