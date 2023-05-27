import styled from "styled-components";

export const StyledLogin = styled.div({
  background: "var(--background-pages)",
  padding: "1rem",
  fontSize: "1rem",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: ".8rem",

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "1rem",
  },

  button: {
    background: "var(--primary-color)",
    border: "none",
    padding: ".4rem .8rem",
    borderRadius: "8px",
    color: "#eee",
    fontSize: "1rem",
  },

  span: {
    color: "var(--error-letter-color)",
    fontSize: ".7rem",
  },

  div: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",

    a: {
      textDecoration: "none",
      color: "var(--primary-color)",
    },
  },

  "@media (max-width: 769px)": {
    width: "100vw",
    height: "100vh",
    borderRadius: "0",
    justifyContent: "center",
  },
});
