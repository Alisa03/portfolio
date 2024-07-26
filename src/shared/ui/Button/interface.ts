import {
  Attributes,
  CSSProperties,
  ComponentPropsWithRef,
  ComponentType,
} from "react";

export type BaseButtonComponent =
  | keyof JSX.IntrinsicElements
  | ComponentType<any>;

type BaseProps<C extends BaseButtonComponent = "button"> = {
  component?: C;
  className?: string;
  style?: CSSProperties;
} & Attributes;

export type BaseButtonProps<C extends BaseButtonComponent = "button"> =
  C extends keyof JSX.IntrinsicElements
    ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
    : C extends ComponentType<infer P>
    ? P extends ComponentPropsWithRef<any>
      ? Omit<P, keyof BaseProps<C>> & BaseProps<C>
      : never
    : never;

export type IButton<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
    isActive?: boolean;
    isLoading?: boolean;
    className?: string | "";
    radius?: number;
    boxSize?: number;
    variant?: "containe_light" | "containe_dark" | "outline" | "gray";
  };