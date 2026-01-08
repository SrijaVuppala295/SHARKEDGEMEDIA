import { ComponentType, HTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

export interface StarBorderProps extends HTMLAttributes<HTMLElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: ComponentType<any> | string;
    color?: string;
    speed?: string;
    thickness?: number;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
}

declare const StarBorder: ComponentType<StarBorderProps>;

export default StarBorder;
