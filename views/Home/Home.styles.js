import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@dine/theme/spacing.theme";
import { BLACK, COD_GRAY, MIRAGE, WHITE } from "@dine/theme/colors.theme";
import styled, { css } from "styled-components";

export const HomeHeroContainer = styled.div`
    background-image: url('/homepage/hero-bg-desktop.jpg');
    height: 120vh;
    background-size: cover;

    @media screen and (max-width: 1200px) {
        background-image: url('/homepage/hero-bg-tablet.jpg');
        background-position: -60px;
    }

    @media screen and (max-width: 600px) {
        background-image: url('/homepage/hero-bg-mobile.jpg');
        background-position: -10px;
        height: 120vh;
    }
`;

export const HeroColumn = styled.div`
    margin-left: ${DESKTOP_X_PADDING};
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 20px;
    width: 35%;

    @media screen and (max-width: 1200px) {
        width: 50%;
        align-items: center;
        margin-left: 25%;
        text-align: center;
    }

    @media screen and (max-width: 1200px) {
        width: 80%;
        margin-left: 10%;
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

    @media screen and (max-width: 600px) {
        font-size: 32px;
        line-height: 40px;
    }
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

export const RestaurantDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url('/patterns/pattern-curve-top-right.svg');
    background-repeat: no-repeat;
    min-height: 60vh;

    button {
        &:hover {
            border: 2px solid ${BLACK};
        }
    }

    @media screen and (max-width: 1200px) {
        position: relative;
        z-index: 0;
        min-height: 40vh;
    }

    @media screen and (max-width: 600px) {
        min-height: 60vh;
    }
`;

export const RestaurantInfoContainer = styled.div`
    margin: 20px ${DESKTOP_X_PADDING};
    display: flex;
    align-items: center;
    gap: 100px;

    @media screen and (max-width: 1200px) {
        margin: 20px ${TABLET_X_PADDING};
        flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    }

    @media screen and (min-width: 1200px) {
        ${props => !props.events ?
            css`
            &:nth-child(2) {
                margin-bottom: -50px;
            }
            `: css`
                &:nth-child(1) {
                    padding: 100px 0;
                }
            `
        };
    }

    ${props => !props.events ?
        css`
        &:nth-child(1) {
            margin-top: -50px;
        }
       
        `: ''
    };
   

    img {
        box-shadow: 0px 5px 20px 0px #00000033;
    }
`; 

export const RestaurantInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (max-width: 1200px) {
        align-items: center;
    }
`;

export const RestaurantInfoTitle = styled.h1`
    color: ${MIRAGE};

    font-family: League Spartan;
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 1.429px;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const RestaurantInfoText = styled.p`
    color: ${MIRAGE};

    font-family: League Spartan;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    @media screen and (max-width: 1200px) {
        text-align: center;
        width: 70%;
    }
    
    @media screen and (max-width: 600px) {
        text-align: center;
        width: 100%;
    }
`;

export const MenuContainer = styled.div`
    padding: 150px ${DESKTOP_X_PADDING};
    display: flex;
    gap: 100px;
    background-color: ${BLACK};

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        padding: 150px ${TABLET_X_PADDING};
    }
`; 


export const MenuTitle = styled.h1`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 1.429px;

    @media screen and (max-width: 1200px) {
        text-align: center;
    }
`;

export const MenuText = styled.p`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;

    @media screen and (max-width: 1200px) {
        text-align: center;
    }
`;

export const MenuOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    hr {
        border: 2px solid ${COD_GRAY};
    }
`;

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 1200px) {
        gap: 30px;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;

        img {
            width: 100%;
            height: auto;
        }
    }
`; 

export const MenuItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`;

export const MenuItemTitle = styled.h5`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 1.429px;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const MenuItemText = styled.p`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;

    @media screen and (max-width: 600px) {
        text-align: center;
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
        background-image: url('/homepage/ready-bg-tablet.jpg');
            flex-direction: column;
            padding: 10px ${TABLET_X_PADDING};
            gap: 10px;
        }
    }
`;

export const ReservationTitle = styled.h2`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 1.429px;

    @media screen and (max-width: 600px) {
        font-size: 32px;
        text-align: center;
    }
`;