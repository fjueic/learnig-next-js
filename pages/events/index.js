import { getAllEvents } from "@/dummy-data";
import EventList from "../components/Events/Eventlist";
import EventSearch from "../components/Events/EventSearch";
import { useRouter } from "next/router";
const AllEvents = () => {
    const router = useRouter();
    const AllEvents = getAllEvents();
    const findEventHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };
    return (
        <>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={AllEvents} />
        </>
    );
};

export default AllEvents;
