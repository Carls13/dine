import { Header } from "@dine/components/Header/Header";
import { useRouter } from "next/router";

import { Footer } from "@dine/components/Footer/Footer";
import Image from "next/image";
import { ReservationHeroContainer } from "./Reservation.styles";
import { HeroColumn, HeroText, HeroTitle } from "../Home/Home.styles";

export const ReservationView = () => {
    const router = useRouter();
    return (
        <>
            <ReservationHeroContainer>
                <Header home/>
                <HeroColumn home>
                    <HeroTitle>Reservations</HeroTitle>
                    <HeroText>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</HeroText>
                </HeroColumn>
            </ReservationHeroContainer>
            <Footer />
        </>
    ); 
}