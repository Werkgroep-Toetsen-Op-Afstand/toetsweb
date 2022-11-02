import React, {FunctionComponent} from "react";
import useLocalStorage from "../../utils/LocalStorage";

interface Props {
    entity: number;
    element: number;
    titleTextArea: string;
    hintTextArea: string;
}

const TextArea: FunctionComponent<Props> = ({entity, element, titleTextArea, hintTextArea}) => {

    const [value, setValue] = useLocalStorage(`${entity}.${element}.Feedback.${titleTextArea}`, '');

    return (
        <div className='text-area'>
            <div className='text-area__container'>
                <p>{titleTextArea}</p>
                <textarea
                    className='text-area__input'
                    placeholder={hintTextArea}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
}

export default TextArea;