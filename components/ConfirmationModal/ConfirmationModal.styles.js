import { BLACK, GRAY, WHITE } from "@dine/theme/colors.theme";
import { MOBILE_X_PADDING } from "@dine/theme/spacing.theme";
import styled from "styled-components";

export const DarkOverlay = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 200vh;
    background: ${BLACK}88;
    z-index: 10;
    display: ${props => props.hidden ? 'none' : 'block'};

    @media screen and (max-width: 600px) {
        top: 90px;
    }
`;

export const ConfirmationContainer = styled.div`
    position: absolute;
    top: 100px;
    left: calc(50vw - 270px);
    width: 540px;
    height: auto;
    background: ${WHITE};
    display: ${props => props.hidden ? 'none' : 'flex'};
    flex-direction: column;
    border-radius: 8px;
    padding: 33px;
    gap: 15px;

    button {
        display: block;
        margin: 0 auto;

        &:hover {
            border: 2px solid ${BLACK};
        }
    }

    @media screen and (max-width: 600px) {
        left: ${0};
        max-width: calc(100vw - ${MOBILE_X_PADDING});
        width: calc(100vw - ${MOBILE_X_PADDING});
        top: 50px;
        padding: 20px 10px;
    }
`;

export const ThankYou = styled.h1`
    color: ${BLACK};

    font-family: League Spartan;
    font-size: 32px;
    line-height: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
`;

export const ConfirmationText = styled.p`
    color: ${BLACK};
    font-family: League Spartan;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
`;

