import React, { FunctionComponent, InputHTMLAttributes, useState } from 'react';
import { CustomInputContainer, IconWrapper, Label } from './styled';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  hasSuccess?: boolean;
  colorInputSuccess: string;
  colorInputDefault: string;
  label?: string;
}

export const InputMask: FunctionComponent<Props> = React.forwardRef(
  ({ hasError, label = false, hasSuccess, colorInputSuccess, colorInputDefault, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

    return (
      <>
        {label && <Label>{label}</Label>}
        <CustomInputContainer hasError={hasError} hasSuccess={hasSuccess} colorInputSuccess={colorInputSuccess} >
        <input type={showPassword ? 'text' : 'password'} {...rest} ref={ref as any} />
        {(hasError || hasSuccess) && (
          <IconWrapper onClick={handleTogglePassword}>
            {showPassword ? <HiEyeOff size={18}/> : <HiEye size={18}/>}
          </IconWrapper>
        )}
      </CustomInputContainer>
      </>
    );
  }
);

InputMask.displayName = 'InputMask';
