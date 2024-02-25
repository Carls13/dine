import { BLACK, WHITE } from "@dine/theme/colors.theme";
import styled from "styled-components";
import { DESKTOP_X_PADDING, TABLET_X_PADDING, MOBILE_X_PADDING } from "@dine/theme/spacing.theme";

export const FooterContainer = styled.footer`
    background-color: ${BLACK};
    padding: 72px ${DESKTOP_X_PADDING};
    display: flex;
    flex-direction: column;
    gap: 31px;

    @media screen and (max-width: 1200px) {
        padding: 72px ${TABLET_X_PADDING};
    }
    
    @media screen and (max-width: 600px) {
        padding: 72px ${MOBILE_X_PADDING};
    }
`;

export const FooterRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterLabel = styled.span`
    color: ${WHITE};

    font-family: League Spartan;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    text-transform: uppercase;
`; 