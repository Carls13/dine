import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@dine/theme/spacing.theme";
import { BLACK, ERROR, MIRAGE, SHUTTLE_GRAY, WHITE } from "@dine/theme/colors.theme";
import styled from "styled-components";

export const ReservationHeroContainer = styled.div`
    background-image: url('/booking/hero-bg-desktop.jpg');
    height: 80vh;
    background-size: cover;

    @media screen and (max-width: 1200px) {
        background-image: url('/booking/hero-bg-tablet.jpg');
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
    box-shadow: #00000077 2px 2px 5px 10px;

    button {
        margin: 10px auto;
        width: 100%;

        &:hover {
            border: 2px solid ${BLACK};
        }
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
`;

export const DateLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 140px;
`;

export const DateLabel = styled.label`
    color: ${BLACK};

    font-family: League Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
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
    border-bottom: 2px solid ${SHUTTLE_GRAY};
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