import mapbox from "mapbox-gl/dist/mapbox-gl";
import { useEffect } from "react";
import { useRef } from "react";
import mapPin from "../assets/icon-location.svg";
mapbox.accessToken = import.meta.env.VITE_MAPBOX_KEY;

function Map({ coords }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const markerEl = useRef(document.createElement("img"));
  markerEl.current.src = mapPin;

  useEffect(() => {
    map.current = new mapbox.Map({
      container: mapContainer.current,
      style: "mapbox://styles/anshumanmahato0935/cll9buxak00o601pb6n83fs0b",
      center: [coords.lng, coords.lat],
      interactive: false,
      zoom: 10,
    });

    // Create a new marker.
    marker.current = new mapbox.Marker({
      element: markerEl.current,
    })
      .setLngLat([coords.lng, coords.lat])
      .addTo(map.current);
  }, [map, coords]);

  return <main ref={mapContainer} className=" grow"></main>;
}

export default Map;
