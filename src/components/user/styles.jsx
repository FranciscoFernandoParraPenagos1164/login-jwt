import styled from "styled-components";

export const StyledUser = styled.div({
  border: "1px solid var(--primary-color)",
  borderRadius: "10px",
  padding: "16px",
  height: "fit-content",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",

  img: {
    width: "50px",
    borderRadius: "50%",
  },

  ".profile": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    h3: {
      fontWeight: "400",
      fontSize: "1.3rem",
    },
  },

  h5: {
    fontWeight: "400",
    color: "var(--label-color)",
  },

  p: {
    color: "var(--text-color)",
  },

  ".code": {
    p: {
      fontSize: "0.8rem",
    },
  },

  ".isEnabled": {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    position: "absolute",
    top: "10px",
    right: "10px",
  },

  ".enabled": {
    background: "#11FF31",
    boxShadow: "0 0 3px 1.5px #11FF31",
  },

  ".disabled": {
    background: "#FF2727",
    boxShadow: "0 0 3px 1.5px #FF2727",
  },

  "@media screen and (min-width: 1024px)": {
    width: "30%",
  },

  "@media screen and (min-width: 769px) and (max-width: 1024px)": {
    width: "45%",
  },

  "@media (max-width: 769px)": {
    background: "var(--background-pages)",
    width: "90%",
  },
});
