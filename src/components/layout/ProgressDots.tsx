import React from "react";

interface Props {
    baseClass: string;
    currentStep: number;
    totalSteps: number;
}

const ProgressDots: React.FunctionComponent<Props> = ({ baseClass, currentStep, totalSteps }) => {
    return (
        <div className="progress-dots">
            {[...Array(totalSteps)].map((_, i) => (
                <span
                    key={i}
                    className={`progress-dots__dot ${baseClass}__border ${
                        i < currentStep ? `${baseClass}__bg` : ""
                    }`}
                ></span>
            ))}
        </div>
    )
}

export default ProgressDots;