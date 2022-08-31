import ButtonStyled from "./ButtonStyled";

interface ButtonProprs {
  buttonText: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  className: string;
  isDisabled?: boolean;
}

const Button = ({
  buttonText,
  type,
  actionOnClick,
  className,
  isDisabled,
}: ButtonProprs) => {
  return (
    <ButtonStyled>
      <button
        className={className}
        onClick={actionOnClick}
        type={type}
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </ButtonStyled>
  );
};

export default Button;
