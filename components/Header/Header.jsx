import Image from "next/image";

import { HeaderContainer } from './Header.styles';
import Link from "next/link";

export const Header = ({ home }) => {
    return (
            <HeaderContainer home={home}>
                <Link href={'/'}>
                    <Image src={'/logo.svg'} width={103.42} height={40} alt="Logo" />
                </Link>
            </HeaderContainer>
    );
};