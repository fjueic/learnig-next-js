import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "../components/Events/Eventlist";
const FilteredEvents = () => {
    const router = useRouter();
    if (!router.query.slug) {
        return <p className="center">Loading...</p>;
    }
    const filteredData = router.query.slug;
    const numYear = +filteredData[0];
    const numMonth = +filteredData[1];
    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <p>Invalid Filter. Please adjust your values!</p>;
    }
    const events = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });


    return<>
        {events.length === 0 && <p>No events found for the chosen filter!</p>}
        {events.length > 0 && <EventList items={events} />}
    </>
};

export default FilteredEvents;
