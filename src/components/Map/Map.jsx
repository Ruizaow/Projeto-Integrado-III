import './styles/Map.css';
import './styles/Map-mediaQuery.css';
import MapClickHandler from './handlers/handleMapClick.js';
import MarkerPetLost from "../../assets/FeedPage/Map/Marcador-pet-perdido.svg";
import MarkerPetFound from "../../assets/FeedPage/Map/Marcador-pet-em-situacao-de-rua.svg";
import MarkerONG from "../../assets/FeedPage/Map/Marcador-ONGs.svg";

import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';

function Map({ expanded, onClick, markers = [] }) {
  
  const iconsByTag = {
    'Pet perdido': new Icon({
      iconUrl: MarkerPetLost,
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    }),
    'Pet localizado': new Icon({
      iconUrl: MarkerPetFound,
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    }),
    'default': new Icon({
      iconUrl: MarkerONG,
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    })
  };

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    })
  }

  return (
    <MapContainer center={[-4.9708, -39.0150]} zoom={16} className={expanded ? "map-container expanded" : "map-container minimized"}>
      {onClick && <MapClickHandler onClick={onClick} />}

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker, index) => {
          const icon = iconsByTag[marker.tag] || iconsByTag['default'];
          
          return (
            <Marker
              key={index}
              position={[marker.coordinates.lat, marker.coordinates.lng]}
              icon={icon}
            >
              <Popup>
                <p className="markerPetName">{
                  marker.name ? (
                    marker.name
                  ) : (
                    "{Pet sem nome}"
                  )
                }</p><br />
                <h2 className="markerStreet">{marker.location}</h2>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map;