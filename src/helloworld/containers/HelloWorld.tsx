import { useState } from "react";
import Button from "../../core/components/Button";

const HelloWorld = () => {
    const [enableBtn, enableBtnSetter] = useState(false);
    const [loadingBtn, loadingBtnSetter] = useState(false);

    return (
        <>
            Hello World!!
            <input
                type="checkbox"
                onChange={(e) => enableBtnSetter(e.target.checked)}
                checked={enableBtn}
            />
            <input
                type="checkbox"
                onChange={(e) => loadingBtnSetter(e.target.checked)}
                checked={loadingBtn}
            />
            <Button
                disabled={!enableBtn}
                onClick={() => { }}
                loading={loadingBtn}
            >
                Click me!
            </Button>
        </>
    );
};

export default HelloWorld;
