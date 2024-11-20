import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const events = [
  { title: "Launching & Free Health Screening", date: "2024-11-21" },
  { title: "Open Nomination", date: "2024-12-29" },
  { title: "Close Nomination", date: "2025-01-01" },
  { title: "Seeded Nominees Out", date: "2025-01-28" },
  { title: "Voting Period", date: "2025-01-29" },
  { title: "Event Holds", date: "2025-03-06" },
  { title: "Final Event", date: "2025-03-08" },
];

const ProgramOutline = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    const today = dayjs();

    // Find the next event
    const upcomingEvent = events.find((event) =>
      dayjs(event.date).isAfter(today)
    );

    setNextEvent(upcomingEvent);

    if (upcomingEvent) {
      // Update the countdown every second
      const interval = setInterval(() => {
        const now = dayjs();
        const eventDate = dayjs(upcomingEvent.date);
        const diff = eventDate.diff(now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, []);

  return (
    <div className="relative mx-auto max-w-[1240px] px-6 py-20 md:py-32">
      {/* Color Key */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[--orange] mb-4 text-center">
          PROGRAM OUTLINE
        </h2>
        <div className="flex space-x-4 items-center justify-center">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            <span className="text-gray-700">Current Event</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span className="text-gray-700">Upcoming Event</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
            <span className="text-gray-700">Past Event</span>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mb-10 text-center">
        {nextEvent ? (
          <>
            <h3 className="text-lg font-semibold text-gray-800">
              Counting down to:{" "}
              <span className="text-[--orange] uppercase">
                {nextEvent.title}
              </span>
            </h3>
            <p className="text-gray-600 mb-4">
              Scheduled for:{" "}
              <span className="text-[--orange]">
                {dayjs(nextEvent.date).format("MMMM D, YYYY")}
              </span>
            </p>
            <div className="text-2xl font-bold text-gray-800 my-10">
              <span className="text-[--white] bg-[--orange] p-4 rounded-md">
                {timeLeft.days}d
              </span>{" "}
              <span className="text-[--white] bg-[--orange] p-4 rounded-md">
                {timeLeft.hours}h
              </span>{" "}
              <span className="text-[--white] bg-[--orange] p-4 rounded-md">
                {timeLeft.minutes}m
              </span>{" "}
              <span className="text-[--white] bg-[--orange] p-4 rounded-md">
                {timeLeft.seconds}s
              </span>
            </div>
          </>
        ) : (
          <p className="text-gray-600">All events are complete!</p>
        )}
      </div>

      {/* Timeline */}
      <div className="grid gap-10  sm:grid-cols-2">
        {events.map((event, index) => {
          // Determine dot color
          const today = dayjs();
          const eventDate = dayjs(event.date);
          const isPast = today.isAfter(eventDate);
          const isCurrent = today.isSame(eventDate, "day");
          const dotColor = isCurrent
            ? "bg-green-500"
            : isPast
            ? "bg-gray-500"
            : "bg-blue-500";

          return (
            <div
              key={index}
              className={`relative flex flex-row  ${
                index % 2 === 0
                  ? "sm:justify-start"
                  : "sm:justify-start md:ml-[40%]"
              }`}
            >
              <div
                className={`w-4 md:h-12 rounded-full border-4 border-gray-300 ${dotColor}`}
              ></div>
              <div>
                <div
                  className={`ml-4 max-w-sm ${
                    index % 2 === 1 ? "sm:ml-4 sm:mr-4" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramOutline;
