import { CustomButton } from "./styled";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title : string;
  colorBackground: string
  success: boolean
}

export function Button({title, success, colorBackground, ...rest} : Props) {
  return(
    <CustomButton {...rest} colorBackground={colorBackground} success={success}>
        {title}
    </CustomButton>
  )
}
