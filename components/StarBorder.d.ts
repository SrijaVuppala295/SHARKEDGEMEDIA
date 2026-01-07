import { ComponentType, HTMLAttributes, ReactNode } from 'react';

export interface StarBorderProps extends HTMLAttributes<HTMLElement> {
    as?: ComponentType<any> | string;
    color?: string;
    speed?: string;
    thickness?: number;
    className?: string;
    children?: ReactNode;
}

declare const StarBorder: ComponentType<StarBorderProps>;

export default StarBorder;
