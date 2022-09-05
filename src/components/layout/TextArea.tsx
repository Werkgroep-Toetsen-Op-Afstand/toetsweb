import React, {FunctionComponent} from "react";

interface Props {
    titleTextArea: string;
    hintTextArea: string;
}

const TextArea: FunctionComponent<Props> = ({titleTextArea, hintTextArea}) => {

    const [value, setValue] = React.useState('');

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