import mapbox from "mapbox-gl/dist/mapbox-gl";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
mapbox.accessToken =
  "pk.eyJ1IjoiYW5zaHVtYW5tYWhhdG8wOTM1IiwiYSI6ImNraWVsemlsdzF1NHIyeG81dHAwdm81MTAifQ.G3UTR4O2Wed8YhRAuy5xWg";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapbox.Map({
      container: mapContainer.current,
      style: "mapbox://styles/anshumanmahato0935/cll9buxak00o601pb6n83fs0b",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [map, lat, lng, zoom]);

  return (
    <main ref={mapContainer} className=" grow">
      Map
    </main>
  );
}

export default Map;
