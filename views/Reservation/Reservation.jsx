import { Header } from "@dine/components/Header/Header";
import { useRouter } from "next/router";

import { Footer } from "@dine/components/Footer/Footer";
import { 
    ReservationHeroContainer,
    FormContainer,
    InputContainer,
    Input,
    ErrorMessage,
    DateInputContainer,
    DateLabelContainer,
    DateLabel,
    DateContainer,
    Select,
    Option
 } from "./Reservation.styles";
import { HeroColumn, HeroText, HeroTitle, MainButton } from "../Home/Home.styles";

export const ReservationView = () => {
    const router = useRouter();
    return (
        <>
            <ReservationHeroContainer>
                <Header home/>
                <HeroColumn home>
                    <HeroTitle>Reservations</HeroTitle>
                    <HeroText>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</HeroText>
                </HeroColumn>
                <FormContainer>
                    <InputContainer>
                        <Input type="text" name="name" />
                        <ErrorMessage>This field is required</ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                        <Input type="email" name="email" />
                        <ErrorMessage>This field is required</ErrorMessage>
                    </InputContainer>
                    <DateInputContainer>
                        <DateLabelContainer>
                            <DateLabel>Pick a date</DateLabel>
                            <ErrorMessage>This field is required</ErrorMessage>
                        </DateLabelContainer>
                        <DateContainer>
                            <Input type="text" name="name" />
                            <Input type="text" name="name" />
                            <Input type="text" name="name" />
                        </DateContainer>
                    </DateInputContainer>
                    <DateInputContainer>
                        <DateLabelContainer>
                            <DateLabel>Pick a time</DateLabel>
                            <ErrorMessage>This field is required</ErrorMessage>
                        </DateLabelContainer>
                        <DateContainer>
                            <Input type="text" name="name" />
                            <Input type="text" name="name" />
                            <Select>
                                <Option>AM</Option>
                                <Option>PM</Option>
                            </Select>
                        </DateContainer>
                    </DateInputContainer>
                    <MainButton>MAKE RESERVATION</MainButton>
                </FormContainer>
            </ReservationHeroContainer>
            <Footer />
        </>
    ); 
}