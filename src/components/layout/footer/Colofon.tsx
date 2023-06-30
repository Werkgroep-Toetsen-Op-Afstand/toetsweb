import ColofonInfoContact from "./ColofonInfoContact";
import {useContext} from "react";
import {LanguageContext} from "../../../utils/contexts/LanguageContext";

const Colofon = () => {

    const {getTranslation} = useContext(LanguageContext);
    return (
        <footer className={"colofon"}>
            <div className={"colofon__more-info"}>
                <div>
                    <h3>{getTranslation("colofon.title")}</h3>
                    <p>{getTranslation("colofon.subtitle")}</p>
                </div>
                <div className={"colofon__more-info__contact"}>
                    <ColofonInfoContact
                        name={"Tamara van Schilt-Mol"}
                        role={getTranslation("colofon.tamara.role")}
                        email={"tamara.vanschiltmol@han.nl"}
                        academy={getTranslation("colofon.tamara.academy")}
                    />
                    <ColofonInfoContact
                        name={"Linda Jakobs"}
                        role={getTranslation("colofon.linda.role")}
                        email={"linda.jakobs@han.nl"}
                        academy={getTranslation("colofon.linda.academy")}
                    />
                    <ColofonInfoContact
                        name={"Marjoleine Dobbelaer"}
                        role={getTranslation("colofon.marjoleine.role")}
                        email={"marjoleine.dobbelaer@han.nl"}
                        academy={getTranslation("colofon.marjoleine.academy")}
                    />
                    <ColofonInfoContact
                        name={"Edwin Buijs"}
                        role={getTranslation("colofon.edwin.role")}
                        email={"edwin.buijs@han.nl"}
                        academy={getTranslation("colofon.edwin.academy")}
                    />
                    <ColofonInfoContact
                        name={"Marion van de Wijdeven"}
                        role={getTranslation("colofon.marion.role")}
                        email={"marion.vandewijdeven@han.nl"}
                        academy={getTranslation("colofon.marion.academy")}
                    />
                </div>
            </div>
            <div className={"colofon__copyright"}>
                <p>© {getTranslation("nav.title")}</p>
                <p>2023</p>
            </div>
        </footer>
    );
};

export default Colofon;
