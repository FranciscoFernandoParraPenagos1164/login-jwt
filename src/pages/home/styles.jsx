import styled from "styled-components";

export const StyledHome = styled.div({
  width: "80vw",
  height: "90vh",
  padding: "15px",
  background: "var(--background-pages)",
  display: "flex",
  justifyContent: "space-evenly",
  rowGap: "15px",
  alignContent: "flex-start",
  flexWrap: "wrap",
  borderRadius: "10px",

  "@media screen and (min-width: 1480px)": {
    padding: "30px",
    width: "90vw",
    columnGap: "6%",
  },

  "@media (max-width: 769px)": {
    width: "100vw",
    height: "100vh",
    borderRadius: "0",
    background: "none",
  },
});
