import {StyledInput} from "./styles";

function InputView({label, reference, required, type, valid, onInvalidInput, onChangeInput}) {
  return (
    <StyledInput>
      <label className="label">{label}</label>
      <input type={type} className="input" ref={reference} required={required} onInvalid={onInvalidInput} onChange={onChangeInput} />
      {valid || <span>{type === "email" ? "please enter a valid email" : "this field is mandatory"}</span>}
    </StyledInput>
  );
}

export default InputView;
