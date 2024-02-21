import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@dine/theme/spacing.theme";
import { BLACK, WHITE } from "@dine/theme/colors.theme";
import styled from "styled-components";

export const HomeHeroContainer = styled.div`
    background-image: url('/homepage/hero-bg-desktop.jpg');
    height: 100vh;
    background-size: cover;

    @media screen and (max-width: 1200px) {
        background-image: url('/homepage/hero-bg-tablet.jpg');
    }
`;

export const HeroColumn = styled.div`
    margin-left: ${DESKTOP_X_PADDING};
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 20px;
    width: 50%;

    @media screen and (max-width: 1200px) {
        width: 50%;
        align-items: center;
        margin-left: 25%;
        text-align: center;
        margin-top: 35%;
    }
`;


export const HeroTitle = styled.h1`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 80px;
    font-style: normal;
    font-weight: 300;
    line-height: 80px;
    letter-spacing: 1.429px;
`;

export const HeroText = styled.p`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
`;

export const MainButton = styled.button`
    width: 245px;
    height: 64px;
    flex-shrink: 0;
    background: ${(props) => props.transparent ? 'transparent' : BLACK};
    text-align: center;
    color: ${WHITE};
    font-family: League Spartan;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    border: 1px solid ${WHITE};

    &:hover {
        background: ${WHITE};
        color: ${BLACK}
    }
`;

export const ReservationContainer = styled.div`
    background-image: url('/homepage/ready-bg-desktop.jpg');
    height: 240px;
    background-size: cover;
    background-position: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

    @media screen and (max-width: 1200px) {
        background-image: url('/ready/hero-bg-tablet.jpg');
    }
`;

export const ReservationTitle = styled.h2`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 1.429px;
`;