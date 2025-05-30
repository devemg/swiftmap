
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MakrerUrl from "../../../src/assets/mapMarker.svg";
import { Marker, Popup, useMap } from "react-leaflet";
import { ConcertPack } from "../../services/data";

interface CustomMarkerProps {
  item: ConcertPack;
  openDialogHandler: (pack: ConcertPack) => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ item, openDialogHandler }) => {
  const map = useMap();
  const customIcon = L.icon({
    iconUrl: MakrerUrl,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });
  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup>
        <p>{item.city} - {item.venue}</p>
        <a href="" onClick={(ev)=> {
          ev.preventDefault();
          openDialogHandler && openDialogHandler(item);
          map.flyTo([item.latitude, item.longitude], 14);
        }}>View More</a>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;