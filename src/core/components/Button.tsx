import clsx from "clsx";
import React from 'react';
import styled from "styled-components";
import { HTMLAttributes, HTMLAttributesWithIs } from "../libs/common";
import LoadingSpinner from './LoadingSpinner';


interface IProps {
    loading?: boolean;
}

type ButtonHTMLAttributes = HTMLAttributes<'button'>;

type MixedHTMLAttributes = ButtonHTMLAttributes;

type ButtonHTMLAttributesWithIs = HTMLAttributesWithIs<'button'>;

export type TProps = IProps & (
    Omit<ButtonHTMLAttributesWithIs, 'type'>
);

const _Button: React.FunctionComponent<TProps> = (props) => {
    const {
        className,
        children,
        disabled,
        loading,
        as = 'button',
        ...otherProps
    } = props;
    const _props = {
        ...otherProps,
        className: clsx(className, "base-button"),
        disabled: disabled || loading
    };
    const _children = (
        loading ? (
            <LoadingSpinner />
        ) : (
            children
        )
    );
    return React.createElement(as, _props as MixedHTMLAttributes, _children);
};

const Button = styled(_Button)`
    display: flex;
    background-color: #5378a7;
    margin: 2.5px 0.5px;
    color: white;
    align-items: center;
    justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
    font: normal normal bold 14px/17px Helvetica Neue;



    &:hover {
        background-color: #4a6b94;
        cursor: pointer;
        transform: translateY(-0.5px);
        scale: 102%;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export default Button;
