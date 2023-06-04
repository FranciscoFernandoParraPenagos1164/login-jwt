import {useState} from "react";
import InputView from "./view";

function Input({reference, required, type = "text", children}) {
  const [valid, setValid] = useState(true);

  function handleInvalidInput(e) {
    e.preventDefault();
    setValid(false);
  }

  function handleChangeInput(e) {
    if (e.target.value && !valid) {
      setValid(true);
    }
  }

  return <InputView reference={reference} label={children} required={required} type={type} valid={valid} onInvalidInput={handleInvalidInput} onChangeInput={handleChangeInput}></InputView>;
}

export default Input;
