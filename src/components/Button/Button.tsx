import ButtonStyled from "./ButtonStyled";

interface ButtonProprs {
  buttonText: string;
  type: "submit" | "button";
  action?: () => void;
  className: string;
}

const Button = ({ buttonText, type, action, className }: ButtonProprs) => {
  return (
    <ButtonStyled>
      <button className={className} onClick={action} type={type}>
        {buttonText}
      </button>
    </ButtonStyled>
  );
};

export default Button;
