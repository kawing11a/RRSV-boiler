import React from "react"

type ErrorHandler = (error: any, info: React.ErrorInfo) => void
type ErrorHandlingComponent<Props> = (props: Props, error?: any) => React.ReactNode

type ErrorState = { error?: any }

export default function Catch<Props extends {}>(
    component: ErrorHandlingComponent<Props>,
    errorHandler?: ErrorHandler
): React.ComponentType<Props> {
    function Inner(props: { error?: any, props: Props }) {
        return <React.Fragment>{component(props.props, props.error)}</React.Fragment>
    }

    return class extends React.Component<Props, ErrorState> {
        state: ErrorState = {
            error: false
        }

        static getDerivedStateFromError(error: any) {
            return { error }
        }

        componentDidCatch(error: Error, info: React.ErrorInfo) {
            if (errorHandler) {
                errorHandler(error, info)
            }
        }

        render() {
            return <Inner error={this.state.error} props={this.props} />
        }
    }
}
