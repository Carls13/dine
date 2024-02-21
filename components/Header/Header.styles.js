import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@dine/theme/spacing.theme";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px ${DESKTOP_X_PADDING};
    background-color: transparent;

    @media screen and (max-width: 1200px) {
        padding: 50px ${TABLET_X_PADDING};
    }

    @media screen and (max-width: 600px) {
        padding: 25px ${MOBILE_X_PADDING};
    }
`;