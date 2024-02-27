import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { HttpStatusCode } from "../enums/system";
import ErrorHelper from "../libs/error";
import logger from "../libs/logger";
import { closeSystemDialog } from "../slices/globalUISlice";
import { RootState } from "../states";
import Catch from "./Catch";

interface ErrorBoundaryProps {
    children: any;
}

const NewErrorBoundary = Catch((props: ErrorBoundaryProps, error?: Error) => {
    const navigateTo = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { globalUI } = useSelector((state: RootState) => state);
    const { children } = props;

    const [exception, setException] = useState(null);

    const errorHandler = (msg: string | Event, src: string, lineno: number, colno: number, error: any) => {
        switch (error.type) {
            case 'critical':
                setException(error.error);
                break;
        }
    };

    const mountEffect = () => {
        window.onerror = errorHandler;
    };

    useEffect(mountEffect, []);

    return (
        <>
            {/* <Modal isOpen={!!exception || !!error || globalUI.openTokenExpiredDialog} >
                <ModalHeader>
                    {ErrorHelper.getHeader(error || exception || globalUI.errorCode)}
                </ModalHeader>
                <ModalBody>
                    {ErrorHelper.toString(error || exception || globalUI.errorCode)}
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="button"
                        onClick={[HttpStatusCode.HTTPUnauth, HttpStatusCode.HTTPForbidden].includes(globalUI.errorCode) ? () => navigateTo('/unauthorized') : () => window.location.reload()}
                        label={[HttpStatusCode.HTTPUnauth, HttpStatusCode.HTTPForbidden].includes(globalUI.errorCode) ? "OK" : "Reload"}
                    />
                </ModalFooter>
            </Modal> */}
            {!exception && !error && !globalUI.openSystemDialog ? children : null}
        </>
    );

});

export default NewErrorBoundary;
