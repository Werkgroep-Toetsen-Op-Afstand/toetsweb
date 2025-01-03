import {FunctionComponent} from 'react'

interface Props {
    name: string
    role: string
    email: string
    academy: string
}

const ColophonInfoContact: FunctionComponent<Props> = ({
                                                           name,
                                                           role,
                                                           email,
                                                           academy,
                                                       }) => {
    return (
        <div className={'colophon-info-contact'}>
            <p className={'colophon-info-contact__name'}>{name}</p>
            <p>{role}</p>
            <p>{academy}</p>
            <a href={`mailto:${email}`} className={'colophon-info-contact__email'}>
                {email}
            </a>
        </div>
    )
}

export default ColophonInfoContact
