import {FunctionComponent, ReactNode} from "react";
import {useTranslation} from "react-i18next";

interface Props {
    className?: string;
    children?: ReactNode;
    translationKey: string;
}

const TranslatedSection: FunctionComponent<Props> = ({className, children, translationKey}) => {
    const {t} = useTranslation();

    const rawText = t(`${translationKey}.text`, {returnObjects: true});
    const texts = Array.isArray(rawText)
        ? rawText as unknown as string[]
        : [rawText as unknown as string];

    const getClassNames = () => {
        const classNames = ['section'];
        if (className) classNames.push(className);
        return classNames.join(' ');
    }

    return (
        <section className={getClassNames()}>
            <h3>{t(`${translationKey}.title`)}</h3>
            <div className={"section--content"}>
                {
                    texts.map((text, index) =>
                        <p key={index}>{text}</p>
                    )
                }
            </div>
            {children}
        </section>
    )
}

export default TranslatedSection;
