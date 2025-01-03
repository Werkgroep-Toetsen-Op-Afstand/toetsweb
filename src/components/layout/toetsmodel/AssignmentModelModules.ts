import {ToetsmodelSideTextEN, ToetsmodelSideTextNL,} from './modules/AssignmentModelSideText'
import {ToetsmodelCenterTextEN, ToetsmodelCenterTextNL,} from './modules/AssignmentModelCenterText'
import {useTranslation} from "react-i18next";
import {Language} from "../../../models/Locale";

const AssignmentModelModules = () => {
	const {i18n} = useTranslation();

	switch (i18n.language) {
		case Language.EN:
			return {
				SideText: ToetsmodelSideTextEN,
				CenterText: ToetsmodelCenterTextEN,
			}
		case Language.NL:
		default:
			return {
				SideText: ToetsmodelSideTextNL,
				CenterText: ToetsmodelCenterTextNL,
			}
	}
}

export default AssignmentModelModules
