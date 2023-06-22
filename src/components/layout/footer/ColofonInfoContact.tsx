import {FunctionComponent} from "react";

interface Props {
    name: string;
    role: string;
    email: string;
    academy: string;
}

const ColofonInfoContact: FunctionComponent<Props> = ({name, role, email, academy}) => {
    return (
        <div className={"colofon-info-contact"}>
            <p className={"colofon-info-contact__name"}>{name}</p>
            <p>{role}</p>
            <p>{academy}</p>
            <a href={`mailto:${email}`} className={"colofon-info-contact__email"}>{email}</a>
        </div>
    );
}

export default ColofonInfoContact;
