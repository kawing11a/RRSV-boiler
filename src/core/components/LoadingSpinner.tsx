import clsx from "clsx";
import React, { HTMLAttributes } from 'react';
import styled from "styled-components";

interface IProps { }

type TProps = IProps & HTMLAttributes<'i'>;

const _LoadingSpinner: React.FunctionComponent<TProps> = (props) => {
  const { className } = props;
  return (
    <i
      className={clsx(className, "LoadingSpinner")}
      aria-hidden={true}
    />
  );
};

const LoadingSpinner = styled(_LoadingSpinner)`
    display: inline-block;
    content: '';
    border-top: 2px solid #aaaaaa;
    border-bottom: 2px solid #aaaaaa;
    border-radius: 9999px;
    animation: spin 1s linear infinite;
    height: 1em;
    width: 1em;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`;

export default LoadingSpinner;
