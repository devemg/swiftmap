import { ConcertPack } from "../../services/data";
import './ConcertDialog.scss';
import Flag from 'react-world-flags'
import { format } from "date-fns";

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
        <h2><Flag code={ item.countryCode } height="16" style={{marginRight: '1rem'}}/>{item.country} - {item.city}</h2>
        <h3>{item.venue}</h3>
        <h4>Dates</h4>
        <ul>
          { item.dates.map(date=>(<li key={date}> {format(date, "MMMM do, yyyy")}</li>)) }
        </ul>
    </div>
      }
    </div>
  )
}
