import { TFunction } from "react-i18next";
export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
  onclick?: () => void;
}

export interface DecorationProps {
  src?: string;
  width?: string;
  height: string;
  top?:string;
  bottom?:string;
  left?:string;
  right?:string;
  rotate?:string;
  zindex?:string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
export interface validateProps {
  name: string;
  phone: string;
  message: string;
}
