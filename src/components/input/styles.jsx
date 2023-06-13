import styled from "styled-components";

export const StyledInput = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "40%",
  position: "relative",

  ".label": {
    fontSize: "1rem",
    color: "var(--label-color)",
  },

  ".input": {
    width: "100%",
    fontSize: "1.3rem",
    outline: "none",
    borderRadius: "15px",
    padding: ".6rem",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
  },

  span: {
    color: "var(--error-letter-color)",
    fontSize: ".7rem",
    position: "absolute",
    bottom: "-15px",
  },
});
