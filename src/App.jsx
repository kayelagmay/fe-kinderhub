import { useEffect, useState } from "react";
import { getEvents } from "./apiService";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.event_id}>
            <strong>{event.title}</strong> - {event.date} at {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;