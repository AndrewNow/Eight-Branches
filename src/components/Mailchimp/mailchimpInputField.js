import React from "react"
import styled from "styled-components"
import { ImArrowRight2 } from "react-icons/im"
import breakpoints from "../breakpoints"

const MailchimpInputField = props => {
  //Checks if all the fields are filled and if an @ sign is used in the email field
  const validateInput = values => {
    if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
      return true
    } else {
      return false
    }
  }
  if (props.type === "submit") {
    return (
      <SubmitLabel>
        <SubmitInput
          type="submit"
          value={" "}
          disabled={validateInput(props.formValues)}
        />
        {validateInput(props.formValues) ? (
          <ImArrowRight2 size={25} style={{ color: "#00000050" }} />
        ) : (
          <ImArrowRight2 size={25} style={{ color: "#00000090" }} />
        )}
      </SubmitLabel>
    )
  } else if (props.type === "textarea") {
    return (
      <Label>
        {props.label}
        <textarea
          onChange={e => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          rows={7}
          name={props.name}
        />
      </Label>
    )
  } else {
    return (
      <Label>
        {props.label}
        <EmailInput
          onChange={e => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          name={props.name}
        />
      </Label>
    )
  }
}

export default React.memo(MailchimpInputField)

const EmailInput = styled.input`
  width: 300px;
  border: none;
  background: none;
  background-color: none;
  font-family: "Matter-regular";
  font-size: 18px;
  box-sizing: border-box;
  color: #00000050;

  &:focus {
    border-radius: 3px;
    outline: none !important;
    color: #00000090;
  }
`

const SubmitLabel = styled.label`
  /* border: 1px solid grey; */
  & svg {
    position: absolute;
    color: #00000050;
    transform: translate(-2rem, 0rem);
    transition: var(--hover-transition);

    &:hover {
      color: var(--color-orange) !important;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    & svg {
      transform: translate(-3rem, -.25rem);
      /* position: relative; */
    }
  }
`

const SubmitInput = styled.input`
  color: none;
  font-family: "Matter-light";
  padding-left: 1rem;
  padding-bottom: 1rem;
  border: none;
  width: 50px;
  background: none;
  background-color: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
  @media (max-width: ${breakpoints.m}px) {
    /* padding-bottom: 0rem; */
  }
`

const Label = styled.label``
