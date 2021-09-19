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
import { getTimeBlocks } from "../../utils";
import { useEffect, useState } from "react";

const OneSchool = () => {
  const { schoolName, grade, clas } = useParams();
  const [school, setSchool] = useState();
  useEffect(() => {
    fetch("/schools/" + schoolName + "/" + clas + "/" + grade, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setSchool(json[0]));
  }, []);
  return (
    <>
      <div className="p-3 mb-2 bg-warning">
        <h1>{school && school.name}</h1>
        {/* <img
          src="/images/schedule.jpeg"
          width="100"
          height="100"
          align="right"
          alt=""
        /> */}
      </div>
      <Link to="/schools">All Schools</Link>
      {school && (
        <ScheduleComponent
          eventSettings={getTimeBlocks({
            day: school.day,
            time: school.time,
            nameOfFacilitator: school.teacherassigned,
          })}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda]}
          />
        </ScheduleComponent>
      )}
    </>
  );
};

export default OneSchool;
