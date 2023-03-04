import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
const EventItems = (props) => {
    const { title, image, date, location, id } = props;
    const readableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title}></img>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                    {/* <Link href={exploreLink}>Explore event</Link> */}
                </div>
            </div>
        </li>
    );
};

export default EventItems;
