import ColofonInfoContact from "./ColofonInfoContact";

const Colofon = () => {
    return (
        <footer className={"colofon"}>
            <div className={"colofon__more-info"}>
                <div>
                    <h3>Meer informatie?</h3>
                    <p>Neem dan contact met ons op!</p>
                </div>
                <div className={"colofon__more-info__contact"}>
                    <ColofonInfoContact
                        name={"Tamara van Schilt-Mol"}
                        role={"Lector"}
                        email={"tamara.vanschiltmol@han.nl"}
                    />
                    <ColofonInfoContact
                        name={"Linda Jakobs"}
                        role={"Onderzoeker"}
                        email={"linda.jakobs@han.nl"}
                    />
                    <ColofonInfoContact
                        name={"Marjoleine Dobbelaer"}
                        role={"Onderzoeker"}
                        email={"marjoleine.dobbelaer@han.nl"}
                    />
                    <ColofonInfoContact
                        name={"Edwin Buijs"}
                        role={"Onderzoeker"}
                        email={"edwin.buijs@han.nl"}
                    />
                    <ColofonInfoContact
                        name={"Marion van de Wijdeven"}
                        role={"Opleider/Trainer/Adviseur"}
                        email={"marion.vandewijdeven@han.nl"}
                    />
                </div>
            </div>
            <div className={"colofon__copyright"}>
                <p>© Toetsweb</p>
                <p>2023</p>
            </div>
        </footer>
    );
};

export default Colofon;
