import {useContext} from "react";
import {LanguageContext} from "../../../utils/contexts/LanguageContext";
import {ToetsmodelSideTextEN, ToetsmodelSideTextNL} from "./modules/AssignmentModelSideText";
import {ToetsmodelCenterTextEN, ToetsmodelCenterTextNL} from "./modules/AssignmentModelCenterText";

const AssignmentModelModules = () => {

    const {language} = useContext(LanguageContext);

    switch (language) {
        case "en":
            return {
                SideText: ToetsmodelSideTextEN,
                CenterText: ToetsmodelCenterTextEN,
            }
        case "nl":
        default:
            return {
                SideText: ToetsmodelSideTextNL,
                CenterText: ToetsmodelCenterTextNL,
            }
    }
}

export default AssignmentModelModules;
