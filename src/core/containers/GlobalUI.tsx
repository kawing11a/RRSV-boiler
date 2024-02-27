import React from "react";

interface GlobalUIProps {
    children: any;
}

const GlobalUI = (props: GlobalUIProps) => {
    const { children } = props;
    // TODO: render Dialog?
    // TODO: render NavBar?
    // TODO: render Sidebar?

    const renderChildren = () => {
        if (children) {
            return children;
        }
    };

    return (
        <>
            <div className="container">
                <div className="content">
                    {renderChildren()}
                </div>
            </div>
        </>
    );
};

export default GlobalUI;
