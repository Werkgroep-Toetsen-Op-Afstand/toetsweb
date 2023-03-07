import HAN from "../../../assets/images/Logo_HAN.svg";
import B302 from "../../../assets/images/Logo_B302.svg";

const Developers = () => {
    return (
        <div className={"developers"}>
            <div className={"developers__text"}>
                <h3>Ontwikkelaars</h3>
                <p>
                    Het Toetsweb is ontwikkeld door het Lectoraat Eigentijds Beoordelen en Beslissen. Het lectoraat
                    is
                    onderdeel van het Onderzoeksteam Kwaliteiten van Leraren van de Academie Educatie van de HAN
                    University of Applied Sciences. Deze Toetsweb-Scan is tot stand gekomen in samenwerking met B302
                    en
                    met behulp van subsidie uit het Versnellingsplan Onderwijsinnovatie met ICT.
                </p>
            </div>
            <div className={"developers__logos"}>
                <img src={HAN} alt={"Logo HAN"} width={200}/>
                <img src={B302} alt={"Logo B302"} width={150}/>
            </div>
        </div>
    );
}

export default Developers;
