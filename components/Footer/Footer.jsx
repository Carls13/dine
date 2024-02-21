import Image from "next/image";
import { FooterContainer, FooterRow, FooterColumn, FooterLabel } from "./Footer.styles";
import Link from "next/link";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterRow>
                <Link href={'/'}>
                    <Image src={'/logo.svg'} width={103.42} height={40} alt="Logo" />
                </Link>
                <FooterColumn>
                    <FooterLabel>Marthwaite, Sedbergh</FooterLabel>
                    <FooterLabel>Cumbria</FooterLabel>
                    <FooterLabel>+00 44 123 4567</FooterLabel>
                </FooterColumn>
                <FooterColumn>
                    <FooterLabel>OPEN TIMES</FooterLabel>
                    <FooterLabel>MON - FRI: 09:00 AM - 10:00 PM</FooterLabel>
                    <FooterLabel>SAT - SUN: 09:00 AM - 11:30 PM</FooterLabel>
                </FooterColumn>
            </FooterRow>
        </FooterContainer>
    );
};