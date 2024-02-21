import { Header } from "@dine/components/Header/Header";
import { useRouter } from "next/router";

import { HomeHeroContainer, HeroColumn, HeroTitle, HeroText, MainButton, ReservationContainer, ReservationTitle } from './Home.styles';

export const HomewView = () => {
    const router = useRouter();
    return (
        <>
            <HomeHeroContainer>
                <Header />
                <HeroColumn>
                    <HeroTitle>Exquisite dining since 1989</HeroTitle>
                    <HeroText>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</HeroText>
                    <MainButton onClick={() => router.push('/reservation')}>BOOK A TABLE</MainButton>
                </HeroColumn>
            </HomeHeroContainer>
            <ReservationContainer>
                <ReservationTitle>Ready to make a reservation?</ReservationTitle>
                <MainButton onClick={() => router.push('/reservation')}>BOOK A TABLE</MainButton>
            </ReservationContainer>
        </>
    );
}