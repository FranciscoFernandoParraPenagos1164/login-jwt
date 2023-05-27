import styled from "styled-components";

export const StyledInput = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  position: "relative",

  ".label": {
    fontSize: "1rem",
  },

  ".input": {
    width: "100%",
    fontSize: "1.4rem",
    outline: "none",
    borderRadius: "15px",
    padding: ".4rem",
    border: "1px solid var(--border-color)",
  },

  span: {
    color: "var(--error-letter-color)",
    fontSize: ".7rem",
    position: "absolute",
    bottom: "-15px",
  },
});
