import { useParams, Link } from "react-router-dom";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  MonthAgenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
import { convert2DArrayToTime } from "../../utils";
import { useEffect, useState } from "react";

const data = {
  dataSource: [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2021, 5, 19, 10, 0),
      EndTime: new Date(2021, 5, 19, 12, 30),
      IsAllDay: false,
    },
  ],
};

const OneFacilitator = () => {
  const { id } = useParams();
  const [facilitator, setFacilitator] = useState();
  useEffect(() => {
    fetch("/facilitators/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setFacilitator(json));
  }, []);
  return (
    <>
      {console.log(facilitator)}
      <h1>{facilitator && facilitator.name}</h1>
      <Link to="/facilitators">All facilitators</Link>
      {facilitator && (
        <ScheduleComponent
          eventSettings={convert2DArrayToTime(facilitator.schoolid)}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda]}
          />
        </ScheduleComponent>
      )}
    </>
  );
};

export default OneFacilitator;
