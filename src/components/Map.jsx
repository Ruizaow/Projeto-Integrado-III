// npm create vite@latest                   - Cria pasta do projeto
// cd nome-da-pasta-do-projeto              - Entra na pasta do projeto
// npm install                              - Instala dependências do projeto
// npm install leaflet                      - Instala biblioteca
// npm install react-leaflet                - Instala biblioteca
// npm install react-leaflet-markercluster  - Instala biblioteca
// npm run dev                              - Inicia o servidor

// Para alterar a aparência do mapa, busque por "leaflet skins" e,
// com o resultado da busca, altere a url na tag <TileLayer/>

import './Map.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerIcon from "../assets/marker-icon.png";
import MarkerClusterGroup from 'react-leaflet-markercluster';

function Map() {
  const markers = [
    {
      geocode: [-4.970684782902266, -39.016262475827446],
      popUp: "Zuyah Medieval"
    },
    {
      geocode: [-4.9700, -39.0158],
      popUp: "Praça do Leão"
    },
    {
      geocode: [-4.973425837729239, -39.013617933619656],
      popUp: "Faculdade UniCatólica"
    },
    {
      geocode: [-4.968821402867392, -39.0173944506286],
      popUp: "Correios Quixadá"
    }
  ];

  const customIcon = new Icon({
    iconUrl: MarkerIcon,
    iconSize: [38, 38],
    iconAnchor: [19, 38]
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    })
  }

  return (
    <MapContainer center={[-4.9708, -39.0150]} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker, index) => {
          return <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        })}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map;