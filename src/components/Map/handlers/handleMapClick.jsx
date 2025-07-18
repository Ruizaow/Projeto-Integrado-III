import { useMapEvents } from "react-leaflet";

function MapClickHandler({ onClick }) {
  useMapEvents({
    click: (e) => {
      if (onClick) {
        onClick(e);
      }
    }
  });
  return null;
}

export default MapClickHandler;