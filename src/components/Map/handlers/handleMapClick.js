import { useMapEvents } from "react-leaflet";

export default function MapClickHandler({ onClick }) {
    useMapEvents({
        click: (e) => {
            if (onClick) {
                onClick(e);
            }
        }
    });
    return null;
}