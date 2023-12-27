import React, {FunctionComponent, useState} from "react"
import ReactDOM from "react-dom";

interface Props {
    trigger: JSX.Element;
    children: any;
}

export const Portal: FunctionComponent<Props> = ({trigger, children}) => {

    const [show, setShow] = useState(false);

    const updatedTrigger = React.cloneElement(trigger, {
        onMouseEnter: () => setShow(true),
        onMouseLeave: () => setShow(false)
    });

    return (
        <>
            {updatedTrigger}
            {
                show && ReactDOM.createPortal(children, document.getElementById("modal-root") as HTMLElement)
            }
        </>
    )
}