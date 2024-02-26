import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "hooks";

import { signIn } from "store/slices/auth";

import durinDoor from "assets/svg/durindoor-minified.svg";

import {
  Container,
  DurinDoor,
  DurinDoorContainer,
  Key,
  Title,
  TitleContainer,
  PassInputContainer,
  PassInput,
} from "./styles";

function Login() {
  const dispatch = useAppDispatch();

  const defaultValues = {
    password: "",
  };

  const [contadorClicks, setContadorClicks] = useState(0);
  const [mostrarDurinDoor, setMostrarDurinDoor] = useState(false);
  const [mostrarTitle, setMostrarTitle] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = useCallback(
    async (data) => {
      await dispatch(signIn(data));
    },
    [dispatch]
  );

  const handleClickContainer = () =>
    setContadorClicks((contador) => contador + 1);

  const handleClickDoor = () => setMostrarTitle(true);

  useEffect(() => {
    contadorClicks === 7
      ? setTimeout(() => {
          setMostrarDurinDoor(true);
        }, 1000)
      : setMostrarDurinDoor(false);
  }, [contadorClicks]);

  return (
    <Container onClick={(e) => handleClickContainer(e)}>
      <DurinDoorContainer $mostrarDurinDoor={mostrarDurinDoor}>
        <DurinDoor src={durinDoor} alt="durin door" />
      </DurinDoorContainer>

      {mostrarDurinDoor && <Key onClick={(e) => handleClickDoor(e)} />}
      <TitleContainer $mostrarTitle={mostrarTitle}>
        <Title>Fale, amigo, e entre...</Title>
      </TitleContainer>
      {mostrarTitle && (
        <PassInputContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PassInput
              {...register("password", {
                minLength: 6,
                maxLength: 14,
              })}
              type={"password"}
              autoFocus
            />
          </form>
        </PassInputContainer>
      )}
    </Container>
  );
}

export default Login;
