import ColophonInfoContact from './ColophonInfoContact'
import {useTranslation} from "react-i18next";

const Colophon = () => {
    const {t} = useTranslation();

    return (
        <footer className={'colophon'}>
            <div className={'colophon__more-info'}>
                <div>
                    <h3>{t('pages.home.colophon.title')}</h3>
                    <p>{t('pages.home.colophon.subTitle')}</p>
                </div>
                <div className={'colophon__more-info__contact'}>
                    <ColophonInfoContact
                        name={'Tamara van Schilt-Mol'}
                        role={t('pages.home.colophon.roles.lecturer')}
                        email={'tamara.vanschiltmol@han.nl'}
                        academy={t('pages.home.colophon.academy')}
                    />
                    <ColophonInfoContact
                        name={'Linda Jakobs'}
                        role={t('pages.home.colophon.roles.researcher')}
                        email={'linda.jakobs@han.nl'}
                        academy={t('pages.home.colophon.academy')}
                    />
                    <ColophonInfoContact
                        name={'Marjoleine Dobbelaer'}
                        role={t('pages.home.colophon.roles.researcher')}
                        email={'marjoleine.dobbelaer@han.nl'}
                        academy={t('pages.home.colophon.academy')}
                    />
                    <ColophonInfoContact
                        name={'Edwin Buijs'}
                        role={t('pages.home.colophon.roles.researcher')}
                        email={'edwin.buijs@han.nl'}
                        academy={t('pages.home.colophon.academy')}
                    />
                    <ColophonInfoContact
                        name={'Marion van de Wijdeven'}
                        role={t('pages.home.colophon.roles.educator')}
                        email={'marion.vandewijdeven@han.nl'}
                        academy={t('pages.home.colophon.academy')}
                    />
                </div>
            </div>
            <div className={'colophon__copyright'}>
                <p>© {t('title')}</p>
                <p>{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Colophon
