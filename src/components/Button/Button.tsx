import { ButtonStyled } from "./ButtonStyled";

interface ButtonProprs {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProprs) => {
  return (
    <>
      <ButtonStyled>{buttonText}</ButtonStyled>
    </>
  );
};

export default Button;
