import styled from "styled-components";

export const StyledHome = styled.div({
  width: "80vw",
  minHeight: "90vh",
  margin: "3rem 0",
  padding: "15px",
  background: "var(--background-pages)",
  display: "flex",
  justifyContent: "space-evenly",
  rowGap: "15px",
  alignContent: "flex-start",
  flexWrap: "wrap",
  borderRadius: "10px",
  position: "relative",

  a: {
    border: "1px solid var(--primary-color)",
    color: "var(--primary-color)",
    background: "#fff",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    position: "absolute",
    top: "-15px",
    right: "-15px",

    ":hover": {
      background: "var(--primary-color)",
      color: "#ffff",
      border: "1px solid #fff",
    },
  },

  "@media screen and (min-width: 1480px)": {
    padding: "30px",
    width: "90vw",
  },

  "@media screen and (min-width: 769px) and (max-width: 1024px)": {
    a: {
      width: "30px",
      height: "30px",
      top: "-10px",
      right: "-10px",
    },
  },

  "@media (max-width: 769px)": {
    width: "100vw",
    height: "100vh",
    borderRadius: "0",
    background: "none",
    margin: "1rem 0",

    a: {
      width: "30px",
      height: "30px",
      top: "10px",
      right: "10px",
    },
  },
});
