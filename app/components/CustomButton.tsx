import { CustomButtonProps } from "@/types/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
