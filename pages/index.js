import { getFeaturedEvents } from "@/dummy-data";
import EventList from "./components/Events/Eventlist";
const HomePage = () => {
    const feturedEvents = getFeaturedEvents();
    return (
        <div>
            <EventList items={feturedEvents} />
        </div>
    );
};

export default HomePage;
