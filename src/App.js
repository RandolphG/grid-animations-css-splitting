import React, { useEffect } from "react";
import {
  AppHeader,
  AppSection,
  AppStyled,
  GridBackground,
  GridLines,
  HeadingOne,
  HeadingTwo,
} from "./GlobalStyles";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

function App() {
  useEffect(() => {
    Splitting({
      target: ".grid-background,.grid-lines",
      by: "cells",
      image: true,
      columns: 8,
      rows: 6,
    });

    // replay the animation by hiding & showing the element again
    let element = document.body;
    element.addEventListener("click", (event) => {
      element.hidden = true;
      requestAnimationFrame(() => {
        element.hidden = false;
      });
    });
  });

  return (
    <AppStyled>
      <GridLines className="grid-lines" />
      <GridBackground className="grid-background" />
      <AppHeader />
      <HeadingOne>
        <span>Randi</span>
      </HeadingOne>
      <HeadingTwo>
        <span>Gordon</span>
      </HeadingTwo>
      <AppSection />
    </AppStyled>
  );
}

export default App;
