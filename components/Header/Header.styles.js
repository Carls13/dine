import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@dine/theme/spacing.theme";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px ${DESKTOP_X_PADDING};
    background-color: transparent;

    @media screen and (max-width: 1200px) {
        ${props => props.home ? css`
            justify-content: center;
            padding-top: 60%;
        `: ''}
    }

    @media screen and (max-width: 600px) {
        justify-content: center;
        padding: 50px ${MOBILE_X_PADDING};
        ${props => props.home ? css`
            padding-top: 60%;
        `: ''}
    }
`;