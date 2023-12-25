import React from "react";

interface Props {
    color: string;
    currentStep: number;
    totalSteps: number;
}

const ProgressDots: React.FunctionComponent<Props> = ({color, currentStep, totalSteps}) => {

    const backgroundColor = (i: number) => {
        if (i < currentStep) {
            return color;
        }
        return "#FFFFFF";
    }

    return (
        <div className="progress-dots">
            {[...Array(totalSteps)].map((_, i) => (
                <span key={i} className={"progress-dots__dot"}
                      style={{backgroundColor: backgroundColor(i), borderColor: color}}/>
            ))}
        </div>
    )
}

export default ProgressDots;