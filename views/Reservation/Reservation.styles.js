import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@dine/theme/spacing.theme";
import { BLACK, MIRAGE, WHITE } from "@dine/theme/colors.theme";
import styled from "styled-components";

export const ReservationHeroContainer = styled.div`
    background-image: url('/booking/hero-bg-desktop.jpg');
    height: 80vh;
    background-size: cover;

    @media screen and (max-width: 1200px) {
        background-image: url('/booking/hero-bg-tablet.jpg');
    }
`;