import { MainButton, RestaurantDetailsContainer, RestaurantInfoColumn, RestaurantInfoContainer, RestaurantInfoText, RestaurantInfoTitle } from "@dine/views/Home/Home.styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { EventOption, EventsSelectorContainer } from "./Event.styles";
import { useState } from "react";
import { EVENTS_DATA } from "@dine/data/events.data";

export const Events = () => {
    const [selectedEventType, setSelectedEventType] = useState('family');

    const selectedEvent = EVENTS_DATA.find((event) => event.eventType === selectedEventType);

    const { eventTitle, eventText, eventImageDesktop, eventImageTablet, eventImageMobile } = selectedEvent;

    const router = useRouter();

    return (
        <RestaurantDetailsContainer>
            <RestaurantInfoContainer events={true}>
                <Image src={eventImageDesktop} className="desktop-image" alt={eventTitle} width={540} height={600} />
                <Image src={eventImageTablet} className="tablet-image" alt={eventTitle} width={540} height={600} />
                <Image src={eventImageMobile} className="mobile-image" alt={eventTitle} width={540} height={600} />
                <RestaurantInfoColumn>
                    <RestaurantInfoTitle><b>{eventTitle}</b></RestaurantInfoTitle>
                    <RestaurantInfoText>{eventText}</RestaurantInfoText>
                    <MainButton onClick={() => router.push('/reservation')}>BOOK A TABLE</MainButton>
                    <EventsSelectorContainer>
                        <EventOption active={selectedEventType === 'family'} onClick={() => setSelectedEventType('family')}>FAMILY GATHERING</EventOption>
                        <EventOption active={selectedEventType === 'special'} onClick={() => setSelectedEventType('special')}>SPECIAL EVENTS</EventOption>
                        <EventOption active={selectedEventType === 'social'} onClick={() => setSelectedEventType('social')}>SOCIAL EVENTS</EventOption>
                    </EventsSelectorContainer>
                </RestaurantInfoColumn>
            </RestaurantInfoContainer>
        </RestaurantDetailsContainer>
    );
};