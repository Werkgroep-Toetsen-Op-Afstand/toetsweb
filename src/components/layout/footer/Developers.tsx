import {useContext} from "react";
import {LanguageContext} from "../../../utils/contexts/LanguageContext";

const Developers = () => {
    const {getTranslation} = useContext(LanguageContext);
    return (
        <div className={"developers"}>
            <h3 className={"developers__title"}>{getTranslation("developers.title")}</h3>
            <p>
                {getTranslation("developers.text")}
            </p>
        </div>
    );
}

export default Developers;
