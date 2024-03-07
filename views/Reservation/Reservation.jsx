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
    Option,
    AmountContainer,
    SignButton,
    Amount,
    LinesContainer
 } from "./Reservation.styles";
import { HeroColumn, HeroText, HeroTitle, MainButton, RestaurantDetailsContainer } from "../Home/Home.styles";
import { useState } from "react";
import { Lines } from "@dine/components/Lines/Linex";
import { useForm } from "react-hook-form";
import { ConfirmationModal } from "@dine/components/ConfirmationModal/ConfirmationModal";

export const ReservationView = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    const [amount, setAmount] = useState(2);
    const [showConfirmationModal, setShowModal] = useState(false);

    const onSubmit = () => {
        setShowModal(true);
    }

    const router = useRouter();
    return (
        <>
            <ReservationHeroContainer>
                <Header/>
                <HeroColumn>
                    <HeroTitle>Reservations</HeroTitle>
                    <HeroText>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</HeroText>
                </HeroColumn>
                <FormContainer>
                    <InputContainer>
                        <Input {...register("name", { required: true })} placeholder="Name" />
                        {errors.name && <ErrorMessage>This field is required</ErrorMessage>}
                    </InputContainer>
                    <InputContainer>
                        <Input {...register("email", { required: true, email: true })} placeholder="Email" />
                        {errors.email && <ErrorMessage>This field is required</ErrorMessage>}
                    </InputContainer>
                    <DateInputContainer>
                        <DateLabelContainer>
                            <DateLabel>Pick a date</DateLabel>
                            {(errors.month || errors.day || errors.year) && <ErrorMessage>This field is required</ErrorMessage>}
                        </DateLabelContainer>
                        <DateContainer>
                            <Input {...register("month", { required: true })} placeholder="MM" />
                            <Input {...register("day", { required: true })} placeholder="DD" />
                            <Input {...register("year", { required: true })} placeholder="YYYY" />
                        </DateContainer>
                    </DateInputContainer>
                    <DateInputContainer>
                        <DateLabelContainer>
                            <DateLabel>Pick a time</DateLabel>
                            {(errors.hour || errors.minutes) && <ErrorMessage>This field is required</ErrorMessage>}
                        </DateLabelContainer>
                        <DateContainer>
                            <Input {...register("hour", { required: true })} placeholder="HH"/>
                            <Input {...register("minutes", { required: true })} placeholder="mm" />
                            <Select>
                                <Option>AM</Option>
                                <Option>PM</Option>
                            </Select>
                        </DateContainer>
                    </DateInputContainer>
                    <DateInputContainer>
                        <AmountContainer>
                            <SignButton onClick={() => setAmount(amount === 0 ? 0 : amount - 1)}>-</SignButton>
                            <Amount>{amount} {amount === 1 ? 'person' : 'people'} </Amount>
                            <SignButton onClick={() => setAmount(amount + 1)}>+</SignButton>
                        </AmountContainer>
                    </DateInputContainer>
                    <MainButton onClick={handleSubmit(onSubmit)}>MAKE RESERVATION</MainButton>
               
                </FormContainer>
            </ReservationHeroContainer>
            <RestaurantDetailsContainer className="behind">
                <LinesContainer>
                    <Lines />
                </LinesContainer>
            </RestaurantDetailsContainer>
            <Footer />
            <ConfirmationModal hidden={!showConfirmationModal} />

        </>
    ); 
}