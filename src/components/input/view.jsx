import {useState} from "react";
import {StyledInput} from "./styles";
function InputView({label, reference, required, type}) {
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

  return (
    <StyledInput>
      <label className="label">{label}</label>
      <input type={type} className="input" ref={reference} required={required} onInvalid={handleInvalidInput} onChange={handleChangeInput} />
      {valid || <span>this field is mandatory</span>}
    </StyledInput>
  );
}

export default InputView;
