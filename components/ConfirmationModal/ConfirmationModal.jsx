import { useRouter } from "next/router"

import {
    DarkOverlay,
    ConfirmationContainer,
    ThankYou,
    ConfirmationText
} from './ConfirmationModal.styles';
import Image from "next/image";
import { MainButton } from "@dine/views/Home/Home.styles";

export const ConfirmationModal = ({ hidden }) => {
    const router = useRouter();
    const handleBackToHome = () => {
        router.push('/');
    }

    return (
        <DarkOverlay hidden={hidden}>
            <ConfirmationContainer>
                <Image src='/booking/icon-order-confirmation.svg' width={64} height={64} alt="Confirmation" />
                <ThankYou>THANK YOU FOR YOUR ORDER</ThankYou>
                <ConfirmationText>You will receive an email confirmation shortly.</ConfirmationText>
                <MainButton onClick={handleBackToHome}>BACK TO HOME</MainButton>
            </ConfirmationContainer>
        </DarkOverlay>
    );
}