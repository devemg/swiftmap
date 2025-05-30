import { MouseEvent, useRef, useState } from 'react';
import { concertDates, ConcertPack } from '../../services/data';
import CustomMarker from '../Marker/Marker';
import { MapContainer, TileLayer } from "react-leaflet";
import { ConcertDialog } from '../ConcertDialog/ConcertDialog';

export const Map = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedPack, setSelectedPack] = useState<ConcertPack|null>(null);
  const onMarkerClick = (item: ConcertPack) => {
    setSelectedPack(item);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  const onModalClose = () => {
    setSelectedPack(null);
    if (modalRef.current) {
      modalRef.current.close();
    }
  }

  const onModalClick = (event: MouseEvent) => {
    if (!modalRef.current) return;
    var rect = modalRef.current.getBoundingClientRect();
    var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modalRef.current.close();
    }
  }

  return (
    <>
    <MapContainer center={[33.505, -0.09]} zoom={2} scrollWheelZoom={true} style={{width: '98vw', height: '82vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        concertDates.map((c)=> (
          <CustomMarker item={c} key={c.id} openDialogHandler={onMarkerClick}></CustomMarker>
        ))
      }
    </MapContainer>
    <dialog id="modal" ref={modalRef} onClick={onModalClick}>
        <ConcertDialog item={selectedPack} closeHandler={onModalClose} />
    </dialog>
    </>
  )
}
