import React, {FunctionComponent} from "react";

interface Props {
    value: string;
    setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    titleTextArea: string;
    hintTextArea: string;
}

const TextArea: FunctionComponent<Props> = ({value, setValue, name, titleTextArea, hintTextArea}) => {

    return (
        <div className='text-area'>
            <div className='text-area__container'>
                <p>{titleTextArea}</p>
                <textarea
                    className='text-area__input'
                    placeholder={hintTextArea}
                    name={name}
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    );
}

export default TextArea;