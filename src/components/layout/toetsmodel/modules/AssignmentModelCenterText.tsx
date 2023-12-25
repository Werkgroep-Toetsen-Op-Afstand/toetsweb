import Popup from "reactjs-popup";
import {useState} from "react";
import XMARK from "../../../../assets/icons/xmark.svg";
import AssignmentModelPopup from "./AssignmentModelPopup";

export const ToetsmodelCenterTextEN = () => {

    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <g id="center-texts">
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className='toetsmodel-component__center'>
                    <img src={XMARK} onClick={closeModal} alt="Close button"/>
                    <div>
                        <h4>Vision on Education</h4>
                        <p>
                            How assessments are designed is a means of realising the vision of education rather than an
                            end in
                            itself (Baartman et al., 2020). The vision on assessment, which is part of the vision on
                            education,
                            forms the foundation for guaranteeing the quality of assessment and will ensure that
                            assessment
                            becomes part of the educational concept. In this way, this vision strengthens the
                            realisation of
                            educational objectives (VO-Raad, 2019).
                            This assumes, of course, that having a visoin of education is a condition for being able to
                            design
                            assessments in a meaningful way. The vision is formed by at least (Van Schilt-Mol, 2021);
                        </p>
                        <br/>
                        <ul>
                            <li><p>the legitimacy of the degree course</p></li>
                            <li><p>a vision of the goal of the degree course/the profession being trained for</p></li>
                            <li><p>a vision of the mission of education</p></li>
                            <li><p>a vision of learning and a vision of assessment</p></li>
                        </ul>
                    </div>
                </div>
            </Popup>

            <AssignmentModelPopup
                trigger={
                    <g id="educationvision-bg">
                        <ellipse fill="white" cx="298.2" cy="297.6" rx="83.9" ry="83.9"/>
                        <g id="educationvision">
                            <path d="M255.5,279.4h3.5l1.7,6.7c0.4,1.6,0.7,3,1.2,4.6h0.1c0.4-1.6,0.7-3.1,1.2-4.6l1.7-6.7h3.3l-4.4,14.5h-3.9L255.5,279.4z
						"/>
                            <path d="M269.2,279.6c0-1,0.8-1.7,1.9-1.7c1.1,0,1.9,0.7,1.9,1.7c0,1-0.8,1.7-1.9,1.7C270,281.3,269.2,280.6,269.2,279.6z
						 M269.4,282.9h3.3v11h-3.3V282.9z"/>
                            <path d="M274.6,292.6l1.5-2c1,0.8,1.9,1.2,2.8,1.2c1,0,1.4-0.4,1.4-0.9c0-0.7-1.1-1.1-2.2-1.5c-1.3-0.5-2.9-1.4-2.9-3.2
						c0-2,1.7-3.4,4.2-3.4c1.7,0,2.9,0.7,3.9,1.4l-1.5,2c-0.8-0.6-1.6-0.9-2.3-0.9c-0.8,0-1.3,0.3-1.3,0.9c0,0.7,1,1,2.2,1.4
						c1.4,0.5,3,1.3,3,3.3c0,2-1.6,3.5-4.5,3.5C277.4,294.2,275.7,293.5,274.6,292.6z"/>
                            <path d="M285.1,279.6c0-1,0.8-1.7,1.9-1.7c1.1,0,1.9,0.7,1.9,1.7c0,1-0.8,1.7-1.9,1.7C285.9,281.3,285.1,280.6,285.1,279.6z
						 M285.4,282.9h3.3v11h-3.3V282.9z"/>
                            <path d="M290.9,288.4c0-3.7,2.6-5.8,5.4-5.8s5.4,2.1,5.4,5.8c0,3.7-2.6,5.8-5.4,5.8S290.9,292.1,290.9,288.4z M298.3,288.4
						c0-1.9-0.7-3.1-2-3.1c-1.3,0-2,1.2-2,3.1c0,1.9,0.7,3.1,2,3.1C297.6,291.5,298.3,290.3,298.3,288.4z"/>
                            <path d="M303.8,282.9h2.7l0.2,1.4h0.1c0.9-0.9,2-1.7,3.5-1.7c2.4,0,3.4,1.7,3.4,4.4v6.8h-3.3v-6.4c0-1.6-0.4-2.1-1.4-2.1
						c-0.8,0-1.3,0.4-2,1.1v7.4h-3.3V282.9z"/>
                            <path d="M320.3,288.4c0-3.7,2.6-5.8,5.4-5.8s5.4,2.1,5.4,5.8c0,3.7-2.6,5.8-5.4,5.8S320.3,292.1,320.3,288.4z M327.7,288.4
						c0-1.9-0.7-3.1-2-3.1c-1.3,0-2,1.2-2,3.1c0,1.9,0.7,3.1,2,3.1C327,291.5,327.7,290.3,327.7,288.4z"/>
                            <path d="M333.3,282.9h2.7l0.2,1.4h0.1c0.9-0.9,2-1.7,3.5-1.7c2.4,0,3.4,1.7,3.4,4.4v6.8h-3.3v-6.4c0-1.6-0.4-2.1-1.4-2.1
						c-0.8,0-1.3,0.4-2,1.1v7.4h-3.3V282.9z"/>
                            <path d="M252.2,306.1h9.1v2.7h-5.8v2.9h4.9v2.7h-4.9v3.3h6v2.7h-9.3V306.1z"/>
                            <path d="M263.6,315c0-3.6,2.2-5.8,4.6-5.8c1.2,0,2,0.5,2.7,1.1l-0.1-1.7V305h3.3v15.5h-2.7l-0.2-1.1H271
						c-0.8,0.8-1.9,1.4-2.9,1.4C265.3,320.8,263.6,318.6,263.6,315z M270.7,317.1v-4.5c-0.6-0.5-1.2-0.7-1.8-0.7c-1.1,0-2,1-2,3.1
						c0,2.2,0.7,3.1,2,3.1C269.6,318.1,270.2,317.9,270.7,317.1z"/>
                            <path d="M276.7,316.3v-6.8h3.3v6.4c0,1.6,0.4,2.1,1.4,2.1c0.8,0,1.3-0.3,2-1.2v-7.3h3.3v11h-2.7l-0.2-1.5h-0.1
						c-0.9,1.1-2,1.8-3.5,1.8C277.7,320.8,276.7,319.1,276.7,316.3z"/>
                            <path d="M288.8,315c0-3.7,2.7-5.8,5.7-5.8c1.4,0,2.4,0.5,3.2,1.2l-1.5,2.1c-0.5-0.4-1-0.6-1.5-0.6c-1.6,0-2.6,1.2-2.6,3.1
						c0,1.9,1,3.1,2.5,3.1c0.7,0,1.4-0.4,2-0.8l1.3,2.1c-1.1,0.9-2.4,1.3-3.6,1.3C291.2,320.8,288.8,318.7,288.8,315z"/>
                            <path d="M299.3,317.5c0-2.3,1.8-3.6,6.2-4c-0.1-1-0.5-1.6-1.7-1.6c-0.9,0-1.8,0.4-2.9,1l-1.2-2.1c1.4-0.9,3-1.4,4.7-1.4
						c2.8,0,4.4,1.6,4.4,5v6.3h-2.7l-0.2-1.1h-0.1c-0.9,0.8-2,1.4-3.2,1.4C300.6,320.8,299.3,319.3,299.3,317.5z M305.5,317.3v-1.9
						c-2.3,0.3-3.1,1-3.1,1.8c0,0.7,0.5,1.1,1.3,1.1C304.4,318.3,304.9,317.9,305.5,317.3z"/>
                            <path d="M311.9,316.5v-4.4h-1.5v-2.4l1.7-0.1l0.4-2.9h2.7v2.9h2.6v2.6h-2.6v4.4c0,1.2,0.6,1.7,1.4,1.7c0.4,0,0.8-0.1,1-0.2
						l0.5,2.4c-0.6,0.2-1.4,0.4-2.4,0.4C313,320.8,311.9,319.1,311.9,316.5z"/>
                            <path d="M319.7,306.2c0-1,0.8-1.7,1.9-1.7c1.1,0,1.9,0.7,1.9,1.7c0,1-0.8,1.7-1.9,1.7C320.5,307.9,319.7,307.2,319.7,306.2z
						 M320,309.5h3.3v11H320V309.5z"/>
                            <path d="M325.5,315c0-3.7,2.6-5.8,5.4-5.8s5.4,2.1,5.4,5.8c0,3.7-2.6,5.8-5.4,5.8S325.5,318.7,325.5,315z M332.8,315
						c0-1.9-0.7-3.1-2-3.1c-1.3,0-2,1.2-2,3.1c0,1.9,0.7,3.1,2,3.1C332.2,318.2,332.8,316.9,332.8,315z"/>
                            <path d="M338.4,309.5h2.7l0.2,1.4h0.1c0.9-0.9,2-1.7,3.5-1.7c2.4,0,3.4,1.7,3.4,4.4v6.8h-3.3v-6.4c0-1.6-0.4-2.1-1.4-2.1
						c-0.8,0-1.3,0.4-2,1.1v7.4h-3.3V309.5z"/>
                        </g>
                    </g>
                }>
                <div className='toetsmodel-component__hover'>
                    <h4>Vision on Education</h4>
                    <p>
                        How assessments are designed is a means of realising the vision of education rather than an end
                        in itself (Baartman et al., 2020). The vision on assessment, which is part of the vision on
                        education, forms the foundation for...
                    </p>
                    <p className='toetsmodel-component__center--read-more' onClick={openModal}>Read more...</p>
                </div>
            </AssignmentModelPopup>
        </g>
    )
}

export const ToetsmodelCenterTextNL = () => {

    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <g id="center-texts">
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className='toetsmodel-component__center'>
                    <img src={XMARK} onClick={closeModal} alt="Close button"/>
                    <div>
                        <h4>Visie op onderwijs</h4>
                        <p>
                            De manier waarop de toetsing wordt ingericht is een middel om de visie op onderwijs te
                            realiseren, in plaats van een doel op zich (Baartman, Van Schilt-Mol & Van der Vleuten,
                            2020). De visie op toetsing, die onderdeel uitmaakt van de visie op onderwijs, vormt het
                            fundament voor het borgen van de kwaliteit van de toetsing en zal er voor zorgen dat
                            toetsing onderdeel wordt van het onderwijsconcept. Daarmee werkt deze visie versterkend
                            op het realiseren van de onderwijsdoelen (VO-Raad, 2019). Dit veronderstelt uiteraard
                            dat het hebben van een visie op onderwijs voorwaardelijk is om op een zinvolle wijze
                            invulling te kunnen geven aan toetsing.
                            De kern van het toetsweb, visie op onderwijs, geeft antwoord op de vraag wat de
                            opleiding verstaat onder goed onderwijs. De visie wordt gevormd wordt door ten minste;
                        </p>
                        <br/>
                        <ul>
                            <li><p>de legitimering van het onderwijs/de opleiding</p></li>
                            <li><p>een visie op het doel van het onderwijs/het beroep waartoe wordt opgeleid</p>
                            </li>
                            <li><p>een visie op de opdracht* van het onderwijs</p></li>
                            <li><p>een visie op leren en een visie op toetsen (Van Schilt-Mol, 2021)</p></li>
                        </ul>
                        <br/>
                        <p>
                            * Voor de opdracht van het onderwijs geldt dat, passend bij de uitgangspunten van
                            eigentijds toetsen en beoordelen, de vormende (socialisatie en persoonsvorming) en de
                            kwalificerende functie in onderling evenwicht de aandacht moeten krijgen (Hoogland,
                            2017).
                        </p>
                    </div>
                </div>
            </Popup>

            <AssignmentModelPopup
                trigger={
                    <g id="educationvision-bg">
                        <ellipse fill="white" cx="298.2" cy="297.6" rx="83.9" ry="83.9"/>
                        <g id="educationvision">
                            <path d="M262.3,279.4h3.5l1.7,6.7c0.4,1.6,0.7,3,1.2,4.6h0.1c0.4-1.6,0.7-3.1,1.2-4.6l1.7-6.7h3.3l-4.4,14.5h-3.9L262.3,279.4z
						"/>
                            <path d="M275.9,279.6c0-1,0.8-1.7,1.9-1.7c1.1,0,1.9,0.7,1.9,1.7c0,1-0.8,1.7-1.9,1.7C276.7,281.3,275.9,280.6,275.9,279.6z
						 M276.2,282.9h3.3v11h-3.3V282.9z"/>
                            <path d="M281.3,292.6l1.5-2c1,0.8,1.9,1.2,2.8,1.2c1,0,1.4-0.4,1.4-0.9c0-0.7-1.1-1.1-2.2-1.5c-1.3-0.5-2.9-1.4-2.9-3.2
						c0-2,1.7-3.4,4.2-3.4c1.7,0,2.9,0.7,3.9,1.4l-1.5,2c-0.8-0.6-1.6-0.9-2.3-0.9c-0.8,0-1.3,0.3-1.3,0.9c0,0.7,1,1,2.2,1.4
						c1.4,0.5,3,1.3,3,3.3c0,2-1.6,3.5-4.5,3.5C284.1,294.2,282.5,293.5,281.3,292.6z"/>
                            <path d="M291.9,279.6c0-1,0.8-1.7,1.9-1.7c1.1,0,1.9,0.7,1.9,1.7c0,1-0.8,1.7-1.9,1.7C292.7,281.3,291.9,280.6,291.9,279.6z
						 M292.1,282.9h3.3v11h-3.3V282.9z"/>
                            <path d="M297.6,288.4c0-3.6,2.5-5.8,5.2-5.8c3.1,0,4.7,2.3,4.7,5.3c0,0.6-0.1,1.2-0.1,1.4h-6.6c0.3,1.6,1.4,2.3,2.9,2.3
						c0.8,0,1.6-0.3,2.4-0.7l1.1,2c-1.1,0.8-2.6,1.2-3.9,1.2C300.1,294.2,297.6,292,297.6,288.4z M304.7,287.2
						c0-1.2-0.5-2.1-1.8-2.1c-1,0-1.9,0.7-2.1,2.1H304.7z"/>
                            <path d="M313.6,288.4c0-3.7,2.6-5.8,5.4-5.8s5.4,2.1,5.4,5.8c0,3.7-2.6,5.8-5.4,5.8S313.6,292.1,313.6,288.4z M320.9,288.4
						c0-1.9-0.7-3.1-2-3.1c-1.3,0-2,1.2-2,3.1c0,1.9,0.7,3.1,2,3.1C320.3,291.5,320.9,290.3,320.9,288.4z"/>
                            <path d="M326.5,282.9h2.7l0.2,1.1h0.1c0.9-0.8,2-1.3,3.1-1.3c2.7,0,4.3,2.2,4.3,5.6c0,3.8-2.2,5.9-4.6,5.9
						c-0.9,0-1.8-0.4-2.6-1.1l0.1,1.7v3.2h-3.3V282.9z M333.6,288.3c0-2-0.6-3-1.9-3c-0.7,0-1.2,0.3-1.9,1v4.5
						c0.6,0.5,1.2,0.7,1.8,0.7C332.7,291.5,333.6,290.5,333.6,288.3z"/>
                            <path d="M251,313.2c0-4.7,2.7-7.4,6.6-7.4c3.9,0,6.6,2.7,6.6,7.4c0,4.7-2.7,7.6-6.6,7.6C253.7,320.8,251,318,251,313.2z
						 M260.8,313.2c0-2.9-1.2-4.6-3.2-4.6s-3.2,1.7-3.2,4.6s1.2,4.7,3.2,4.7S260.8,316.1,260.8,313.2z"/>
                            <path d="M266.6,309.5h2.7l0.2,1.4h0.1c0.9-0.9,2-1.7,3.5-1.7c2.4,0,3.4,1.7,3.4,4.4v6.8h-3.3v-6.4c0-1.6-0.4-2.1-1.4-2.1
						c-0.8,0-1.3,0.4-2,1.1v7.4h-3.3V309.5z"/>
                            <path d="M278.7,315c0-3.6,2.2-5.8,4.6-5.8c1.2,0,2,0.5,2.7,1.1l-0.1-1.7V305h3.3v15.5h-2.7l-0.2-1.1h-0.1
						c-0.8,0.8-1.9,1.4-2.9,1.4C280.5,320.8,278.7,318.6,278.7,315z M285.9,317.1v-4.5c-0.6-0.5-1.2-0.7-1.8-0.7c-1.1,0-2,1-2,3.1
						c0,2.2,0.7,3.1,2,3.1C284.8,318.1,285.3,317.9,285.9,317.1z"/>
                            <path d="M291.4,315c0-3.6,2.5-5.8,5.2-5.8c3.1,0,4.7,2.3,4.7,5.3c0,0.6-0.1,1.2-0.1,1.4h-6.6c0.3,1.6,1.4,2.3,2.9,2.3
						c0.8,0,1.6-0.3,2.4-0.7l1.1,2c-1.1,0.8-2.6,1.2-3.9,1.2C293.8,320.8,291.4,318.7,291.4,315z M298.4,313.8
						c0-1.2-0.5-2.1-1.8-2.1c-1,0-1.9,0.7-2.1,2.1H298.4z"/>
                            <path d="M303.5,309.5h2.7l0.2,1.9h0.1c0.8-1.5,2-2.2,3.1-2.2c0.6,0,1,0.1,1.3,0.2l-0.5,2.8c-0.4-0.1-0.7-0.2-1.2-0.2
						c-0.8,0-1.8,0.5-2.4,2v6.4h-3.3V309.5z"/>
                            <path d="M311.4,309.5h3.2l1.1,5.1c0.2,1.1,0.3,2.2,0.5,3.3h0.1c0.2-1.1,0.4-2.2,0.7-3.3l1.2-5.1h2.8l1.2,5.1
						c0.3,1.1,0.5,2.2,0.7,3.3h0.1c0.2-1.1,0.3-2.2,0.5-3.3l1-5.1h3l-2.6,11h-3.8l-1-4.4c-0.2-1-0.4-2-0.6-3.2h-0.1
						c-0.2,1.2-0.3,2.2-0.6,3.2l-1,4.4h-3.7L311.4,309.5z"/>
                            <path d="M329.3,306.2c0-1,0.8-1.7,1.9-1.7c1.1,0,1.9,0.7,1.9,1.7c0,1-0.8,1.7-1.9,1.7C330.1,307.9,329.3,307.2,329.3,306.2z
						 M329.5,309.5h3.3v11h-3.3V309.5z"/>
                            <path d="M333.1,324.6l0.6-2.4c0.3,0.1,0.6,0.1,0.9,0.1c0.9,0,1.2-0.5,1.2-1.8v-11h3.3v10.9c0,2.4-0.9,4.4-3.9,4.4
						C334.1,324.9,333.5,324.7,333.1,324.6z M335.4,306.2c0-1,0.8-1.7,1.9-1.7s1.9,0.7,1.9,1.7c0,1-0.8,1.7-1.9,1.7
						S335.4,307.2,335.4,306.2z"/>
                            <path d="M340.8,319.3l1.5-2c1,0.8,1.9,1.2,2.8,1.2c1,0,1.4-0.4,1.4-0.9c0-0.7-1.1-1.1-2.2-1.5c-1.3-0.5-2.9-1.4-2.9-3.2
						c0-2,1.7-3.4,4.2-3.4c1.7,0,2.9,0.7,3.9,1.4l-1.5,2c-0.8-0.6-1.6-0.9-2.3-0.9c-0.8,0-1.3,0.3-1.3,0.9c0,0.7,1,1,2.2,1.4
						c1.4,0.5,3,1.3,3,3.3c0,2-1.6,3.6-4.5,3.6C343.6,320.8,342,320.2,340.8,319.3z"/>
                        </g>
                    </g>
                }>
                <div className='toetsmodel-component__hover'>
                    <h4>Visie op onderwijs</h4>
                    <p>
                        De manier waarop de toetsing wordt ingericht is een middel om de visie op onderwijs te
                        realiseren, in plaats van een doel op zich (Baartman, Van Schilt-Mol & Van der Vleuten,
                        2020). De visie op toetsing, die onderdeel uitmaakt van de visie op onderwijs, vormt het
                        fundament voor het...
                    </p>
                    <p className='toetsmodel-component__center--read-more' onClick={openModal}>Lees meer...</p>
                </div>
            </AssignmentModelPopup>
        </g>
    )
}