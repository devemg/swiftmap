import { ConcertPack } from "../../services/data";
import './ConcertDialog.scss';

interface ConcertDialogProps {
    item: ConcertPack | null;
    closeHandler: ()=>void;
}

export const ConcertDialog: React.FC<ConcertDialogProps> = ({ item, closeHandler }) => {

  return (
    <div>
      <span className="close" onClick={closeHandler}></span>
      {
        item && <div className="dialog-body">
        <h2>{item.country} - {item.city}</h2>
        <h3>{item.venue}</h3>
        <p>Dates</p>
        <ul>
          { item.dates.map(date=>(<li key={date}> {date} </li>)) }
        </ul>
    </div>
      }
    </div>
  )
}
