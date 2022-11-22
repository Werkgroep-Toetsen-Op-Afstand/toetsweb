import React, {FunctionComponent} from "react";

interface Props {
    baseClass: string;
    filledIn: boolean;
}

export const ProgressDot: FunctionComponent<Props> = ({baseClass, filledIn}) => {

    return (
        <span className={`progress-dot ${baseClass}__border ${filledIn ? `${baseClass}__bg` : ''}`}></span>
    );
}