import { Header } from "@dine/components/Header/Header";
import { useRouter } from "next/router";

import { HomeHeroContainer, HeroColumn, HeroTitle, HeroText, MainButton, RestaurantDetailsContainer, RestaurantInfoContainer, RestaurantInfoColumn, RestaurantInfoTitle, RestaurantInfoText,  MenuContainer, MenuTitle, MenuText, MenuOptionsContainer, MenuItemContainer, MenuItemColumn, MenuItemTitle, MenuItemText, ReservationContainer, ReservationTitle } from './Home.styles';
import { Footer } from "@dine/components/Footer/Footer";
import Image from "next/image";
import { Events } from "@dine/components/Events/Events";

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
            <RestaurantDetailsContainer>
                <RestaurantInfoContainer events={false}>
                    <Image src='/homepage/enjoyable-place-desktop.jpg' alt="Enjoyable" width={540} height={720} />
                    <RestaurantInfoColumn>
                        <RestaurantInfoTitle>Enjoyable place for all the family</RestaurantInfoTitle>
                        <RestaurantInfoText>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</RestaurantInfoText>
                    </RestaurantInfoColumn>
                </RestaurantInfoContainer>
                <RestaurantInfoContainer events={false}>
                    <RestaurantInfoColumn>
                        <RestaurantInfoTitle>The most locally sourced food</RestaurantInfoTitle>
                        <RestaurantInfoText>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</RestaurantInfoText>
                    </RestaurantInfoColumn>
                    <Image src='/homepage/locally-sourced-desktop.jpg' alt="Sourced" width={540} height={720} />
                </RestaurantInfoContainer>
            </RestaurantDetailsContainer>
            <MenuContainer>
                <RestaurantInfoColumn>
                    <MenuTitle>The most locally sourced food</MenuTitle>
                    <MenuText>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</MenuText>
                </RestaurantInfoColumn>
                <MenuOptionsContainer>
                    <MenuItemContainer>
                        <Image src='/homepage/salmon-desktop-tablet.jpg' alt="Salmon" width={128} height={96} />
                        <MenuItemColumn>
                            <MenuItemTitle>Seared Salmon Fillet</MenuItemTitle>
                            <MenuItemText>Our locally sourced salmon served 
                                with a refreshing buckwheat summer salad.</MenuItemText>
                        </MenuItemColumn>
                    </MenuItemContainer>
                    <MenuItemContainer>
                        <Image src='/homepage/beef-desktop-tablet.jpg' alt="Beef" width={128} height={96} />
                        <MenuItemColumn>
                            <MenuItemTitle>Rosemary Filet Mignon</MenuItemTitle>
                            <MenuItemText>Our prime beef served to your taste with a delicious choice of seasonal sides.</MenuItemText>
                        </MenuItemColumn>
                    </MenuItemContainer>
                    <MenuItemContainer>
                        <Image src='/homepage/chocolate-desktop-tablet.jpg' alt="Chocolate" width={128} height={96} />
                        <MenuItemColumn>
                            <MenuItemTitle>Seared Salmon Fillet</MenuItemTitle>
                            <MenuItemText>Our locally sourced salmon served 
                                with a refreshing buckwheat summer salad.</MenuItemText>
                        </MenuItemColumn>
                    </MenuItemContainer>
                </MenuOptionsContainer>
            </MenuContainer>
            <Events />
            <ReservationContainer>
                <ReservationTitle>Ready to make a reservation?</ReservationTitle>
                <MainButton onClick={() => router.push('/reservation')}>BOOK A TABLE</MainButton>
            </ReservationContainer>
            <Footer />
        </>
    );
}