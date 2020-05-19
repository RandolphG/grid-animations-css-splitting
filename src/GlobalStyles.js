import styled, { css } from "styled-components";

const easing = "cubic-bezier(0.5, 0, 0.5, 1)";
const gridDelay = "1s";
const contentDelay = 8 * 6;

/**
 * cell propagation in styled components
 * @param col
 * @param row
 */
const cell = (col, row) => {
  return `
  @each $c in ${col} {
   @each $r in ${row} {
     .cell[style*="col-index:#{$c}"][style*="row-index:#{$r}] {
         @content;
       }
     }
   }`;
};

export const AppStyled = styled.div`
  outline: 1px solid white;
  height: 90vh;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "1 1 1 a a a a a"
    "2 2 2 2 2 2 2 2"
    "3 3 3 3 k k 4 4"
    "5 5 f f f . . ."
    "b b b 7 7 7 7 7"
    "b b b 8 8 8 8 8";
`;

export const GridBackground = styled.div`
  --cell-delay: 0.1s;
  --grid-delay: 0.025s;
  --grid-duration: 0.3s;

  // column / row and & span to end and bottom
  grid-area: 1 / 1 / -1 / -1;
  transform-style: preserve-3d;
  perspective: 600px;

  .cell {
    transform-style: preserve-3d;
    background: black;
    animation: grid-in 1s cubic-bezier(0.3, 0, 0.2, 1) both;
    @keyframes grid-in {
      from {
        transform: rotateX(-90deg) scaleY(0) translateY(100%);
      }
    }
    animation-delay: calc(
      var(--grid-delay) + var(--grid-duration) +
        (var(--cell-delay) * var(--cell-index))
    );
  }
`;

export const HeadingOne = styled.h2`
  --easing: cubic-bezier(0.5, 0, 0.5, 1);
  --grid-delay: 1s;
  --cell-delay: 05s;
  --content-delay: calc(var(--grid-delay) + (8 * 6 * var(--cell-delay)));
  margin: 0;
  font-size: 9vw;
  grid-area: k;
  overflow: hidden;
  span {
    background-color: deeppink;
    display: block;
    animation: slide-up 0.9s var(--content-delay) var(--easing) both;
    //animation-delay: calc(var(--cell-delay) * var(--cell-index));
    animation-delay: 4s;
  }
`;

export const HeadingTwo = styled.h2`
  --easing: cubic-bezier(0.5, 0, 0.5, 1);
  --grid-delay: 1s;
  --cell-delay: 3s;
  --content-delay: calc(var(--grid-delay) + (8 * 6 * var(--cell-delay)));
  overflow: hidden;
  margin: 0;
  font-size: 9vw;
  grid-area: f;
  span {
    background-color: deeppink;
    display: block;
    animation: slide-up 0.9s var(--content-delay) var(--easing) both;
    @keyframes slide-up {
      from {
        transform: translateY(110%);
      }
      to {
        transform: none;
      }
    }
    //animation-delay: calc(var(--cell-delay) * var(--cell-index));
    animation-delay: 4s;
  }
`;

export const AppHeader = styled.header`
  background-color: #61dafb;
  grid-area: a;
`;

export const AppSection = styled.header`
  background-color: #61dafb;
  grid-area: b;
`;

export const GridLines = styled.div`
  --line-duration: 1s;
  --line-delay: 1s;
  --easing: cubic-bezier(0.5, 0, 0.5, 1);

  grid-area: 1 / 1 / -1 / -1;
  animation: lines-in var(--line-duration) var(--easing) var(--line-delay) both;
  @keyframes lines-in {
    from {
      transform: scale(0.01, 0);
    }
    50% {
      transform: scale(0.01, 1);
    }
  }

  .cell {
    position: absolute;
    --cell-width: calc(100% - var(--cel-total));
    width: 1px;
    background: red;
    animation: line-in var(--line-duration) var(--line-delay) var(--easing) both;
    @keyframes line-in {
      from {
        transform: scaleY(0);
      }
    }
  }
`;
