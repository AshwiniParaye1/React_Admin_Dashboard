import React from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interationPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const Calendar = () => {
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, interationPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next, today",
          center: "title",
          right: "dayGridMonth, timeGridWeek, timeGridDay",
        }}
        allDaySlot={false}
        initialView="timeGridWeek"
        slotDuration={"01:00:00"}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        initialEvents={[]}
      />
    </div>
  );
};

export default Calendar;
