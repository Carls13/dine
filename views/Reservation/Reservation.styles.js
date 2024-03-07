import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@dine/theme/spacing.theme";
import { BLACK, ERROR, MIRAGE, SHUTTLE_GRAY, WHITE } from "@dine/theme/colors.theme";
import styled from "styled-components";

export const ReservationHeroContainer = styled.div`
    background-image: url('/booking/hero-bg-desktop.jpg');
    height: 80vh;
    background-size: cover;

    @media screen and (max-width: 1200px) {
        height: 50vh;
        background-image: url('/booking/hero-bg-tablet.jpg');

        > div {
            margin-top: unset;
            margin-bottom: 50px;
        }
    }
    
    @media screen and (max-width: 600px) {
        height: 100vh;
        background-image: url('/booking/hero-bg-mobile.jpg');

        > div {
            margin-top: unset;
            margin-bottom: 50px;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 50px 30px;
    width: 540px;
    background-color: ${WHITE};
    position: relative;
    left: 50%;
    bottom: 40%;
    box-shadow: #00000077 2px 2px 20px 10px;
    position: relative;
    z-index: 2;

    button {
        margin: 10px auto;
        width: 100%;

        &:hover {
            border: 2px solid ${BLACK};
        }
    }

    @media screen and (max-width: 1200px) {
        margin: 100px auto;
        position: unset;
    }

    @media screen and (max-width: 600px) {
        max-width: 100%;     
        width: 80%;   
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Input = styled.input`
    background-color: transparent;
    border-bottom: 2px solid ${SHUTTLE_GRAY};
    border-top: unset;
    border-left: unset;
    border-right: unset;
    padding-left: 20px;
    color: ${BLACK};
    font-family: League Spartan;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    outline: none;
    height: 56px;
    max-height: 56px;
    max-width: 100%;

    &::placeholder {
        color: ${SHUTTLE_GRAY};
        font-family: League Spartan;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;

export const ErrorMessage = styled.label`
    color: ${ERROR};

    font-family: League Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`;

export const DateInputContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const DateLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 140px;

    @media screen and (max-width: 600px) {
        margin-right: auto;
        font-size: 18px;
    }
`;

export const DateLabel = styled.label`
    color: ${BLACK};

    font-family: League Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;

    @media screen and (max-width: 600px) {
        margin-right: auto;
        font-size: 18px;
    }
`;

export const DateContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    input {
        max-width: 100px;
        padding-left: 0;
        text-align: center;
    }
`;

export const Select = styled.select`
    background-color: transparent;
    border-top: unset;
    border-left: unset;
    border-right: unset;
    border-bottom: 2px solid ${SHUTTLE_GRAY};
    padding-left: 20px;
    color: ${BLACK};
    font-family: League Spartan;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    outline: none;
    height: 60px;
    max-height: 60px;
    max-width: 100%;

    &::placeholder {
        color: ${SHUTTLE_GRAY};
        font-family: League Spartan;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;

export const Option = styled.option`
    background-color: transparent;
    color: ${BLACK};
    font-family: League Spartan;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    outline: none;

    &::placeholder {
        color: ${SHUTTLE_GRAY};
        font-family: League Spartan;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${WHITE};
    width: 100%;
`;

export const SignButton = styled.div`
    color: ${BLACK};
    width: 35px;
    text-align: center;
    font-family: League Spartan;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 15px;

    &:hover {
        filter: brightness(0.9);
    }

    @media screen and (max-width: 600px) {
        width: 15px;
    }
`;

export const Amount = styled.div`
    color: ${BLACK};
    text-align: center;
    font-family: League Spartan;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 15px;
    width: 100%;
`;

export const LinesContainer = styled.div`
    .lines {
        position: relative;
        z-index: 1;
        left: 45%;
        top: 25vh;
    }
`;