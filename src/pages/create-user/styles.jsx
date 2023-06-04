import styled from "styled-components";

export const StyledCreateUser = styled.div({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  ".create-user": {
    width: "70vw",
    padding: "15px 30px",
    background: "var(--background-pages)",
    borderRadius: "10px",
    textAlign: "center",
  },

  form: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },

  select: {
    width: "100%",
    fontSize: "1.3rem",
    outline: "none",
    borderRadius: "15px",
    padding: ".6rem",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
  },

  button: {
    background: "var(--primary-color)",
    border: "none",
    padding: ".4rem .8rem",
    borderRadius: "8px",
    color: "#eee",
    fontSize: "1rem",
  },
});
