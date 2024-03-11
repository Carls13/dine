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
                <Header home/>
                <HeroColumn>
                    <HeroTitle>Exquisite dining since 1989</HeroTitle>
                    <HeroText>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</HeroText>
                    <MainButton onClick={() => router.push('/reservation')}>BOOK A TABLE</MainButton>
                </HeroColumn>
            </HomeHeroContainer>
            <RestaurantDetailsContainer>
                <RestaurantInfoContainer events={false}>
                    <Image src='/homepage/enjoyable-place-desktop.jpg' className="desktop-image" alt="Enjoyable" width={540} height={720} />
                    <Image src='/homepage/enjoyable-place-tablet.jpg' className="tablet-image" alt="Enjoyable" width={540} height={600} />
                    <Image src='/homepage/enjoyable-place-mobile.jpg' className="mobile-image" alt="Enjoyable" width={540} height={600} />

                    <RestaurantInfoColumn>
                        <Image src='/patterns/pattern-divide.svg' alt="Divide line" width={71} height={7} />
                        <RestaurantInfoTitle>Enjoyable place for all the family</RestaurantInfoTitle>
                        <RestaurantInfoText>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</RestaurantInfoText>
                    </RestaurantInfoColumn>
                </RestaurantInfoContainer>
                <RestaurantInfoContainer reverse events={false}>
                    <RestaurantInfoColumn>
                        <Image src='/patterns/pattern-divide.svg' alt="Divide line" width={71} height={7} />
                        <RestaurantInfoTitle>The most locally sourced food</RestaurantInfoTitle>
                        <RestaurantInfoText>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</RestaurantInfoText>
                    </RestaurantInfoColumn>
                    <Image src='/homepage/locally-sourced-desktop.jpg' className="desktop-image" alt="Sourced" width={540} height={720} />
                    <Image src='/homepage/locally-sourced-tablet.jpg' className="tablet-image" alt="Sourced" width={540} height={600} />
                    <Image src='/homepage/locally-sourced-mobile.jpg' className="mobile-image" alt="Sourced" width={540} height={600} />
                </RestaurantInfoContainer>
            </RestaurantDetailsContainer>
            <MenuContainer>
                <RestaurantInfoColumn>
                    <Image src='/patterns/pattern-divide.svg' alt="Divide line" width={71} height={7} />
                    <MenuTitle>A few highlights from our menu</MenuTitle>
                    <MenuText>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</MenuText>
                </RestaurantInfoColumn>
                <MenuOptionsContainer>
                    <MenuItemContainer>
                        <Image src='/homepage/salmon-desktop-tablet.jpg' className="desktop-image" alt="Salmon" width={128} height={96} />
                        <Image src='/homepage/salmon-desktop-tablet.jpg' className="tablet-image" alt="Salmon" width={128} height={96} />
                        <Image src='/homepage/salmon-mobile.jpg' className="mobile-image" alt="Salmon" width={128} height={96} />
                        <MenuItemColumn>
                            <MenuItemTitle>Seared Salmon Fillet</MenuItemTitle>
                            <MenuItemText>Our locally sourced salmon served 
                                with a refreshing buckwheat summer salad.</MenuItemText>
                        </MenuItemColumn>
                    </MenuItemContainer>
                    <hr />
                    <MenuItemContainer>
                        <Image src='/homepage/beef-desktop-tablet.jpg' className="desktop-image"  alt="Beef" width={128} height={96} />
                        <Image src='/homepage/beef-desktop-tablet.jpg' className="tablet-image" alt="Beef" width={128} height={96} />
                        <Image src='/homepage/beef-mobile.jpg' className="mobile-image" alt="Beef" width={128} height={96} />
                        <MenuItemColumn>
                            <MenuItemTitle>Rosemary Filet Mignon</MenuItemTitle>
                            <MenuItemText>Our prime beef served to your taste with a delicious choice of seasonal sides.</MenuItemText>
                        </MenuItemColumn>
                    </MenuItemContainer>
                    <hr />
                    <MenuItemContainer>
                        <Image src='/homepage/chocolate-desktop-tablet.jpg' className="desktop-image" alt="Chocolate" width={128} height={96} />
                        <Image src='/homepage/chocolate-desktop-tablet.jpg' className="tablet-image" alt="Chocolate" width={128} height={96} />
                        <Image src='/homepage/chocolate-mobile.jpg' className="mobile-image" alt="Chocolate" width={128} height={96} />
                        <MenuItemColumn>
                            <MenuItemTitle>Summer Fruit Chocolate Mousse</MenuItemTitle>
                            <MenuItemText>Creamy mousse combined with summer fruits and dark chocolate shavings.</MenuItemText>
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