import { BLACK, COD_GRAY, EBONY_CLAY } from "@dine/theme/colors.theme";
import styled from "styled-components";

export const EventsSelectorContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const EventOption = styled.span`
    cursor: pointer;
    color: ${EBONY_CLAY};

    font-family: League Spartan;
    font-size: 17px;
    font-style: normal;
    font-weight: ${props => props.active ? 'bold' : '500'};
    line-height: 30px;
    letter-spacing: 2.5px;

    &:hover {
        font-weight: bold;
    }
`;