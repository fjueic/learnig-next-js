import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import EventContent from "../components/event-detail/event-content";
import EventLogistics from "../components/event-detail/event-logistics";
import EventSummary from "../components/event-detail/event-summary";
const DetailedEventPage = () => {
    const router = useRouter();
    const eventId = router.query.id;
    const event = getEventById(eventId);
    if (!event) {
        return <p>No event found!</p>;
    }
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                alt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};
export default DetailedEventPage;
