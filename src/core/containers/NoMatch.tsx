import React from "react";
import { history } from "../../configureStore";
import styled from "styled-components";

const _NoMatch = () => {
    return (
        <div className="container">
            <h1>404</h1>

            <h6>
                <span>Oops!</span> Page not found
            </h6>

            <p>
                The page you’re looking for doesn’t exist.
            </p>

            <a
                href="#"
                onClick={() => history.push("/dashboard")}
            >
                Go to Dashboard
            </a>
        </div>
    );
};

const NoMatch = styled(_NoMatch)`
    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;

export default NoMatch;
