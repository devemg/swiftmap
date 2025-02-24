import { concertDates } from '../../services/data';
import CustomMarker from '../Marker/Marker';
import { MapContainer, Popup, TileLayer } from "react-leaflet";

export const Map = () => {
  return (
    <MapContainer center={[33.505, -0.09]} zoom={2} scrollWheelZoom={true} style={{width: '98vw', height: '82vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        concertDates.map((c)=> (
          <CustomMarker position={[c.latitude, c.longitude]} key={c.id}>
            <Popup>{c.city} - {c.venue}</Popup>
          </CustomMarker>
        ))
      }
    </MapContainer>
  )
}
