import {FunctionComponent} from "react";
import Popup from "reactjs-popup";


interface Props {
    trigger: JSX.Element;
    children: JSX.Element;
}

const AssignmentModelPopup: FunctionComponent<Props> = ({trigger, children}) => {
    return (
        <Popup
            mouseLeaveDelay={100}
            mouseEnterDelay={0}
            arrow={false}
            position={["bottom center", "left center"]}
            offsetY={10}
            closeOnDocumentClick
            on="hover"
            contentStyle={{padding: '0px', border: 'none'}}
            keepTooltipInside=".toetsmodel-component"
            trigger={trigger}>
            {children}
        </Popup>
    );
}

export default AssignmentModelPopup;