import React from "react";
import { Header } from "../StyledsComponents/Header";
import { DivImg } from "../StyledsComponents/DivImg";
import image from "../../assets/images.jpg";
import { HeaderCartButton } from "./HeaderCartButton";
export const HeaderPrincipal = () => {
  return (
    <>
      <Header>
        <h1>Meals</h1>
        <HeaderCartButton />
      </Header>
      <DivImg>
        <img src={image} alt="Food" />
      </DivImg>
    </>
  );
};
