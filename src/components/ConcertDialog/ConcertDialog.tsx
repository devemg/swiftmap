import { ConcertDate, ConcertPack } from "../../services/data";
import "./ConcertDialog.scss";
import Flag from "react-world-flags";
import { format, parseISO } from "date-fns";
import { Collapse, CollapseProps } from "antd";
import React, { useEffect, useState } from "react";

interface ConcertDialogProps {
  concert: ConcertPack | null;
  closeHandler: () => void;
}

const ConcertDateItem: React.FC<{ date: ConcertDate }> = ({ date }) => {
  return (
    <div>
      {date.songs.length > 0 && (
        <>
          <p>
            <strong>Sorprise Songs</strong>
          </p>
          <ul>
            {date.songs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </>
      )}
      {date.facts && date.facts.length > 0 && (
        <>
          {date.facts.map((fact, index) => (
            <p key={date.date + "fc" + index} className="fact">
              {fact}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export const ConcertDialog: React.FC<ConcertDialogProps> = ({
  concert,
  closeHandler,
}) => {
  const [dates, setDates] = useState<CollapseProps["items"]>([]);

  useEffect(() => {
    if (concert) {
      setDates(
        concert.dates.map((dElement, index) => ({
          key: index + 1,
          label: format(parseISO(dElement.date), "MMMM do, yyyy"),
          children: <ConcertDateItem date={dElement} />,
        }))
      );
    } else {
      setDates([]);
    }
  }, [concert]);

  return (
    <div>
      <span className="close" onClick={closeHandler}></span>
      {concert && (
        <div className="dialog-body">
          <div className="dialog-header">
            <Flag
              code={concert.countryCode}
              height="16"
              style={{ marginTop: "8px" }}
            />
            <div>
              <h3>{concert.country}</h3>
              <h3>City: {concert.city}</h3>
              <h4>Venue: {concert.venue}</h4>
            </div>
          </div>
          <div className="dialog-body-scroll">
            <Collapse items={dates} accordion />
          </div>
        </div>
      )}
    </div>
  );
};
