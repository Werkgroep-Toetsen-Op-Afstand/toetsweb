import { useState } from 'react';
import XMARK from "../../assets/icons/xmark.svg"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function ToetsmodelComponent() {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div className='toetsmodel-component'>

            <style type="text/css">
                {`
                .test{fill:#fc2205; color: #fc2205;}
                `}
            </style>

            <div>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className='toetsmodel-component__center'>
                        <img src={XMARK} onClick={() => setOpen(false)} alt="Close button" />
                        <div>
                            <h4>Visie op onderwijs</h4>
                            <p>
                                De manier waarop de toetsing wordt ingericht is een middel om de visie op onderwijs te realiseren, in plaats van een doel op zich (Baartman, Van Schilt-Mol & Van der Vleuten, 2020). De visie op toetsing, die onderdeel uitmaakt van de visie op onderwijs, vormt het fundament voor het borgen van de kwaliteit van de toetsing en zal er voor zorgen dat toetsing onderdeel wordt van het onderwijsconcept. Daarmee werkt deze visie versterkend op het realiseren van de onderwijsdoelen (VO-Raad, 2019). Dit veronderstelt uiteraard dat het hebben van een visie op onderwijs voorwaardelijk is om op een zinvolle wijze invulling te kunnen geven aan toetsing.
                                De kern van het toetsweb, visie op onderwijs, geeft antwoord op de vraag wat de opleiding verstaat onder goed onderwijs. De visie wordt gevormd wordt door ten minste;
                            </p>
                            <br />
                            <ul>
                                <li><p>de legitimering van het onderwijs/de opleiding,</p></li>
                                <li><p>een visie op het doel van het onderwijs/het beroep waartoe wordt opgeleid,</p></li>
                                <li><p>een visie op de opdracht* van het onderwijs,</p></li>
                                <li><p>een visie op leren en een visie op toetsen (Van Schilt-Mol, 2021).</p></li>
                            </ul>
                            <br />
                            <p>
                            * Voor de opdracht van het onderwijs geldt dat, passend bij de uitgangspunten van eigentijds toetsen en beoordelen, de vormende (socialisatie en persoonsvorming) en de kwalificerende functie in onderling evenwicht de aandacht moeten krijgen (Hoogland, 2017).
                            </p>
                        </div>
                    </div>
                </Popup>
            </div>

            <svg width="672" height="672" viewBox="0 0 1030 1065" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1030" height="1065" fill=""/>
                <g id="Group_75">
                <path id="Path_247" d="M528.551 0C805.475 0 1029.94 224.466 1029.94 501.389C1029.94 778.312 805.474 1002.78 528.551 1002.78C251.628 1002.78 27.1621 778.313 27.1621 501.389C27.1621 224.465 251.628 0 528.551 0Z" fill="white"/>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom right"
                    offsetY={-60}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_248" d="M161.821 501.6C161.713 463.692 167.578 426.004 179.201 389.922L117.974 369.636C104.194 412.266 97.206 456.798 97.266 501.6C97.266 645.133 167.366 772.131 275.137 850.739L312.803 798.387C221.411 731.401 161.821 623.421 161.821 501.6" fill="#46AD48"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover green'>
                        <h4>4. KETEN-GEORIËNTEERDE ONTWIKKELINGSFASE </h4>
                        <p>
                            De eisen die gesteld worden aan toetsbekwaamheid worden besproken met in- en/of relevante externe partners en sluiten aan bij de landelijke kaders Ook voor de partners uit het werkveld is vastgelegd over welke toetsbekwaamheid zij moeten beschikken. De kwaliteit van de toetsbekwaamheid van alle partners in de toetsorganisatie wordt structureel geëvalueerd aan de hand van de de eisen die aan toetsbekwaamheid zijn gesteld, de opbrengsten worden besproken met zowel de relevante partners binnen de opleiding als het werkveld. 
                        </p>
                    </div>
                </Popup>

                <g id="Group_25" opacity="0.75">
                <g id="Group_24">
                <g id="Group 1">
                <g id="Group_23">
                <mask id="mask0_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="161" y="389" width="190" height="410">
                <path id="clip-path-3" d="M350.248 389.902H161.811V798.209H350.248V389.902Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_0_1)">
                <g id="Group">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom right"
                    offsetY={-60}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_249" d="M226.366 501.581C226.374 470.562 231.113 439.726 240.418 410.136L179.19 389.85C155.76 463.296 156.035 542.254 179.975 615.535C203.916 688.817 250.309 752.708 312.581 798.157L350.247 745.805C311.815 717.737 280.56 680.984 259.032 638.542C237.503 596.1 226.311 549.171 226.366 501.581" fill="#46AD48"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover green'>
                        <h4>3. SYSTEEM-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            De eisen die gesteld worden aan toetsbekwaamheid worden regelmatig bijgesteld op basis van (landelijke) kaders en actuele (wetenschappelijke) inzichten. De vereiste toetsbekwaamheid is niet alleen op individueel niveau, maar ook op teamniveau vastgesteld. Er wordt doelgericht gewerkt aan het professionaliseren van medewerkers en teams. De kwaliteit van de toetsbekwaamheid wordt structureel geëvalueerd aan de hand van de eisen die aan toetsbekwaamheid zijn gesteld. De opbrengsten hiervan worden besproken met relevante partners binnen de opleiding en dienen als basis voor het opstellen van ontwikkelplannen. 
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_250" d="M313.016 799.654L312.171 799.02C249.676 753.513 203.097 689.484 179.04 616.016C154.984 542.547 154.67 463.368 178.146 389.711L178.569 388.654L241.857 409.521L241.646 410.578C222.564 470.782 222.88 535.459 242.55 595.473C262.22 655.487 300.25 707.803 351.266 745.031L352.111 745.665L313.016 799.654ZM179.837 391.137C156.673 464.116 157.011 542.526 180.803 615.302C204.594 688.078 250.638 751.546 312.436 796.749L348.837 746.087C297.97 708.534 260.076 656.057 240.429 595.96C220.782 535.863 220.359 471.136 239.219 410.787L179.837 391.137Z" fill="white"/>
                <g id="Group_28" opacity="0.65">
                <g id="Group_27">
                <g id="Group 2">
                <g id="Group_26">
                <mask id="mask1_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="226" y="410" width="162" height="336">
                <path id="clip-path-4" d="M387.892 410.162H226.344V745.883H387.892V410.162Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_0_1)">
                <g id="Group_2">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom right"
                    offsetY={-60}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_251" d="M290.898 501.607C290.85 477.477 294.484 453.481 301.675 430.448L240.448 410.162C221.379 470.58 221.718 535.455 241.417 595.67C261.117 655.886 299.186 708.417 350.277 745.883L387.943 693.531C357.86 671.382 333.404 642.472 316.547 609.135C299.69 575.797 290.904 538.964 290.898 501.607" fill="#46AD48"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover green'>
                        <h4>2. PROCES-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            De eisen die binnen de opleiding gesteld worden aan toetsbekwaamheid zijn gebaseerd op ervaringen van ervaren toetsontwikkelaars. Voor alle medewerkers in de toetsorganisatie is vastgelegd over welke toetsbekwaamheid zij moeten beschikken. Om deze bekwaamheid te realiseren zijn concrete doelen geformuleerd. Zowel de stand van zaken t.a.v. de ontwikkeling van de toetsbekwaamheid als de kwaliteit van de toetsbekwaamheid worden met enige regelmaat geëvalueerd. De opbrengsten daarvan worden niet vanzelfsprekend besproken met alle collega’s of studenten, maar wel gebruikt om acties in te zetten om de toetsbekwaamheid te verhogen. 
                        </p>
                    </div>
                </Popup>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_252" d="M350.68 747.303L349.835 746.669C298.587 709.093 260.395 656.41 240.621 596.017C220.846 535.624 220.484 470.554 239.583 409.945L240.006 408.888L303.294 429.755L303.083 430.812C288.388 477.936 288.76 528.47 304.148 575.373C319.535 622.275 349.173 663.209 388.928 692.468L389.773 693.102L350.68 747.303ZM241.062 411.635C217.461 487.49 224.673 569.588 261.137 640.168C282.53 681.19 312.947 716.826 350.099 744.397L386.499 693.735C346.805 664.283 317.212 623.254 301.792 576.294C286.371 529.333 285.881 478.748 300.388 431.498L241.062 411.635Z" fill="white"/>
                <g id="Group_31" opacity="0.5">
                <g id="Group_30">
                <g id="Group 3">
                <g id="Group_29">
                <mask id="mask2_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="290" y="430" width="234" height="264">
                <path id="clip-path-5" d="M523.795 430.421H290.877V693.292H523.795V430.421Z" fill="white"/>
                </mask>
                <g mask="url(#mask2_0_1)">
                <g id="Group_3">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom right"
                    offsetY={-60}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_253" d="M301.654 430.421C286.931 477.769 287.327 528.528 302.788 575.64C318.249 622.752 348.006 663.875 387.922 693.292L523.795 504.01L301.654 430.421Z" fill="#46AD48"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover green'>
                        <h4>1. ACTIVITEITEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding zijn geen (concrete) afspraken gemaakt over de toetsbekwaamheid die van docenten wordt verwacht. De verantwoordelijkheid voor de ontwikkeling van toetsbekwaamheid ligt bij individuele docenten. Uitsluitend wanneer daar aanleiding toe is, wordt de toetsbekwaamheid van docenten geëvalueerd. 
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_254" d="M388.084 694.792L387.239 694.158C347.174 664.613 317.304 623.325 301.778 576.028C286.252 528.73 285.841 477.772 300.601 430.23L301.024 429.173L525.437 503.66L388.084 694.792ZM302.291 431.867C288.009 478.728 288.55 528.857 303.841 575.399C319.131 621.941 348.424 662.625 387.714 691.886L522.161 504.717L302.291 431.867Z" fill="white"/>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom right"
                    offsetY={-60}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_255" d="M528.976 868.543C452.146 868.714 377.227 844.604 314.917 799.656L276.67 851.586C350.206 904.648 438.601 933.169 529.282 933.093C619.963 933.017 708.31 904.348 781.757 851.163L743.457 799.233C681.082 844.418 605.997 868.682 528.976 868.543" fill="#ED7A0F"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover orange'>
                        <h4>4. KETEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Zowel de kwaliteitscriteria als de inrichting van de toetsorganisatie worden vastgesteld met het werkveld. De rollen, taken en verantwoordelijkheden van het werkveld in de toetsorganisatie zijn vastgelegd, evenals de toetsprocessen die plaatsvinden op de werkplek. De kwaliteit van de toetsorganisatie wordt structureel geëvalueerd aan de hand van de kwaliteitscriteria, de opbrengsten worden besproken met zowel de relevante partners binnen de opleiding als het werkveld.
                        </p>
                    </div>
                </Popup>

                <g id="Group_34" opacity="0.75">
                <g id="Group_33">
                <g id="Group 4">
                <g id="Group_32">
                <mask id="mask3_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="314" y="747" width="430" height="122">
                <path id="clip-path-6" d="M743.695 747.511H314.891V868.698H743.695V747.511Z" fill="white"/>
                </mask>
                <g mask="url(#mask3_0_1)">
                <g id="Group_4">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_256" d="M528.95 804.195C465.906 804.28 404.42 784.604 353.139 747.933L314.891 799.863C377.402 844.716 452.421 868.805 529.359 868.729C606.297 868.653 681.268 844.416 743.691 799.44L705.447 747.511C653.986 784.393 592.259 804.217 528.947 804.195" fill="#ED7A0F"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover orange'>
                        <h4>3. SYSTEEM-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            De kwaliteitscriteria die worden gebruikt bij het inrichten van de toetsorganisatie worden met regelmaat bijgesteld op basis van actuele (wetenschappelijke) inzichten. De rollen, taken en verantwoordelijkheden worden binnen de opleiding regelmatig met elkaar besproken en op elkaar afgestemd. De kwaliteit van de toetsorganisatie wordt structureel geëvalueerd aan de hand van de kwaliteitscriteria. De opbrengsten hiervan worden besproken met relevante partners binnen de opleiding. 
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_257" d="M528.976 869.547C451.911 869.754 376.759 845.565 314.282 800.447L313.438 799.813L352.953 746.245L353.797 746.879C405.044 783.408 466.427 803.005 529.359 802.929C592.292 802.854 653.627 783.109 704.786 746.456L705.63 745.822L745.146 799.39L744.301 800.024C681.677 845.374 606.294 869.713 528.974 869.545M316.343 799.445C378.523 843.77 452.999 867.557 529.36 867.481C605.722 867.406 680.151 843.471 742.243 799.022L705.211 748.783C653.84 785.305 592.391 804.963 529.361 805.039C466.331 805.114 404.835 785.604 353.377 749.206L316.343 799.445Z" fill="white"/>
                <g id="Group_37" opacity="0.65">
                <g id="Group_36">
                <g id="Group 5">
                <g id="Group_35">
                <mask id="mask4_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="353" y="695" width="353" height="110">
                <path id="clip-path-7" d="M705.432 695.422H353.176V804.036H705.432V695.422Z" fill="white"/>
                </mask>
                <g mask="url(#mask4_0_1)">
                <g id="Group_5">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_258" d="M528.987 739.692C479.678 739.801 431.573 724.468 391.423 695.845L353.176 747.774C404.603 784.444 466.209 804.118 529.372 804.042C592.534 803.966 654.092 784.144 705.432 747.351L667.185 695.422C626.879 724.263 578.547 739.745 528.985 739.692" fill="#ED7A0F"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover orange'>
                        <h4>2. PROCES-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding zijn kwaliteitscriteria vastgesteld voor de toetsorganisatie. Alle rollen, taken en verantwoordelijkheden zijn vastgelegd, zodat iedereen weet wie waarvoor verantwoordelijk is. Het is voor iedereen helder hoe de verschillende toetsprocessen zich tot elkaar (zouden moeten) verhouden. De processen sluiten echter nog niet naadloos op elkaar aan. Met enige regelmaat wordt de kwaliteit van de toetsorganisatie geëvalueerd. De opbrengsten daarvan worden niet vanzelfsprekend besproken met alle collega’s of studenten, maar wel gebruikt om toetsprocessen te verbeteren.
                        </p>
                    </div>
                </Popup>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_259" d="M528.976 805.258C465.692 805.413 403.963 785.657 352.531 748.785L351.686 748.151L391.201 694.584L392.046 695.218C432.173 723.674 480.167 738.923 529.36 738.847C578.553 738.772 626.5 723.374 666.54 694.795L667.385 694.161L706.9 747.729L706.055 748.363C654.426 785.371 592.498 805.269 528.976 805.263M354.591 747.522C405.686 783.662 466.748 803.034 529.333 802.958C591.918 802.883 652.934 783.363 703.942 747.099L666.91 696.86C626.673 725.32 578.618 740.638 529.334 740.714C480.049 740.79 431.947 725.62 391.624 697.283L354.591 747.522Z" fill="white"/>
                <g id="Group_40" opacity="0.5">
                <g id="Group_39">
                <g id="Group 6">
                <g id="Group_38">
                <mask id="mask5_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="391" y="508" width="276" height="232">
                <path id="clip-path-8" d="M666.936 508.223H391.227V739.662H666.936V508.223Z" fill="white"/>
                </mask>
                <g mask="url(#mask5_0_1)">
                <g id="Group_6">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_260" d="M391.227 695.815C431.526 724.411 479.735 739.736 529.149 739.661C578.563 739.585 626.724 724.111 666.936 695.392L529.161 508.223L391.227 695.815Z" fill="#ED7A0F"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover orange'>
                        <h4>1. ACTIVITEITEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding is niet vastgesteld aan welke kwaliteitscriteria de toetsorganisatie moet voldoen. De toetsprocessen worden door de docenten naar eigen inzicht vormgegeven. Er zijn wel afspraken gemaakt over de rollen, taken en verantwoordelijkheden binnen de toetsprocessen, maar medewerkers weten uitsluitend aan welke verantwoordelijkheden zij zelf moeten voldoen. De kwaliteit van de toetsorganisatie wordt uitsluitend geëvalueerd als daar aanleiding toe is.
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_261" d="M528.976 740.702C479.462 740.772 431.163 725.368 390.831 696.644L389.986 696.01L390.62 695.165L529.399 506.302L668.599 695.584L667.754 696.218C627.28 725.183 578.747 740.74 528.976 740.702M392.839 695.64C432.8 723.718 480.467 738.749 529.306 738.673C578.145 738.598 625.766 723.419 665.639 695.217L529.339 509.897L392.839 695.64Z" fill="white"/>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_262" d="M960.41 501.601C960.406 456.889 953.491 412.447 939.91 369.848L878.683 390.134C901.916 463.477 901.562 542.26 877.673 615.392C853.783 688.524 807.56 752.322 745.51 797.807L783.176 850.159C838.138 810.177 882.851 757.75 913.656 697.166C944.462 636.583 960.483 569.566 960.41 501.601" fill="#AF72AD"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover purple'>
                        <h4>4. KETEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            De kwaliteitscriteria die gesteld worden aan het toets(beleids)plan worden besproken met relevante in- en/of externe partners en sluiten aan bij de landelijke kaders. De opgenomen processen en interventies richten zich op de lange termijn. Er zijn tussendoelen opgesteld zodat tussentijdse evaluatie mogelijk is. Het beleidsplan wordt structureel geëvalueerd aan de hand van de kwaliteitscriteria, de opbrengsten worden besproken met zowel de relevante partners binnen de opleiding als het werkveld.
                        </p>
                    </div>
                </Popup>

                <g id="Group_43" opacity="0.75">
                <g id="Group_42">
                <g id="Group 7">
                <g id="Group_41">
                <mask id="mask6_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="707" y="390" width="189" height="408">
                <path id="clip-path-9" d="M895.91 390.134H707.896V797.807H895.91V390.134Z" fill="white"/>
                </mask>
                <g mask="url(#mask6_0_1)">
                <g id="Group_7">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_263" d="M831.355 501.601C831.395 549.091 820.236 595.921 798.785 638.29C777.334 680.659 746.195 717.374 707.896 745.454L745.562 797.806C807.623 752.33 853.855 688.533 877.746 615.398C901.638 542.264 901.986 463.477 878.742 390.134L817.515 410.42C826.781 439.923 831.449 470.677 831.355 501.601" fill="#AF72AD"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover purple'>
                        <h4>3. SYSTEEM-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            De kwaliteitscriteria die worden gebruikt bij het ontwikkelen van het toets(beleids)plan worden met regelmaat bijgesteld op basis van actuele (wetenschappelijke) inzichten. Ook bij de uitwerking van de processen en interventies wordt gebruik gemaakt van actuele (wetenschappelijke) kennis. Het beleidsplan, de visie op onderwijs en het toetskader van de instelling sluiten naadloos op elkaar aan. Het beleidsplan wordt structureel geëvalueerd aan de hand van de kwaliteitscriteria. De opbrengsten hiervan worden besproken met relevante partners binnen de opleiding. 
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_264" d="M745.299 799.233L706.418 745.033L707.263 744.399C744.642 716.737 775.258 680.955 796.806 639.747C819.025 597.027 830.52 549.544 830.299 501.391C830.28 470.597 825.613 439.982 816.458 410.58L816.247 409.523L879.535 388.656L879.958 389.713C903.414 463.223 903.154 542.248 879.215 615.601C855.276 688.955 808.87 752.921 746.568 798.442L745.299 799.233ZM709.534 745.666L745.934 796.328C792.167 762.342 829.756 717.956 855.663 666.757C881.57 615.558 895.068 558.982 895.067 501.601C895.127 464.266 889.406 427.146 878.109 391.561L818.731 411.213C837.456 471.402 837.005 535.924 817.441 595.846C797.876 655.767 760.166 708.124 709.531 745.666" fill="white"/>
                <g id="Group_46" opacity="0.65">
                <g id="Group_45">
                <g id="Group 8">
                <g id="Group_44">
                <mask id="mask7_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="670" y="410" width="162" height="336">
                <path id="clip-path-10" d="M831.383 410.395H670.258V745.271H831.383V410.395Z" fill="white"/>
                </mask>
                <g mask="url(#mask7_0_1)">
                <g id="Group_8">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_265" d="M766.827 501.576C766.848 538.805 758.119 575.518 741.345 608.755C724.571 641.991 700.22 670.82 670.258 692.918L707.924 745.27C758.884 707.899 796.847 655.493 816.472 595.424C836.097 535.354 836.398 470.644 817.331 410.395L756.103 430.681C763.226 453.639 766.841 477.542 766.827 501.581" fill="#AF72AD"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover purple'>
                        <h4>2. PROCES-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding zijn kwaliteitscriteria vastgesteld voor het toets(beleids)plan. De visie op onderwijs en het toetskader van de instelling vormen de basis voor het beleidsplan. In het beleidsplan zijn naast toetsprocessen ook interventies opgenomen die beschrijven hoe de ambities gerealiseerd gaan worden. Met enige regelmaat wordt zowel de kwaliteit als de uitvoerbaarheid en bruikbaarheid van het beleidsplan geëvalueerd. De opbrengsten daarvan worden niet vanzelfsprekend besproken met alle collega’s of studenten, maar wel gebruikt om het beleidsplan bij te stellen.
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group_49" opacity="0.65">
                <g id="Group_48">
                <g id="Group 9">
                <g id="Group_47">
                <mask id="mask8_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="668" y="409" width="165" height="338">
                <path id="clip-path-11" d="M832.79 409.16H668.971V746.941H832.79V409.16Z" fill="white"/>
                </mask>
                <g mask="url(#mask8_0_1)">
                <g id="Group_9">
                <path id="Path_266" d="M707.852 746.888L668.971 692.687L669.816 692.053C699.571 669.978 723.762 641.262 740.463 608.19C757.164 575.117 765.914 538.603 766.016 501.553C766.09 477.629 762.454 453.839 755.239 431.028L755.028 429.971L818.315 409.107L818.738 410.164C837.874 470.635 837.571 535.583 817.869 595.871C798.168 656.16 760.061 708.754 708.909 746.255L707.852 746.888ZM671.877 693.107L708.277 743.769C758.704 706.594 796.272 654.608 815.742 595.061C835.212 535.514 835.613 471.376 816.889 411.59L757.51 431.242C764.524 453.948 768.086 477.578 768.076 501.342C768.007 538.577 759.28 575.285 742.585 608.566C725.889 641.848 701.682 670.791 671.877 693.107" fill="white"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group_52" opacity="0.5">
                <g id="Group_51">
                <g id="Group 10">
                <g id="Group_50">
                <mask id="mask9_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="534" y="430" width="234" height="263">
                <path id="clip-path-12" d="M767.042 430.833H534.969V692.912H767.042V430.833Z" fill="white"/>
                </mask>
                <g mask="url(#mask9_0_1)">
                <g id="Group_10">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_267" d="M670.416 692.912C700.366 670.803 724.707 641.971 741.479 608.737C758.252 575.503 766.989 538.796 766.985 501.569C767.036 477.578 763.404 453.722 756.216 430.833L534.916 504.264L670.416 692.912Z" fill="#AF72AD"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover purple'>
                        <h4>1. ACTIVITEITEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding is niet vastgesteld aan welke kwaliteitseisen een toets(beleids)plan moet voldoen. Het beleidsplan is hoofdzakelijk een beschrijving van (losse) toetsprocessen, deze sluiten nog niet (volledig) aan op de visie op onderwijs. De kwaliteit van het beleidsplan wordt uitsluitend geëvalueerd als daar aanleiding toe is.
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="Group_55" opacity="0.5">
                <g id="Group_54">
                <g id="Group 11">
                <g id="Group_53">
                <mask id="mask10_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="533" y="429" width="236" height="266">
                <path id="clip-path-13" d="M768.089 429.42H533.322V694.405H768.089V429.42Z" fill="white"/>
                </mask>
                <g mask="url(#mask10_0_1)">
                <g id="Group_11">
                <path id="Path_268" d="M670.252 694.352L533.322 503.432L756.89 429.367L757.313 430.424C772.048 477.831 771.665 528.648 756.216 575.827C740.767 623.006 711.019 664.208 671.098 693.718L670.252 694.352ZM536.597 504.7L670.622 691.499C709.787 662.289 738.973 621.693 754.187 575.264C769.402 528.835 769.903 478.839 755.622 432.114L536.597 504.7Z" fill="white"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_269" d="M877.898 387.651L939.338 367.999C883.286 195.516 721.317 70.5783 530.186 69.9443L530.609 134.5C692.791 135.292 830.142 241.159 877.898 387.651Z" fill="#2DB3A5"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover turquoise'>
                        <h4>4. KETEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Zowel de kwaliteitscriteria als de opbouw van het toetsprogramma worden vastgesteld met het werkveld. Programmaonderdelen die plaatsvinden op de werkplek worden afgestemd met het werkveld zodat deze uitvoerbaar en passend zijn. Het toetsprogramma wordt structureel geëvalueerd aan de hand van de kwaliteitscriteria. De opbrengsten worden besproken met zowel de relevante partners binnen de opleiding als het werkveld.
                        </p>
                    </div>
                </Popup>

                <g id="Group_58" opacity="0.75">
                <g id="Group_57">
                <g id="Group 12">
                <g id="Group_56">
                <mask id="mask11_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="530" y="134" width="348" height="274">
                <path id="clip-path-14" d="M877.913 134.467H530.623V407.27H877.913V134.467Z" fill="white"/>
                </mask>
                <g mask="url(#mask11_0_1)">
                <g id="Group_12">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_270" d="M816.475 407.267L877.914 387.615C830.104 241.179 692.752 135.259 530.623 134.467L531.046 199.023C594.432 199.494 656.071 219.844 707.278 257.204C758.485 294.564 796.678 347.05 816.475 407.267Z" fill="#2DB3A5"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover turquoise'>
                        <h4>3. SYSTEEM-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding zijn kwaliteitscriteria vastgesteld voor het toetsprogramma. De beoogde leerresultaten vormen de basis voor het ontwerpen van het toetsprogramma. Met enige regelmaat worden zowel de dekking als de uitvoerbaarheid van het toetsprogramma geëvalueerd. De opbrengsten daarvan worden niet vanzelfsprekend besproken met alle collega’s of studenten, maar wel gebruikt om het toetsprogramma te verbeteren.
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_271" d="M815.825 408.518L815.402 407.461C795.78 347.396 757.746 295.033 706.695 257.797C655.643 220.561 594.165 200.341 530.977 200.006H529.92L529.498 133.39H530.555C607.931 133.658 683.25 158.332 745.786 203.899C808.322 249.466 854.886 313.602 878.849 387.175L879.272 388.232L815.825 408.518ZM532.087 197.946C595.346 198.514 656.842 218.864 707.953 256.144C759.063 293.423 797.227 345.762 817.093 405.824L876.683 386.806C852.766 314.026 806.596 250.596 744.691 205.468C682.786 160.339 608.271 135.792 531.664 135.29L532.087 197.946Z" fill="white"/>
                <g id="Group_61" opacity="0.65">
                <g id="Group_60">
                <g id="Group 13">
                <g id="Group_59">
                <mask id="mask12_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="531" y="199" width="286" height="228">
                <path id="clip-path-15" d="M816.464 199.001H531.035V426.742H816.464V199.001Z" fill="white"/>
                </mask>
                <g mask="url(#mask12_0_1)">
                <g id="Group_13">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_272" d="M531.035 199.001L531.458 263.557C581.085 264.052 629.316 280.048 669.403 309.308C709.49 338.568 739.427 379.627 755.025 426.742L816.464 407.09C796.631 346.909 758.424 294.462 707.221 257.133C656.019 219.805 594.399 199.473 531.035 199.001" fill="#2DB3A5"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover turquoise'>
                        <h4>2. PROCES-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding zijn kwaliteitscriteria vastgesteld voor het toetsprogramma. De beoogde leerresultaten vormen de basis voor het ontwerpen van het toetsprogramma. Met enige regelmaat worden zowel de dekking als de uitvoerbaarheid van het toetsprogramma geëvalueerd. De opbrengsten daarvan worden niet vanzelfsprekend besproken met alle collega’s of studenten, maar wel gebruikt om het toetsprogramma te verbeteren.
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_273" d="M754.228 428.17L753.805 427.113C738.298 380.189 708.504 339.289 668.595 310.14C628.685 280.992 580.659 265.056 531.241 264.562H530.184L529.762 197.946H530.819C594.455 198.308 656.365 218.68 707.781 256.177C759.198 293.675 797.514 346.398 817.305 406.88L817.728 407.937L754.228 428.17ZM532.456 262.502C581.957 263.205 630.018 279.263 670.001 308.457C709.983 337.651 739.913 378.54 755.656 425.476L815.246 406.458C795.52 346.79 757.603 294.797 706.818 257.779C656.033 220.761 594.931 200.576 532.089 200.058L532.456 262.502Z" fill="white"/>
                <g id="Group_64" opacity="0.5">
                <g id="Group_63">
                <g id="Group 14">
                <g id="Group_62">
                <mask id="mask13_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="531" y="263" width="225" height="235">
                <path id="clip-path-16" d="M755.013 263.714H531.445V497.636H755.013V263.714Z" fill="white"/>
                </mask>
                <g mask="url(#mask13_0_1)">
                <g id="Group_14">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_274" d="M755.013 426.952C739.425 379.831 709.49 338.765 669.401 309.503C629.312 280.242 581.075 264.25 531.445 263.767L532.871 497.689L755.013 426.952Z" fill="#2DB3A5"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover turquoise'>
                        <h4>1. ACTIVITEITEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Binnen de opleiding is niet vastgesteld aan welke kwaliteitscriteria het toetsprogramma van de opleiding moet voldoen. Iedere docent ontwikkelt zijn eigen toetsen, er is echter geen overzicht van de samenhang tussen de toetsen. Het is hierdoor niet met zekerheid vast te stellen dat de toetsen gezamenlijk de beoogde leerresultaten dekken.
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_275" d="M531.664 498.902L530.449 262.502H531.506C581.373 263.021 629.831 279.11 670.105 308.521C710.379 337.931 740.456 379.191 756.13 426.533L756.553 427.59L755.496 428.013L531.664 498.902ZM532.456 264.558L533.882 495.997L753.752 426.106C738.102 379.598 708.415 339.088 668.781 310.156C629.147 281.223 581.517 265.292 532.452 264.558" fill="white"/>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_276" d="M528.129 134.447L528.552 69.8906C336.997 70.1016 174.869 195.04 118.607 367.735L180.046 387.391C227.807 241 365.577 134.869 528.129 134.447Z" fill="#45A7C3"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover blue'>
                        <h4>4. KETEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Zowel kwaliteitscriteria voor de toetsen als de leer- en toetsdoelen zijn afgestemd met het werkveld. De toetsen sluiten hierdoor niet alleen aan bij het onderwijs dat de student volgt binnen de opleiding, maar ook op wat geleerd wordt op de werkplek. Toetsen worden structureel geëvalueerd aan de hand van de kwaliteitscriteria. De opbrengsten worden besproken met zowel de relevante partners binnen de opleiding als het werkveld.
                        </p>
                    </div>
                </Popup>

                <g id="Group_67" opacity="0.75">
                <g id="Group_66">
                <g id="Group 15">
                <g id="Group_65">
                <mask id="mask14_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="180" y="134" width="349" height="274">
                <path id="clip-path-17" d="M528.15 134.467H180.014V407.059H528.15V134.467Z" fill="white"/>
                </mask>
                <g mask="url(#mask14_0_1)">
                <g id="Group_15">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_277" d="M527.727 198.97L528.15 134.414C365.599 134.837 228.035 240.756 180.014 387.407L241.453 407.059C261.32 346.734 299.652 294.183 351.026 256.84C402.4 219.497 464.215 199.252 527.727 198.97" fill="#46A8C4"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover blue'>
                        <h4>3. SYSTEEM-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            De kwaliteitscriteria die docenten gebruiken bij het ontwikkelen van toetsen worden met regelmaat bijgesteld op basis van actuele (wetenschappelijke) inzichten. De toetsen, die ontwikkeld worden voorafgaand aan het onderwijs, zijn passend voor de leerresultaten en sluiten aan bij eerder gegeven onderwijs. De kwaliteit van toetsen wordt structureel geëvalueerd aan de hand van de kwaliteitscriteria. De opbrengsten hiervan worden besproken met relevante partners binnen de opleiding. 
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_278" d="M242.068 408.306L178.568 388.02L178.991 386.963C203.038 313.336 249.718 249.181 312.375 203.647C375.031 158.113 450.465 133.525 527.919 133.39H528.976L528.553 200.006H527.496C464.204 200.18 402.577 220.3 351.374 257.505C300.171 294.71 261.997 347.107 242.278 407.25L242.068 408.306ZM181.268 386.806L240.858 405.824C260.782 345.651 299.082 293.246 350.363 255.991C401.644 218.735 463.32 198.507 526.704 198.157L527.127 135.714C450.451 136.104 375.831 160.545 313.781 205.592C251.732 250.638 205.382 314.02 181.262 386.805" fill="white"/>
                <g id="Group_70" opacity="0.65">
                <g id="Group_69">
                <g id="Group 16">
                <g id="Group_68">
                <mask id="mask15_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="241" y="199" width="287" height="228">
                <path id="clip-path-18" d="M527.71 199.001H241.436V426.531H527.71V199.001Z" fill="white"/>
                </mask>
                <g mask="url(#mask15_0_1)">
                <g id="Group_16">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_279" d="M527.34 263.504L527.763 198.948C464.279 199.22 402.484 219.435 351.114 256.737C299.744 294.04 261.395 346.543 241.488 406.826L302.927 426.478C318.649 379.292 348.74 338.208 388.983 308.982C429.226 279.756 477.605 263.854 527.34 263.504" fill="#46A8C4"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover blue'>
                        <h4>2. PROCES-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Docenten ontwikkelen toetsen aan de hand van een toetscyclus of ontwerpproces en maken daarbij gebruik van kwaliteitscriteria die zijn gebaseerd op ervaringen van ervaren toetsontwikkelaars. De toetsen, die worden ontwikkeld tijdens de onderwijsperiode, maken zij samen met collega’s. De kwaliteit van de toetsen wordt door de betrokken docenten regelmatig geëvalueerd. De opbrengsten daarvan worden niet vanzelfsprekend besproken met collega’s of studenten, maar wel gebruikt om eigen toetsen te verbeteren. 
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_280" d="M303.506 427.958L240.006 407.672L240.429 406.615C260.315 346.085 298.749 293.351 350.283 255.889C401.817 218.426 463.836 198.135 527.548 197.893H528.606L528.183 264.509H527.126C477.59 264.848 429.405 280.693 389.336 309.819C349.266 338.945 319.325 379.888 303.716 426.902L303.506 427.958ZM242.706 406.458L302.296 425.476C318.11 378.448 348.172 337.51 388.309 308.344C428.446 279.177 476.667 263.229 526.28 262.713L526.703 200.27C463.74 200.587 402.464 220.656 351.513 257.647C300.561 294.639 262.503 346.687 242.703 406.457" fill="white"/>
                <g id="Group_73" opacity="0.5">
                <g id="Group_72">
                <g id="Group 17">
                <g id="Group_71">
                <mask id="mask16_0_1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="302" y="263" width="226" height="235">
                <path id="clip-path-19" d="M527.325 263.534H302.912V497.456H527.325V263.534Z" fill="white"/>
                </mask>
                <g mask="url(#mask16_0_1)">
                <g id="Group_17">
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <path id="Path_281" d="M527.325 263.534C422.884 264.168 334.345 332.422 302.912 426.508L525.898 497.456L527.325 263.534Z" fill="#46A8C4"/>
                    }
                >
                    <div className='toetsmodel-component__element-hover blue'>
                        <h4>1. ACTIVITEITEN-GEORIËNTEERDE ONTWIKKELINGSFASE</h4>
                        <p>
                            Docenten ontwikkelen toetsen naar eigen inzicht: zij gebruiken eigen kwaliteitscriteria, ontwerpen de toets vaak alleen en kort voor de afname. De kwaliteit van de toetsen wordt uitsluitend geëvalueerd als daar aanleiding toe is.
                        </p>
                    </div>
                </Popup>

                </g>
                </g>
                </g>
                </g>
                </g>
                </g>
                <path id="Path_282" d="M526.916 498.907L301.658 427.114L302.081 426.057C317.835 378.658 348.025 337.376 388.421 307.999C428.816 278.621 477.392 262.62 527.339 262.238H528.396L526.916 498.907ZM304.352 425.899L525.067 496.213L526.493 264.774C477.299 265.16 429.453 280.892 389.63 309.777C349.807 338.661 319.995 379.257 304.352 425.899" fill="white"/>

                <Popup
                    open={open}
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={-30}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="Visie_op_onderwijs">
                        <path id="Path_283" d="M406.257 378.829C430.529 354.558 461.453 338.028 495.118 331.332C528.784 324.635 563.679 328.072 595.392 341.208C627.104 354.344 654.209 376.588 673.279 405.128C692.349 433.669 702.528 467.223 702.528 501.548C702.528 535.873 692.349 569.428 673.279 597.968C654.209 626.508 627.104 648.753 595.392 661.888C563.679 675.024 528.784 678.461 495.118 671.764C461.453 665.068 430.529 648.539 406.257 624.267V624.267C390.141 608.152 377.357 589.02 368.635 567.964C359.913 546.907 355.424 524.339 355.424 501.548C355.424 478.757 359.913 456.189 368.635 435.133C377.357 414.077 390.141 394.945 406.257 378.829V378.829Z" fill="white"/>
                        <path id="Path_284" d="M454.066 490.613L445.402 461.663H452.217L455.756 475.134C456.179 476.772 456.601 478.251 456.971 479.677C457.341 481.103 457.816 482.794 458.186 484.22H458.397C458.82 482.582 459.242 481.103 459.612 479.677C459.982 478.251 460.457 476.56 460.827 475.134L464.367 461.663H470.967L462.302 490.613H454.066Z" fill="#020304"/>
                        <path id="Path_285" d="M478.683 465.411C477.684 465.414 476.72 465.036 475.989 464.354C475.663 464.029 475.404 463.642 475.227 463.216C475.05 462.79 474.959 462.333 474.959 461.871C474.959 461.41 475.05 460.953 475.227 460.527C475.404 460.101 475.663 459.714 475.989 459.388C476.73 458.725 477.689 458.358 478.683 458.358C479.678 458.358 480.637 458.725 481.377 459.388C481.704 459.714 481.963 460.101 482.14 460.527C482.317 460.953 482.408 461.41 482.408 461.871C482.408 462.333 482.317 462.79 482.14 463.216C481.963 463.642 481.704 464.029 481.377 464.354C481.032 464.716 480.613 464.998 480.147 465.181C479.682 465.363 479.182 465.442 478.683 465.411M475.408 468.686H482.008V490.611H475.408V468.686Z" fill="#020304"/>
                        <path id="Path_286" d="M496.276 491.247C493.184 491.214 490.198 490.114 487.824 488.132L490.73 484.011C491.572 484.757 492.563 485.315 493.636 485.649C494.579 485.966 495.553 486.179 496.542 486.283C497.254 486.327 497.965 486.181 498.602 485.86C498.804 485.682 498.964 485.462 499.074 485.216C499.183 484.97 499.238 484.703 499.236 484.434C499.236 484.011 499.025 483.8 498.813 483.377C498.496 483.055 498.141 482.771 497.756 482.532C497.302 482.277 496.824 482.065 496.33 481.898C495.696 481.687 495.273 481.475 494.692 481.264C493.965 480.997 493.273 480.642 492.632 480.207L490.783 478.992C490.138 478.528 489.643 477.885 489.357 477.143C488.908 476.395 488.688 475.532 488.723 474.66C488.719 473.657 488.936 472.665 489.357 471.754C489.793 470.923 490.345 470.159 490.995 469.482C491.823 468.884 492.729 468.404 493.689 468.056C496.293 467.376 499.044 467.524 501.56 468.479C502.714 469.012 503.827 469.63 504.888 470.328L501.982 474.237C501.256 473.715 500.497 473.239 499.71 472.811C499 472.484 498.219 472.339 497.438 472.388C495.8 472.388 494.955 473.022 494.955 474.026C494.959 474.19 494.998 474.35 495.071 474.497C495.145 474.643 495.249 474.771 495.378 474.871C495.698 475.132 496.054 475.346 496.435 475.505C496.89 475.76 497.367 475.973 497.861 476.139C498.495 476.35 498.918 476.562 499.499 476.773C500.133 476.984 500.925 477.407 501.559 477.618C502.225 477.942 502.847 478.35 503.408 478.833C504.053 479.298 504.549 479.94 504.834 480.682C505.255 481.518 505.472 482.441 505.468 483.376C505.472 484.38 505.256 485.372 504.834 486.282C504.398 487.113 503.847 487.878 503.196 488.554C502.376 489.286 501.371 489.779 500.29 489.98C499.166 490.905 497.727 491.36 496.275 491.248" fill="#020304"/>
                        <path id="Path_287" d="M514.924 465.411C513.924 465.414 512.961 465.036 512.23 464.354C511.903 464.029 511.644 463.642 511.467 463.216C511.29 462.79 511.199 462.333 511.199 461.871C511.199 461.41 511.29 460.953 511.467 460.527C511.644 460.101 511.903 459.714 512.23 459.388C512.97 458.725 513.929 458.358 514.924 458.358C515.918 458.358 516.877 458.725 517.618 459.388C517.944 459.714 518.203 460.101 518.38 460.527C518.557 460.953 518.648 461.41 518.648 461.871C518.648 462.333 518.557 462.79 518.38 463.216C518.203 463.642 517.944 464.029 517.618 464.354V464.354C517.288 464.736 516.87 465.031 516.401 465.215C515.932 465.399 515.425 465.467 514.924 465.411M511.807 468.686H518.407V490.611H511.807V468.686Z" fill="#020304"/>
                        <path id="Path_288" d="M536.001 491.248C534.51 491.311 533.026 491.021 531.669 490.403C530.305 489.98 529.082 489.194 528.13 488.131C527.111 487.141 526.334 485.93 525.858 484.592C525.236 483.012 524.949 481.321 525.013 479.626C524.949 477.998 525.237 476.376 525.858 474.871C526.449 473.543 527.213 472.299 528.13 471.171C529.093 470.219 530.221 469.45 531.458 468.899C532.723 468.341 534.09 468.053 535.473 468.053C536.855 468.053 538.223 468.341 539.488 468.899C540.608 469.439 541.599 470.214 542.394 471.171C543.247 472.1 543.815 473.255 544.032 474.499C544.452 475.832 544.666 477.222 544.666 478.62V480.262C544.625 480.671 544.555 481.077 544.455 481.477H531.195C531.271 482.178 531.494 482.855 531.849 483.465C532.204 484.074 532.683 484.603 533.255 485.016C534.318 485.807 535.634 486.183 536.955 486.073C538.642 486.055 540.29 485.561 541.709 484.647L543.981 488.556C542.875 489.399 541.619 490.026 540.281 490.405C538.935 491.003 537.473 491.292 536.002 491.25M531.247 477.198H539.118C539.183 476.094 538.887 475 538.273 474.081C537.94 473.638 537.495 473.293 536.984 473.079C536.474 472.866 535.915 472.792 535.367 472.866C534.377 472.912 533.43 473.283 532.673 473.923C531.863 474.836 531.363 475.982 531.247 477.198" fill="#020304"/>
                        <path id="Path_289" d="M571.979 491.246C569.854 491.23 567.78 490.591 566.014 489.408C564.249 488.225 562.869 486.549 562.047 484.59C560.937 481.372 560.937 477.875 562.047 474.658C562.549 473.333 563.327 472.13 564.328 471.128C565.33 470.126 566.533 469.349 567.858 468.847C569.181 468.359 570.57 468.074 571.979 468.002C573.333 467.934 574.682 468.226 575.888 468.847C577.176 469.421 578.369 470.187 579.427 471.119C580.445 472.109 581.223 473.32 581.699 474.658C582.808 477.875 582.808 481.372 581.699 484.59C581.197 485.914 580.419 487.117 579.417 488.119C578.416 489.121 577.213 489.899 575.888 490.401C574.682 491.022 573.333 491.313 571.979 491.246M571.979 485.858C572.588 485.834 573.184 485.675 573.723 485.392C574.262 485.108 574.731 484.708 575.096 484.22C575.774 482.801 576.126 481.249 576.126 479.677C576.126 478.104 575.774 476.552 575.096 475.134C574.787 474.592 574.329 474.15 573.777 473.86C573.224 473.569 572.6 473.443 571.979 473.496C571.365 473.496 570.761 473.645 570.218 473.93C569.675 474.215 569.21 474.628 568.862 475.134C568.184 476.552 567.832 478.104 567.832 479.677C567.832 481.249 568.184 482.801 568.862 484.22C569.171 484.761 569.629 485.204 570.181 485.494C570.733 485.784 571.357 485.91 571.979 485.858Z" fill="#020304"/>
                        <path id="Path_290" d="M589.357 498.907V468.69H594.745L595.168 470.962H595.379C596.217 470.16 597.204 469.531 598.285 469.113C599.34 468.647 600.465 468.361 601.613 468.268C602.847 468.232 604.068 468.524 605.153 469.113C606.22 469.644 607.143 470.423 607.847 471.385C608.654 472.425 609.214 473.635 609.485 474.924C609.907 476.401 610.12 477.93 610.119 479.467C610.183 481.162 609.896 482.853 609.274 484.433C608.757 485.753 608.064 486.997 607.214 488.133C606.472 489.142 605.467 489.928 604.308 490.405C603.228 491.005 602.004 491.297 600.769 491.25C599.834 491.253 598.911 491.036 598.075 490.616C597.208 490.131 596.379 489.584 595.592 488.978L595.803 492.517V498.909L589.357 498.907ZM599.5 485.859C600.062 485.862 600.617 485.735 601.121 485.487C601.625 485.24 602.065 484.879 602.406 484.433C603.354 482.959 603.782 481.211 603.621 479.467C603.621 475.558 602.406 473.445 599.921 473.445C599.19 473.49 598.478 473.699 597.838 474.056C597.198 474.412 596.645 474.907 596.221 475.505V484.591C596.754 485.072 597.385 485.433 598.07 485.648C598.228 485.859 598.862 485.859 599.496 485.859" fill="#020304"/>
                        <path id="Path_291" d="M434.625 544.391C432.778 544.383 430.95 544.024 429.237 543.334C427.654 542.703 426.242 541.707 425.116 540.428C423.859 539.075 422.937 537.447 422.422 535.673C421.013 531.528 421.013 527.034 422.422 522.889C422.991 521.14 423.908 519.522 425.116 518.134C426.252 516.867 427.661 515.873 429.237 515.228C432.698 513.855 436.553 513.855 440.014 515.228C441.597 515.86 443.008 516.855 444.135 518.134C445.391 519.488 446.314 521.116 446.829 522.889C447.517 524.878 447.874 526.966 447.886 529.07C447.878 531.244 447.522 533.402 446.829 535.462C446.314 537.236 445.391 538.864 444.135 540.217C442.998 541.485 441.589 542.478 440.014 543.123C438.401 544.115 436.511 544.56 434.626 544.391M434.626 538.844C435.564 538.866 436.492 538.65 437.323 538.216C438.155 537.781 438.863 537.143 439.381 536.361C440.596 534.723 441.019 532.452 441.019 529.335C441.119 526.955 440.551 524.595 439.381 522.52C438.946 521.893 438.391 521.359 437.748 520.947C437.106 520.536 436.388 520.256 435.636 520.123C434.885 519.991 434.115 520.008 433.37 520.175C432.625 520.342 431.921 520.654 431.298 521.094C430.734 521.473 430.25 521.957 429.872 522.52C428.605 524.556 428.03 526.946 428.234 529.335C428.191 531.777 428.754 534.191 429.872 536.361C430.411 537.122 431.123 537.745 431.95 538.176C432.777 538.608 433.694 538.837 434.627 538.844" fill="#020304"/>
                        <path id="Path_292" d="M454.912 544.021V522.097H460.3L460.723 525.003H460.934C461.916 524.17 462.958 523.411 464.051 522.731C465.24 522.045 466.587 521.681 467.96 521.674C468.944 521.591 469.933 521.756 470.837 522.153C471.741 522.549 472.532 523.166 473.137 523.946C474.305 525.943 474.874 528.235 474.775 530.546V544.176H468.175V531.392C468.284 530.245 468.064 529.091 467.541 528.064C467.304 527.753 466.988 527.511 466.626 527.363C466.264 527.214 465.869 527.165 465.481 527.219C464.745 527.21 464.025 527.432 463.421 527.853C462.701 528.269 462.072 528.826 461.572 529.491V544.391H454.972V544.021H454.912Z" fill="#020304"/>
                        <path id="Path_293" d="M490.517 544.394C489.229 544.462 487.947 544.169 486.817 543.549C485.716 542.977 484.731 542.207 483.911 541.277C483.08 540.223 482.452 539.023 482.062 537.738C481.64 536.189 481.427 534.589 481.428 532.983C481.333 531.354 481.623 529.725 482.273 528.228C482.79 526.908 483.483 525.664 484.333 524.528C485.142 523.587 486.13 522.814 487.239 522.256C488.255 521.688 489.402 521.396 490.567 521.411C491.642 521.361 492.713 521.578 493.684 522.045C494.514 522.481 495.279 523.033 495.956 523.683L495.745 520.355V512.695H502.345V543.705H496.957L496.534 541.433H496.323C495.563 542.23 494.645 542.86 493.629 543.282C492.775 544.046 491.656 544.445 490.512 544.391M492.15 539.267C492.789 539.259 493.419 539.115 493.999 538.844C494.633 538.633 495.056 537.999 495.637 537.206V528.12C495.104 527.638 494.473 527.278 493.788 527.063C493.193 526.842 492.571 526.7 491.939 526.64C491.407 526.639 490.883 526.768 490.413 527.017C489.944 527.265 489.542 527.626 489.245 528.066C488.302 529.383 487.871 530.998 488.03 532.609C487.93 534.262 488.296 535.909 489.087 537.364C489.386 537.922 489.826 538.391 490.364 538.725C490.902 539.058 491.518 539.244 492.151 539.264" fill="#020304"/>
                        <path id="Path_294" d="M520.047 544.391C518.557 544.454 517.073 544.165 515.716 543.546C514.352 543.123 513.129 542.338 512.177 541.274C511.158 540.284 510.381 539.073 509.904 537.735C509.283 536.156 508.996 534.465 509.06 532.769C508.996 531.142 509.284 529.52 509.904 528.014C510.496 526.686 511.26 525.442 512.177 524.314C513.112 523.329 514.247 522.555 515.505 522.042C516.77 521.484 518.137 521.196 519.52 521.196C520.902 521.196 522.269 521.484 523.534 522.042C524.655 522.583 525.646 523.357 526.44 524.314C527.293 525.244 527.862 526.399 528.078 527.642C528.499 528.975 528.713 530.365 528.713 531.763V533.401C528.665 533.81 528.595 534.215 528.502 534.616H515.242C515.318 535.317 515.541 535.995 515.896 536.604C516.251 537.214 516.73 537.742 517.302 538.155C518.365 538.946 519.681 539.322 521.002 539.212C522.689 539.195 524.338 538.7 525.757 537.786L528.029 541.695C526.922 542.539 525.667 543.166 524.328 543.544C522.985 544.147 521.522 544.436 520.05 544.389M515.084 530.548H522.955C523.02 529.445 522.724 528.35 522.11 527.431C521.777 526.989 521.332 526.643 520.821 526.43C520.31 526.216 519.752 526.143 519.203 526.216C518.214 526.262 517.267 526.634 516.51 527.273C515.875 528.288 515.394 529.392 515.084 530.548" fill="#020304"/>
                        <path id="Path_295" d="M535.369 544.021V522.097H540.757L541.18 526.006H541.391C542.093 524.689 543.087 523.551 544.297 522.678C545.294 522.038 546.442 521.673 547.625 521.621C548.111 521.557 548.605 521.63 549.051 521.832C549.474 522.043 549.896 522.043 550.108 522.255L549.051 527.855C548.672 527.679 548.253 527.606 547.836 527.644H546.621C545.66 527.657 544.723 527.95 543.927 528.489C542.921 529.322 542.14 530.394 541.655 531.606V544.439H535.474V544.016L535.369 544.021Z" fill="#020304"/>
                        <path id="Path_296" d="M559.141 544.023L553.541 522.099H559.933L561.993 532.242C562.275 534.46 562.556 536.679 562.838 538.898H563.049C563.26 537.841 563.472 536.626 563.683 535.57L564.317 532.453L566.8 522.31H572.4L574.883 532.453C575.094 533.51 575.306 534.725 575.517 535.781C575.728 536.837 575.94 537.841 576.151 539.109H576.362C576.607 538.015 576.748 536.901 576.785 535.781C576.996 534.724 576.996 533.721 577.208 532.453L579.268 522.31H585.29L579.902 544.234H572.242L570.182 535.57L569.548 532.453C569.337 531.396 569.125 530.393 568.914 529.125H568.703C568.492 530.34 568.28 531.397 568.069 532.453L567.435 535.57L565.586 544.234H559.194L559.141 544.023Z" fill="#020304"/>
                        <path id="Path_297" d="M595.592 518.767C594.592 518.77 593.628 518.392 592.897 517.71C592.571 517.384 592.312 516.997 592.135 516.571C591.958 516.145 591.867 515.688 591.867 515.227C591.867 514.766 591.958 514.309 592.135 513.883C592.312 513.457 592.571 513.07 592.897 512.744V512.744C593.638 512.081 594.597 511.714 595.592 511.714C596.586 511.714 597.545 512.081 598.286 512.744C598.612 513.07 598.871 513.457 599.048 513.883C599.225 514.309 599.316 514.766 599.316 515.227C599.316 515.688 599.225 516.145 599.048 516.571C598.871 516.997 598.612 517.384 598.286 517.71V517.71C597.519 518.333 596.577 518.702 595.592 518.767M592.264 522.095H598.864V544.019H592.264V522.095Z" fill="#020304"/>
                        <path id="Path_298" d="M605.523 552.685C604.759 552.746 603.991 552.675 603.251 552.474C602.617 552.263 602.194 552.263 601.613 552.051L602.828 547.296C603.039 547.296 603.462 547.507 603.673 547.507H604.518C604.875 547.56 605.24 547.509 605.568 547.359C605.896 547.209 606.174 546.967 606.367 546.662C606.742 545.816 606.888 544.887 606.79 543.968V521.886H613.39V543.809C613.354 544.999 613.212 546.183 612.967 547.348C612.752 548.385 612.339 549.372 611.752 550.254C611.122 551.099 610.259 551.741 609.269 552.103C608.066 552.527 606.794 552.724 605.518 552.684M610.061 518.768C609.062 518.771 608.098 518.393 607.367 517.711C607.041 517.385 606.782 516.998 606.605 516.572C606.428 516.146 606.337 515.689 606.337 515.228C606.337 514.767 606.428 514.31 606.605 513.884C606.782 513.458 607.041 513.071 607.367 512.745V512.745C608.108 512.082 609.067 511.715 610.061 511.715C611.055 511.715 612.015 512.082 612.755 512.745C613.082 513.071 613.341 513.458 613.518 513.884C613.695 514.31 613.786 514.767 613.786 515.228C613.786 515.689 613.695 516.146 613.518 516.572C613.341 516.998 613.082 517.385 612.755 517.711V517.711C612.019 518.385 611.059 518.761 610.061 518.768" fill="#020304"/>
                        <path id="Path_299" d="M627.816 544.392C624.724 544.359 621.737 543.257 619.363 541.275L622.269 537.154C623.111 537.899 624.102 538.458 625.175 538.792C626.086 539.213 627.078 539.43 628.081 539.426C628.793 539.47 629.504 539.324 630.141 539.003C630.343 538.824 630.503 538.604 630.613 538.358C630.722 538.112 630.777 537.846 630.775 537.577C630.775 537.154 630.564 536.943 630.352 536.52C630.035 536.197 629.68 535.914 629.295 535.675C628.841 535.42 628.363 535.208 627.869 535.041C627.235 534.83 626.812 534.618 626.231 534.407C625.504 534.14 624.812 533.785 624.171 533.35L622.322 532.135C621.677 531.67 621.182 531.028 620.896 530.286C620.447 529.538 620.227 528.675 620.262 527.803C620.258 526.799 620.475 525.807 620.896 524.897C621.332 524.066 621.884 523.301 622.534 522.625C623.362 522.027 624.268 521.547 625.228 521.199C627.832 520.519 630.583 520.666 633.099 521.622C634.253 522.154 635.366 522.772 636.427 523.471L633.521 527.38C632.795 526.858 632.036 526.381 631.25 525.954C630.54 525.627 629.759 525.481 628.978 525.531C627.34 525.531 626.495 526.165 626.495 527.169C626.499 527.332 626.538 527.493 626.611 527.639C626.685 527.785 626.789 527.913 626.918 528.014C627.239 528.275 627.595 528.488 627.975 528.648C628.43 528.903 628.907 529.115 629.401 529.282C629.929 529.546 630.51 529.705 631.039 529.916C631.673 530.127 632.465 530.55 633.099 530.761L634.948 531.976C635.593 532.44 636.089 533.083 636.374 533.825C636.795 534.66 637.012 535.583 637.008 536.519C637.012 537.522 636.796 538.514 636.374 539.425C635.938 540.256 635.387 541.02 634.736 541.697C633.916 542.428 632.911 542.922 631.83 543.123C630.706 544.048 629.267 544.502 627.815 544.391" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__hover'>
                        <h4>Visie op onderwijs</h4>
                        <p>
                            De manier waarop de toetsing wordt ingericht is een middel om de visie op onderwijs te realiseren, in plaats van een doel op zich (Baartman, Van Schilt-Mol & Van der Vleuten, 2020). De visie op toetsing, die onderdeel uitmaakt van de visie op onderwijs, vormt het fundament voor het...
                        </p>
                        <p className='toetsmodel-component__center--read-more' onClick={() => setOpen(true)}>Lees meer...</p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="blue-1">
                            <path id="Blue_-_1-2" d="M399.019 371.909C412.149 371.909 422.792 361.266 422.792 348.136C422.792 335.007 412.149 324.363 399.019 324.363C385.89 324.363 375.246 335.007 375.246 348.136C375.246 361.266 385.89 371.909 399.019 371.909Z" fill="#A2D3E1"/>
                            <path id="Blue_-_1" d="M391.41 361.977V357.222H397.01V342.322H392.255V338.622C393.476 338.424 394.665 338.068 395.794 337.565C396.788 337.143 397.758 336.667 398.7 336.139H403.032V357.006H407.787V361.761H391.463V361.972L391.41 361.977Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="blue-2">
                            <path id="Blue_-_2-2" d="M350.47 323.836C363.6 323.836 374.243 313.193 374.243 300.063C374.243 286.934 363.6 276.29 350.47 276.29C337.341 276.29 326.697 286.934 326.697 300.063C326.697 313.193 337.341 323.836 350.47 323.836Z" fill="#87C6D9"/>
                            <path id="Blue_-_2" d="M341.173 312.952V309.624C342.811 308.198 344.29 306.718 345.716 305.292C347.142 303.866 348.199 302.809 349.255 301.592C350.09 300.538 350.849 299.426 351.527 298.264C352.045 297.38 352.335 296.382 352.372 295.358C352.399 294.828 352.319 294.297 352.138 293.798C351.956 293.299 351.677 292.841 351.315 292.452C350.963 292.1 350.542 291.825 350.078 291.643C349.615 291.461 349.119 291.377 348.621 291.395C348.171 291.361 347.72 291.418 347.293 291.563C346.866 291.708 346.473 291.939 346.138 292.24C345.504 292.874 344.712 293.455 344.078 294.089L340.75 290.972C341.855 289.706 343.179 288.65 344.659 287.855C346.114 287.065 347.761 286.699 349.414 286.798C350.622 286.799 351.82 287.013 352.953 287.432C353.909 287.876 354.813 288.425 355.647 289.07C356.392 289.748 356.956 290.601 357.285 291.553C357.708 292.612 357.923 293.741 357.919 294.881C357.918 296.02 357.703 297.149 357.285 298.209C356.805 299.389 356.185 300.507 355.436 301.537C354.596 302.693 353.697 303.803 352.742 304.865C351.685 305.922 350.682 307.137 349.625 308.193C350.259 308.193 351.051 307.982 351.685 307.982H358.922V312.948L341.173 312.952Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                            Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="blue-3">
                            <path id="Blue_-_3-2" d="M301.869 278.668C314.998 278.668 325.642 268.025 325.642 254.895C325.642 241.766 314.998 231.122 301.869 231.122C288.739 231.122 278.096 241.766 278.096 254.895C278.096 268.025 288.739 278.668 301.869 278.668Z" fill="#74BED3"/>
                            <path id="Blue_-_3" d="M302.291 266.411C300.442 266.434 298.607 266.074 296.903 265.354C295.486 264.82 294.256 263.884 293.363 262.66L296.057 258.96C296.789 259.696 297.626 260.319 298.54 260.809C299.5 261.328 300.567 261.618 301.657 261.654C302.761 261.72 303.855 261.423 304.774 260.809C305.139 260.561 305.43 260.219 305.617 259.819C305.803 259.419 305.877 258.976 305.831 258.537C305.895 258.051 305.822 257.557 305.62 257.111C305.356 256.637 304.996 256.223 304.563 255.896C303.91 255.538 303.219 255.255 302.503 255.051C301.335 254.847 300.147 254.776 298.963 254.839V250.718C300.595 250.852 302.233 250.561 303.718 249.873C304.169 249.635 304.537 249.266 304.775 248.816C304.948 248.362 305.02 247.875 304.986 247.39C305.036 247.003 304.984 246.61 304.836 246.249C304.688 245.887 304.448 245.571 304.141 245.33C303.494 244.812 302.698 244.516 301.869 244.485C301.002 244.488 300.149 244.706 299.386 245.119C298.587 245.604 297.827 246.152 297.114 246.757L294.208 243.057C295.352 242.104 296.592 241.272 297.908 240.574C299.266 239.956 300.75 239.666 302.24 239.729C303.432 239.74 304.619 239.881 305.779 240.152C306.758 240.456 307.672 240.939 308.473 241.578C309.257 242.182 309.89 242.96 310.322 243.85C310.744 244.761 310.96 245.753 310.956 246.756C310.956 248.014 310.588 249.243 309.899 250.295C308.988 251.214 307.936 251.981 306.782 252.567V252.778C308.194 253.198 309.47 253.981 310.482 255.05C310.982 255.608 311.365 256.26 311.61 256.967C311.855 257.675 311.956 258.424 311.908 259.171C311.974 260.274 311.677 261.369 311.063 262.288C310.551 263.187 309.848 263.962 309.003 264.56C308.044 265.194 306.993 265.675 305.886 265.986C304.704 266.237 303.502 266.379 302.294 266.409" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="blue-4">
                            <path id="Blue_-_4-2" d="M258.074 231.123C271.203 231.123 281.847 220.48 281.847 207.35C281.847 194.221 271.203 183.577 258.074 183.577C244.944 183.577 234.301 194.221 234.301 207.35C234.301 220.48 244.944 231.123 258.074 231.123Z" fill="#45A7C3"/>
                            <path id="Blue_-_4" d="M257.811 219.236V213.055H246.664V208.934L255.964 193.403H263.201V208.303H266.107V212.846H263.201V219.027H257.813L257.811 219.236ZM252.423 208.723H257.811V201.697C257.811 200.64 258.022 199.637 258.022 198.791H257.811C257.388 199.425 257.177 200.217 256.754 200.851C256.331 201.696 256.12 202.277 255.697 203.123L252.423 208.723Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="purple-1">
                            <path id="Paars_-_1-2" d="M720.628 587.447C733.758 587.447 744.401 576.804 744.401 563.674C744.401 550.545 733.758 539.901 720.628 539.901C707.499 539.901 696.855 550.545 696.855 563.674C696.855 576.804 707.499 587.447 720.628 587.447Z" fill="#D7B8D6"/>
                            <path id="Paars_-_1" d="M712.229 575.877V571.123H717.828V556.223H713.074V552.523C714.295 552.325 715.484 551.97 716.614 551.466C717.608 551.044 718.578 550.568 719.52 550.04H723.851V570.907H728.606V575.662H712.282V575.873L712.229 575.877Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="purple-2">
                            <path id="Paars_-_2-2" d="M778.896 620.785C792.026 620.785 802.669 610.142 802.669 597.012C802.669 583.883 792.026 573.239 778.896 573.239C765.767 573.239 755.123 583.883 755.123 597.012C755.123 610.142 765.767 620.785 778.896 620.785Z" fill="#CBA3CA"/>
                            <path id="Paars_-_2" d="M769.704 609.003V605.675C771.342 604.249 772.821 602.769 774.247 601.343C775.673 599.917 776.73 598.86 777.787 597.643C778.622 596.589 779.381 595.476 780.058 594.315C780.576 593.431 780.866 592.433 780.903 591.409C780.93 590.878 780.851 590.348 780.669 589.849C780.488 589.35 780.208 588.892 779.846 588.503C779.494 588.151 779.073 587.876 778.609 587.694C778.146 587.512 777.65 587.427 777.152 587.446C776.703 587.411 776.251 587.468 775.824 587.613C775.397 587.759 775.004 587.989 774.669 588.291C774.035 588.925 773.243 589.506 772.609 590.14L769.281 587.023C770.394 585.744 771.738 584.686 773.243 583.906C774.698 583.116 776.345 582.75 777.997 582.849C779.205 582.849 780.404 583.064 781.537 583.483C782.494 583.927 783.397 584.476 784.231 585.121C784.977 585.798 785.54 586.652 785.869 587.604C786.292 588.662 786.507 589.792 786.503 590.932C786.502 592.071 786.287 593.2 785.869 594.26C785.39 595.44 784.769 596.557 784.02 597.588C783.181 598.743 782.281 599.854 781.326 600.916C780.27 601.973 779.266 603.188 778.209 604.244C778.843 604.244 779.635 604.033 780.269 604.033H787.506V608.999L769.704 609.003Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                            Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="purple-3">
                            <path id="Paars_-_3-2" d="M835 660.719C848.129 660.719 858.773 650.075 858.773 636.946C858.773 623.816 848.129 613.173 835 613.173C821.87 613.173 811.227 623.816 811.227 636.946C811.227 650.075 821.87 660.719 835 660.719Z" fill="#C395C1"/>
                            <path id="Paars_-_3" d="M834.259 649.096C832.409 649.118 830.575 648.759 828.871 648.04C827.454 647.506 826.224 646.569 825.332 645.346L828.026 641.646C828.758 642.381 829.594 643.005 830.509 643.495C831.469 644.014 832.536 644.303 833.626 644.34C834.729 644.405 835.824 644.109 836.743 643.495C837.108 643.247 837.399 642.905 837.585 642.505C837.771 642.105 837.846 641.662 837.8 641.223C837.864 640.737 837.791 640.243 837.589 639.797C837.325 639.323 836.965 638.909 836.532 638.582C835.879 638.224 835.188 637.94 834.472 637.737C833.304 637.533 832.116 637.463 830.932 637.526V633.405C831.906 633.466 832.883 633.395 833.838 633.194C834.472 633.038 835.091 632.826 835.687 632.56C836.137 632.321 836.505 631.953 836.743 631.503C836.916 631.048 836.988 630.562 836.954 630.077C837.004 629.69 836.952 629.296 836.804 628.935C836.656 628.574 836.416 628.257 836.109 628.017C835.462 627.499 834.665 627.203 833.837 627.172C832.97 627.175 832.117 627.393 831.354 627.806C830.555 628.291 829.796 628.839 829.083 629.444L826.177 625.744C827.321 624.79 828.561 623.958 829.877 623.261C831.235 622.642 832.719 622.353 834.209 622.416C835.401 622.426 836.588 622.568 837.748 622.839C838.727 623.142 839.64 623.626 840.442 624.265C841.226 624.869 841.859 625.646 842.291 626.537C842.713 627.447 842.929 628.439 842.925 629.443C842.924 630.7 842.557 631.93 841.868 632.982C840.957 633.901 839.905 634.668 838.751 635.254V635.465C840.162 635.884 841.438 636.667 842.451 637.736C842.95 638.294 843.334 638.945 843.578 639.653C843.823 640.36 843.925 641.11 843.877 641.857C843.943 642.96 843.646 644.055 843.032 644.974C842.519 645.872 841.816 646.648 840.972 647.246C840.013 647.879 838.962 648.36 837.855 648.672C836.674 648.925 835.471 649.067 834.263 649.094" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="purple-4">
                            <path id="Paars_-_4-2" d="M889.941 695.955C903.07 695.955 913.714 685.312 913.714 672.182C913.714 659.053 903.07 648.409 889.941 648.409C876.812 648.409 866.168 659.053 866.168 672.182C866.168 685.312 876.812 695.955 889.941 695.955Z" fill="#AF72AD"/>
                            <path id="Paars_-_4" d="M893.639 686.076V679.895H882.492V675.774L891.792 660.243H899.029V675.143H901.935V679.686H899.029V685.867H893.641L893.639 686.076ZM888.25 675.352H893.638V668.326C893.638 667.269 893.849 666.266 893.849 665.42H893.638C893.215 666.054 893.004 666.846 892.581 667.48C892.158 668.325 891.947 668.906 891.524 669.752L888.25 675.352Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="green-1">
                            <path id="Groen_-_1c" d="M336.259 587.975C349.389 587.975 360.032 577.331 360.032 564.202C360.032 551.072 349.389 540.429 336.259 540.429C323.13 540.429 312.486 551.072 312.486 564.202C312.486 577.331 323.13 587.975 336.259 587.975Z" fill="#A2D6A3"/>
                            <path id="Green_-_1" d="M327.912 575.877V571.123H333.512V556.223H328.757V552.523C329.978 552.325 331.168 551.97 332.297 551.466C333.291 551.044 334.261 550.568 335.203 550.04H339.535V570.907H344.29V575.662H327.965V575.873L327.912 575.877Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="green-2">
                            <path id="Groen_-_2c" d="M272.179 614.283C285.309 614.283 295.952 603.64 295.952 590.51C295.952 577.381 285.309 566.737 272.179 566.737C259.05 566.737 248.406 577.381 248.406 590.51C248.406 603.64 259.05 614.283 272.179 614.283Z" fill="#87CA88"/>
                            <path id="Green_-_2" d="M263.411 602.132V598.804C265.049 597.378 266.528 595.898 267.954 594.472C269.38 593.046 270.437 591.989 271.493 590.772C272.328 589.718 273.088 588.605 273.765 587.444C274.283 586.56 274.573 585.561 274.61 584.538C274.637 584.007 274.558 583.477 274.376 582.978C274.195 582.479 273.915 582.021 273.553 581.632C273.201 581.28 272.78 581.004 272.316 580.823C271.853 580.641 271.357 580.556 270.859 580.575C270.41 580.54 269.958 580.597 269.531 580.742C269.104 580.888 268.711 581.118 268.376 581.42C267.742 582.054 266.95 582.635 266.316 583.269L262.988 580.152C264.093 578.886 265.417 577.83 266.897 577.035C268.352 576.245 270 575.879 271.652 575.978C272.86 575.978 274.059 576.193 275.192 576.612C276.149 577.056 277.052 577.605 277.886 578.25C278.632 578.927 279.195 579.781 279.524 580.733C279.947 581.791 280.163 582.921 280.158 584.061C280.158 585.2 279.943 586.329 279.524 587.389C279.045 588.569 278.424 589.686 277.675 590.717C276.836 591.872 275.936 592.983 274.981 594.045C273.924 595.101 272.921 596.316 271.864 597.373C272.498 597.373 273.29 597.162 273.924 597.162H281.161V602.128L263.411 602.132Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                            Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="green-3">
                            <path id="Groen_-_3c" d="M214.384 640.275C227.514 640.275 238.157 629.631 238.157 616.502C238.157 603.372 227.514 592.729 214.384 592.729C201.255 592.729 190.611 603.372 190.611 616.502C190.611 629.631 201.255 640.275 214.384 640.275Z" fill="#74C176"/>
                            <path id="Green_-_3" d="M214.173 629.655C212.324 629.678 210.489 629.318 208.785 628.599C207.368 628.065 206.138 627.129 205.246 625.905L207.94 622.205C208.672 622.941 209.508 623.564 210.423 624.054C211.383 624.574 212.45 624.863 213.54 624.899C214.643 624.965 215.738 624.668 216.657 624.054C217.022 623.806 217.313 623.464 217.499 623.064C217.686 622.664 217.76 622.221 217.714 621.782C217.778 621.296 217.705 620.803 217.503 620.356C217.239 619.882 216.879 619.468 216.446 619.141C215.793 618.783 215.102 618.5 214.386 618.296C213.218 618.093 212.031 618.022 210.847 618.085V613.964C211.821 614.026 212.798 613.955 213.753 613.753C214.387 613.598 215.006 613.385 215.602 613.119C216.052 612.881 216.421 612.513 216.659 612.063C216.832 611.609 216.904 611.122 216.87 610.637C216.92 610.25 216.868 609.857 216.72 609.496C216.572 609.134 216.332 608.818 216.025 608.577C215.378 608.059 214.581 607.763 213.753 607.732C212.886 607.736 212.033 607.953 211.27 608.366C210.471 608.852 209.711 609.399 208.998 610.004L206.092 606.304C207.236 605.351 208.476 604.519 209.792 603.821C211.15 603.203 212.634 602.913 214.124 602.976C215.316 602.987 216.503 603.128 217.663 603.399C218.642 603.703 219.556 604.187 220.357 604.825C221.141 605.429 221.774 606.207 222.206 607.097C222.628 608.008 222.844 609 222.84 610.003C222.839 611.261 222.472 612.49 221.783 613.542C220.872 614.461 219.82 615.228 218.666 615.814V616.025C220.077 616.444 221.353 617.228 222.366 618.296C222.865 618.854 223.249 619.506 223.494 620.213C223.738 620.921 223.84 621.67 223.792 622.417C223.858 623.521 223.561 624.615 222.947 625.534C222.434 626.433 221.731 627.208 220.887 627.806C219.928 628.44 218.877 628.921 217.77 629.232C216.584 629.457 215.384 629.598 214.178 629.654" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="green-4">
                            <path id="Groen_-_4c" d="M159.443 673.767C172.572 673.767 183.216 663.123 183.216 649.994C183.216 636.864 172.572 626.221 159.443 626.221C146.313 626.221 135.67 636.864 135.67 649.994C135.67 663.123 146.313 673.767 159.443 673.767Z" fill="#46AD48"/>
                            <path id="Green_-_4" d="M159.76 661.669V655.488H148.613V651.367L157.913 635.836H165.15V650.736H168.056V655.279H165.15V661.46H159.762L159.76 661.669ZM154.372 650.945H159.76V643.919C159.76 642.862 159.971 641.859 159.971 641.013H159.76C159.337 641.647 159.126 642.439 158.703 643.073C158.28 643.918 158.069 644.499 157.646 645.344L154.372 650.945Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="orange-1">
                            <path id="Oranje_-_1-2" d="M530.134 733.357C543.264 733.357 553.907 722.713 553.907 709.584C553.907 696.454 543.264 685.811 530.134 685.811C517.005 685.811 506.361 696.454 506.361 709.584C506.361 722.713 517.005 733.357 530.134 733.357Z" fill="#F6BC87"/>
                            <path id="Oranje_-_1" d="M522.156 721.893V717.138H527.756V702.238H523.001V698.538C524.222 698.34 525.412 697.984 526.541 697.481C527.535 697.059 528.505 696.583 529.447 696.055H533.779V716.922H538.534V721.676H522.21V721.887L522.156 721.893Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="orange-2">
                            <path id="Oranje_-_2-2" d="M529.605 795.43C542.734 795.43 553.378 784.786 553.378 771.657C553.378 758.527 542.734 747.884 529.605 747.884C516.476 747.884 505.832 758.527 505.832 771.657C505.832 784.786 516.476 795.43 529.605 795.43Z" fill="#F3A963"/>
                            <path id="Oranje_-_2" d="M520.677 783.12V779.792C522.315 778.366 523.794 776.886 525.22 775.46C526.646 774.034 527.703 772.977 528.759 771.76C529.594 770.706 530.353 769.594 531.031 768.432C531.549 767.548 531.839 766.55 531.876 765.526C531.903 764.996 531.823 764.465 531.642 763.966C531.46 763.467 531.18 763.009 530.819 762.62C530.467 762.268 530.046 761.993 529.582 761.811C529.119 761.629 528.622 761.545 528.125 761.563C527.675 761.528 527.223 761.585 526.797 761.731C526.37 761.876 525.977 762.106 525.642 762.408C525.008 763.042 524.216 763.623 523.582 764.257L520.254 761.14C521.359 759.874 522.683 758.818 524.163 758.023C525.618 757.233 527.265 756.867 528.918 756.966C530.126 756.967 531.324 757.181 532.457 757.6C533.413 758.044 534.317 758.593 535.151 759.238C535.896 759.916 536.459 760.769 536.789 761.721C537.212 762.78 537.427 763.909 537.423 765.049C537.422 766.188 537.207 767.317 536.789 768.377C536.309 769.557 535.688 770.675 534.94 771.705C534.1 772.86 533.201 773.971 532.246 775.033C531.189 776.09 530.186 777.305 529.129 778.361C529.763 778.361 530.555 778.15 531.189 778.15H538.426V783.116L520.677 783.12Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                            Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="orange-3">
                            <path id="Oranje_-_3-2" d="M529.605 862.257C542.734 862.257 553.378 851.613 553.378 838.484C553.378 825.354 542.734 814.711 529.605 814.711C516.476 814.711 505.832 825.354 505.832 838.484C505.832 851.613 516.476 862.257 529.605 862.257Z" fill="#F19B4B"/>
                            <path id="Oranje_-_3" d="M528.97 850.951C527.12 850.974 525.286 850.614 523.582 849.894C522.165 849.36 520.935 848.424 520.043 847.2L522.737 843.5C523.468 844.236 524.305 844.859 525.22 845.349C526.179 845.868 527.247 846.158 528.337 846.194C529.44 846.26 530.535 845.963 531.454 845.349C531.819 845.101 532.11 844.759 532.296 844.359C532.482 843.959 532.557 843.516 532.511 843.077C532.575 842.591 532.502 842.098 532.3 841.651C532.036 841.177 531.676 840.763 531.243 840.436C530.59 840.078 529.899 839.795 529.183 839.591C528.015 839.388 526.828 839.317 525.644 839.38V835.259C526.618 835.321 527.595 835.25 528.55 835.048C529.184 834.893 529.803 834.681 530.399 834.414C530.849 834.176 531.217 833.807 531.456 833.357C531.629 832.903 531.701 832.416 531.667 831.931C531.716 831.544 531.665 831.151 531.517 830.79C531.368 830.428 531.129 830.112 530.822 829.871C530.175 829.353 529.378 829.057 528.55 829.026C527.683 829.03 526.83 829.247 526.067 829.66C525.268 830.145 524.508 830.693 523.795 831.298L520.889 827.598C522.033 826.645 523.273 825.813 524.589 825.115C525.946 824.497 527.431 824.207 528.921 824.27C530.113 824.281 531.299 824.422 532.46 824.693C533.439 824.997 534.352 825.481 535.154 826.119C535.938 826.723 536.571 827.501 537.003 828.391C537.425 829.302 537.641 830.294 537.637 831.297C537.636 832.555 537.269 833.784 536.58 834.836C535.669 835.755 534.617 836.522 533.463 837.108V837.319C534.874 837.739 536.15 838.522 537.163 839.591C537.662 840.149 538.046 840.801 538.29 841.508C538.535 842.216 538.637 842.965 538.589 843.712C538.655 844.816 538.358 845.91 537.744 846.829C537.231 847.728 536.528 848.503 535.684 849.101C534.725 849.735 533.673 850.216 532.567 850.527C531.39 850.807 530.185 850.949 528.975 850.95" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="orange-4">
                            <path id="Oranje_-_4-2" d="M531.191 925.598C544.32 925.598 554.964 914.954 554.964 901.825C554.964 888.695 544.32 878.052 531.191 878.052C518.062 878.052 507.418 888.695 507.418 901.825C507.418 914.954 518.062 925.598 531.191 925.598Z" fill="#ED7A0F"/>
                            <path id="Oranje_-_4" d="M531.032 913.394V907.213H519.885V903.092L529.185 887.561H536.422V902.461H539.328V907.004H536.422V913.185H531.034L531.032 913.394ZM525.644 902.67H531.032V895.644C531.032 894.587 531.243 893.584 531.243 892.738H531.032C530.609 893.372 530.398 894.164 529.975 894.798C529.552 895.643 529.341 896.224 528.918 897.07L525.644 902.67Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="turqoise-1">
                            <path id="Turqoise_-_1-2" d="M662.728 369.268C675.858 369.268 686.501 358.624 686.501 345.495C686.501 332.365 675.858 321.722 662.728 321.722C649.599 321.722 638.955 332.365 638.955 345.495C638.955 358.624 649.599 369.268 662.728 369.268Z" fill="#96D9D2"/>
                            <path id="Turqoise_-_1" d="M654.488 361.977V357.222H660.088V342.322H655.334V338.622C656.555 338.424 657.744 338.068 658.873 337.565C659.867 337.143 660.837 336.667 661.779 336.139H666.111V357.006H670.865V361.761H654.541L654.488 361.977Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="turqoise-2">
                            <path id="Turqoise_-_2-2" d="M710.273 321.723C723.402 321.723 734.046 311.079 734.046 297.95C734.046 284.82 723.402 274.177 710.273 274.177C697.144 274.177 686.5 284.82 686.5 297.95C686.5 311.079 697.144 321.723 710.273 321.723Z" fill="#77CEC5"/>
                            <path id="Turqoise_-_2" d="M701.449 313.586V310.258C703.087 308.832 704.566 307.352 705.992 305.926C707.418 304.5 708.475 303.443 709.532 302.226C710.367 301.172 711.127 300.06 711.804 298.898C712.322 298.014 712.612 297.016 712.649 295.992C712.676 295.461 712.597 294.931 712.415 294.432C712.234 293.933 711.954 293.475 711.592 293.086C711.24 292.734 710.819 292.459 710.355 292.277C709.892 292.095 709.396 292.01 708.898 292.029C708.449 291.994 707.997 292.051 707.57 292.196C707.143 292.342 706.75 292.572 706.415 292.874C705.781 293.508 704.989 294.089 704.355 294.723L701.027 291.606C702.132 290.34 703.456 289.284 704.936 288.489C706.391 287.699 708.038 287.333 709.69 287.432C710.899 287.432 712.097 287.647 713.23 288.066C714.187 288.51 715.09 289.059 715.924 289.704C716.67 290.381 717.233 291.235 717.562 292.187C717.985 293.245 718.201 294.375 718.196 295.515C718.196 296.654 717.98 297.783 717.562 298.843C717.083 300.023 716.462 301.14 715.713 302.171C714.874 303.326 713.974 304.437 713.019 305.499C711.962 306.556 710.959 307.771 709.902 308.827C710.536 308.827 711.328 308.616 711.962 308.616H719.199V313.582L701.449 313.586Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                            Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="turqoise-3">
                            <path id="Turqoise_-_3-2" d="M756.287 278.668C769.416 278.668 780.06 268.025 780.06 254.895C780.06 241.766 769.416 231.122 756.287 231.122C743.157 231.122 732.514 241.766 732.514 254.895C732.514 268.025 743.157 278.668 756.287 278.668Z" fill="#62C6BB"/>
                            <path id="Turqoise_-_3" d="M754.014 269.95C752.164 269.973 750.33 269.613 748.626 268.893C747.209 268.359 745.978 267.423 745.086 266.199L747.78 262.499C748.511 263.235 749.348 263.858 750.263 264.348C751.222 264.868 752.29 265.157 753.38 265.193C754.483 265.259 755.578 264.962 756.497 264.348C756.862 264.1 757.153 263.758 757.339 263.358C757.525 262.958 757.6 262.515 757.554 262.076C757.618 261.59 757.545 261.097 757.343 260.65C757.079 260.176 756.719 259.762 756.286 259.435C755.633 259.077 754.942 258.794 754.226 258.59C753.058 258.387 751.871 258.316 750.687 258.379V254.258C751.661 254.32 752.638 254.249 753.593 254.047C754.227 253.892 754.846 253.679 755.442 253.413C755.892 253.175 756.26 252.806 756.499 252.356C756.672 251.902 756.744 251.415 756.71 250.93C756.76 250.543 756.708 250.15 756.56 249.789C756.411 249.427 756.172 249.111 755.865 248.87C755.218 248.353 754.422 248.056 753.594 248.025C752.727 248.028 751.874 248.246 751.111 248.659C750.312 249.145 749.552 249.692 748.839 250.297L745.933 246.597C747.077 245.644 748.317 244.812 749.633 244.114C750.99 243.496 752.475 243.206 753.965 243.269C755.157 243.28 756.344 243.421 757.505 243.692C758.484 243.996 759.397 244.48 760.199 245.118C760.983 245.722 761.616 246.5 762.048 247.39C762.47 248.301 762.686 249.293 762.682 250.296C762.681 251.554 762.314 252.783 761.625 253.835C760.714 254.754 759.662 255.521 758.508 256.107V256.318C759.919 256.738 761.195 257.521 762.208 258.59C762.707 259.148 763.091 259.8 763.335 260.507C763.58 261.215 763.682 261.964 763.634 262.711C763.7 263.815 763.403 264.909 762.789 265.828C762.276 266.727 761.573 267.502 760.729 268.1C759.77 268.734 758.718 269.215 757.612 269.526C756.445 269.858 755.232 270.001 754.02 269.949" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="turqoise-4">
                            <path id="Turqoise_-_4-2" d="M801.877 234.293C815.006 234.293 825.65 223.65 825.65 210.52C825.65 197.391 815.006 186.747 801.877 186.747C788.747 186.747 778.104 197.391 778.104 210.52C778.104 223.65 788.747 234.293 801.877 234.293Z" fill="#2DB3A5"/>
                            <path id="Turqoise_-_4" d="M802.827 222.775V216.594H791.68V212.473L800.98 196.942H808.217V211.787H811.123V216.33H808.217V222.511H802.829L802.827 222.775ZM797.438 211.998H802.826V204.972C802.826 203.915 803.037 202.912 803.037 202.066H802.826C802.403 202.7 802.192 203.492 801.769 204.126C801.346 204.971 801.135 205.552 800.712 206.398L797.438 211.998Z" fill="#020304"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                            Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="toetstaken-bg">
                            <path id="Path 9" d="M320.561 102.494C320.479 105.097 319.684 107.628 318.263 109.811C316.842 111.994 314.849 113.744 312.501 114.872C262.217 139.154 223.035 177.65 199.005 205.693C172.678 236.4 158.259 261.678 158.138 261.936C156.275 265.221 153.184 267.633 149.545 268.644C145.905 269.654 142.014 269.179 138.723 267.325C135.433 265.47 133.012 262.386 131.992 258.75C130.971 255.113 131.435 251.22 133.28 247.925C133.922 246.841 148.894 220.454 176.864 187.678C193.293 168.448 210.787 150.973 228.959 135.775C251.777 116.623 275.719 100.942 300.079 89.1668C302.293 88.1142 304.74 87.6471 307.186 87.8101C309.632 87.9731 311.996 88.7608 314.051 90.0978C316.105 91.4349 317.783 93.2766 318.923 95.4469C320.063 97.6173 320.627 100.044 320.561 102.494V102.494Z" fill="white"/>
                            <g id="toetstaken">
                                <path id="Path_320" d="M170.484 228.164L160.13 220.293L157.436 223.832L154.953 221.983L162.402 212.051L164.885 213.9L162.191 217.439L172.545 225.31L170.484 228.164Z" fill="#020304"/>
                                <path id="Path_321" d="M179.835 216.753C179.38 217.324 178.825 217.807 178.197 218.179C177.579 218.57 176.868 218.789 176.137 218.813C175.304 218.85 174.469 218.779 173.654 218.602C172.765 218.338 171.926 217.927 171.171 217.387C170.385 216.875 169.747 216.164 169.322 215.327C168.963 214.601 168.68 213.839 168.477 213.055C168.443 212.291 168.514 211.527 168.688 210.783C168.912 210.037 169.27 209.339 169.745 208.723C170.2 208.152 170.755 207.669 171.383 207.297C172.001 206.906 172.712 206.687 173.443 206.663C174.207 206.602 174.976 206.673 175.715 206.874C176.605 207.138 177.444 207.549 178.198 208.089C178.985 208.601 179.623 209.312 180.047 210.149C180.406 210.875 180.69 211.636 180.892 212.421C180.927 213.184 180.856 213.949 180.681 214.693C180.694 215.076 180.626 215.458 180.48 215.814C180.334 216.169 180.115 216.489 179.836 216.753M177.564 214.904C177.772 214.649 177.918 214.349 177.992 214.029C178.065 213.708 178.063 213.375 177.987 213.055C177.642 212.23 177.075 211.517 176.349 210.995C175.664 210.468 174.896 210.057 174.077 209.78C173.406 209.771 172.753 209.995 172.228 210.414C172.021 210.669 171.874 210.968 171.801 211.289C171.728 211.61 171.729 211.943 171.805 212.263C172.15 213.088 172.717 213.801 173.443 214.323C174.129 214.85 174.896 215.26 175.715 215.538C176.049 215.663 176.416 215.668 176.754 215.553C177.091 215.437 177.378 215.208 177.564 214.904" fill="#020304"/>
                                <path id="Path_322" d="M189.344 205.395C188.78 205.997 188.161 206.545 187.495 207.033C186.811 207.45 186.024 207.669 185.223 207.667C184.44 207.769 183.645 207.62 182.951 207.244C182.091 206.955 181.313 206.466 180.679 205.818C179.965 205.284 179.4 204.574 179.041 203.758C178.624 203.073 178.404 202.287 178.407 201.486C178.372 200.722 178.443 199.958 178.618 199.214C178.832 198.528 179.193 197.897 179.675 197.365C180.242 196.828 180.861 196.35 181.524 195.939C182.177 195.667 182.877 195.523 183.584 195.516C184.288 195.549 184.983 195.692 185.644 195.939C186.31 196.262 186.932 196.671 187.493 197.154L188.127 197.788L188.55 198.211L183.795 203.811C184.47 204.237 185.283 204.388 186.067 204.234C186.763 203.961 187.395 203.546 187.921 203.016C188.26 202.698 188.528 202.313 188.71 201.885C188.892 201.458 188.984 200.997 188.978 200.533L191.461 200.956C191.464 201.757 191.244 202.543 190.827 203.228C190.471 204.034 189.97 204.768 189.348 205.394M181.899 202.277L184.805 198.949C184.299 198.595 183.748 198.311 183.167 198.104C182.873 198.09 182.581 198.163 182.328 198.313C182.074 198.463 181.87 198.684 181.741 198.949C181.374 199.338 181.151 199.841 181.107 200.375C181.051 200.734 181.095 201.101 181.235 201.436C181.374 201.772 181.604 202.062 181.899 202.275" fill="#020304"/>
                                <path id="Path_323" d="M198.008 195.886C197.656 196.387 197.19 196.797 196.648 197.082C196.105 197.367 195.503 197.518 194.891 197.524C194.323 197.49 193.767 197.346 193.253 197.101C192.658 196.831 192.107 196.475 191.615 196.044L187.915 192.769L186.858 193.984L184.798 192.135L186.013 190.709L183.953 188.226L186.013 185.954L188.496 188.226L190.345 186.166L192.405 188.015L190.556 190.075L194.095 193.403C194.485 193.77 194.988 193.994 195.521 194.037C195.739 194.041 195.954 193.984 196.141 193.872C196.328 193.76 196.479 193.597 196.578 193.403L197.001 192.98C197.078 192.894 197.136 192.794 197.172 192.685C197.208 192.576 197.222 192.461 197.212 192.346L199.484 193.772C199.223 194.092 199.01 194.448 198.85 194.829C198.639 195.252 198.216 195.463 198.005 195.886" fill="#020304"/>
                                <path id="Path_324" d="M204.24 189.071C203.647 189.668 202.948 190.152 202.18 190.497C201.381 190.857 200.55 191.14 199.697 191.342L199.274 188.648C199.908 188.437 200.489 188.437 201.123 188.225C201.546 188.014 202.18 187.802 202.338 187.38C202.657 187.104 202.879 186.734 202.972 186.323C203.01 186.025 202.935 185.723 202.761 185.478C202.585 185.349 202.372 185.279 202.154 185.279C201.935 185.279 201.722 185.349 201.546 185.478C201.232 185.542 200.941 185.688 200.701 185.901C200.49 186.112 200.067 186.112 199.856 186.324C199.482 186.542 199.07 186.686 198.641 186.747C197.834 187.011 196.965 187.011 196.158 186.747L194.943 186.113C194.597 185.756 194.312 185.346 194.098 184.898C193.925 184.443 193.853 183.957 193.887 183.472C193.946 182.909 194.088 182.357 194.308 181.836C194.578 181.241 194.935 180.689 195.365 180.198C195.895 179.528 196.612 179.032 197.425 178.772C198.059 178.561 198.851 178.349 199.485 178.138L199.908 180.832C199.402 180.834 198.907 180.981 198.482 181.255C198.044 181.409 197.672 181.707 197.425 182.1C196.791 182.734 196.791 183.315 197.214 183.738C197.425 183.949 197.425 183.949 197.637 183.949C197.752 183.967 197.869 183.957 197.98 183.92C198.09 183.884 198.19 183.821 198.271 183.738C198.482 183.738 198.694 183.527 199.116 183.315C199.327 183.104 199.75 183.104 199.961 182.892C200.335 182.673 200.747 182.529 201.176 182.469C201.983 182.205 202.852 182.205 203.659 182.469C204.127 182.65 204.552 182.926 204.907 183.281C205.261 183.636 205.538 184.061 205.719 184.529C205.892 184.983 205.964 185.47 205.93 185.955C205.896 186.523 205.752 187.079 205.507 187.593C205.203 188.176 204.769 188.682 204.239 189.072" fill="#020304"/>
                                <path id="Path_325" d="M215.388 183.472C213.487 183.102 211.664 182.405 210 181.412C208.285 180.418 206.69 179.23 205.245 177.872C203.831 176.476 202.638 174.872 201.706 173.117C200.803 171.412 200.111 169.602 199.646 167.729L201.918 166.672C202.338 168.426 203.033 170.102 203.978 171.638C204.97 173.102 206.083 174.481 207.306 175.759C208.595 176.969 209.973 178.082 211.427 179.087C212.92 180.115 214.612 180.817 216.393 181.147L215.388 183.472Z" fill="#020304"/>
                                <path id="Path_326" d="M220.143 173.117C219.698 173.604 219.134 173.969 218.505 174.174C217.978 174.347 217.422 174.419 216.867 174.385C216.262 174.382 215.679 174.156 215.229 173.751C214.664 173.465 214.175 173.048 213.803 172.536L210.264 168.997L209.049 170.212L207.2 168.363L208.415 166.937L206.355 164.243L208.415 162.183L210.687 164.455L212.747 162.395L214.807 164.455L212.747 166.515L216.286 170.054C216.66 170.48 217.159 170.776 217.712 170.899C218.103 170.885 218.477 170.735 218.769 170.476L219.192 170.053C219.313 169.943 219.389 169.792 219.403 169.63L221.675 171.056C221.415 171.376 221.201 171.732 221.041 172.113C220.81 172.502 220.504 172.842 220.141 173.113" fill="#020304"/>
                                <path id="Path_327" d="M226.376 167.359C226.019 167.704 225.609 167.99 225.161 168.204C224.706 168.376 224.22 168.448 223.735 168.415C223.301 168.378 222.883 168.233 222.52 167.992C222.057 167.804 221.642 167.515 221.305 167.147C220.922 166.692 220.647 166.156 220.5 165.58C220.354 165.003 220.34 164.401 220.46 163.819C221.11 162.122 222.098 160.577 223.366 159.276C223.058 158.915 222.622 158.688 222.151 158.642C221.617 158.685 221.114 158.909 220.725 159.276C220.302 159.699 220.091 160.121 219.668 160.491C219.404 161.019 219.245 161.6 219.034 162.129L216.551 161.284C216.803 160.417 217.158 159.583 217.608 158.801C218.034 158.026 218.587 157.33 219.246 156.741C219.73 156.224 220.33 155.828 220.995 155.584C221.66 155.341 222.374 155.257 223.077 155.339C223.781 155.421 224.456 155.667 225.047 156.057C225.638 156.448 226.13 156.971 226.483 157.586L231.237 162.763L228.965 164.823L227.908 163.978C227.874 164.614 227.731 165.239 227.485 165.827C227.203 166.395 226.828 166.913 226.376 167.359M225.319 164.453C225.53 164.242 225.742 163.819 225.953 163.608C225.953 163.185 226.164 162.763 226.164 162.393L224.738 160.755C224.165 161.446 223.685 162.21 223.312 163.027C223.241 163.265 223.223 163.517 223.259 163.763C223.296 164.009 223.386 164.245 223.523 164.453C223.756 164.675 224.05 164.822 224.368 164.876C224.55 164.909 224.739 164.887 224.909 164.812C225.079 164.736 225.222 164.611 225.319 164.453" fill="#020304"/>
                                <path id="Path_328" d="M234.405 159.91L223.258 146.862L225.952 144.59L232.344 152.039L232.133 145.858L235.039 143.375V149.975L243.122 152.458L240.216 154.941L235.039 153.092V155.364L236.888 157.636L234.405 159.91Z" fill="#020304"/>
                                <path id="Path_329" d="M249.727 152.673L247.455 153.307C247.225 151.497 246.67 149.743 245.817 148.13C245.044 146.499 244.067 144.973 242.911 143.587C241.881 142.134 240.613 140.866 239.16 139.836C237.731 138.687 236.126 137.778 234.406 137.142L235.621 135.082C237.438 135.704 239.176 136.538 240.798 137.565C242.487 138.656 243.956 140.054 245.13 141.686C246.504 143.186 247.564 144.947 248.247 146.863C248.881 148.923 249.304 150.772 249.726 152.674" fill="#020304"/>
                                <path id="Path_330" d="M257.386 141.473C256.73 142.013 255.948 142.376 255.114 142.53C254.37 142.705 253.605 142.776 252.842 142.741C252.028 142.643 251.25 142.354 250.57 141.896C249.776 141.411 249.078 140.784 248.51 140.047C247.93 139.319 247.516 138.473 247.297 137.568C247.12 136.753 247.049 135.919 247.086 135.085C247.184 134.369 247.398 133.673 247.72 133.025C248.078 132.387 248.563 131.83 249.146 131.387C249.742 130.882 250.447 130.52 251.206 130.33C251.876 130.119 252.595 130.119 253.266 130.33C253.914 130.535 254.535 130.819 255.115 131.175C255.761 131.611 256.318 132.167 256.753 132.813C257.021 133.048 257.237 133.335 257.387 133.658C257.598 133.869 257.598 134.081 257.81 134.292L251.999 138.624C252.552 139.158 253.291 139.457 254.059 139.457C254.828 139.457 255.567 139.158 256.12 138.624C256.815 137.986 257.372 137.213 257.758 136.352L260.03 137.409C259.763 138.137 259.408 138.828 258.973 139.469C258.618 140.259 258.073 140.948 257.388 141.476M250.573 136.933L254.112 134.239C253.789 133.718 253.279 133.339 252.686 133.182C252.4 133.104 252.098 133.101 251.81 133.176C251.523 133.25 251.26 133.398 251.048 133.605C250.593 133.955 250.291 134.465 250.203 135.031C250.078 135.689 250.21 136.369 250.573 136.931" fill="#020304"/>
                                <path id="Path_331" d="M263.778 136.084L256.752 126.205L259.235 124.567L260.292 125.624C260.503 124.99 260.715 124.198 260.926 123.564C261.221 122.884 261.719 122.312 262.352 121.926C262.764 121.546 263.273 121.287 263.822 121.175C264.372 121.063 264.941 121.104 265.469 121.292C266.629 121.865 267.628 122.718 268.375 123.775L272.707 129.956L269.801 132.016L265.68 126.205C265.257 125.571 264.623 124.99 264.254 124.99C264.05 124.917 263.832 124.898 263.619 124.935C263.406 124.972 263.206 125.064 263.039 125.201C262.66 125.463 262.366 125.831 262.194 126.258C261.983 126.681 261.983 127.103 261.771 127.473L266.525 134.073L263.778 136.084Z" fill="#020304"/>
                            </g>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>Toets(tak)en</h4>
                        <p>
                            Toetsen zijn (leer)activiteiten/meet-instrumenten die worden ingezet om na te gaan of de beoogde leerresultaten zijn bereikt (Joosten-ten Brinke & Draaier, 2015). Bij de kwaliteit van de toets in zijn geheel horen ook het ontwerp van de beoordelingsmodellen en student- en beoordelaarsinstructies. Toetstaken zijn items of opdrachten binnen een toets waarmee studenten worden uitgedaagd hun kennis en vaardigheden te tonen (Draaier & Joosten-ten Brinke, 2015.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="toetsprogramma-bg">
                            <path id="Path 6" d="M921.19 280.45C918.586 280.446 916.032 279.727 913.808 278.372C911.584 277.017 909.774 275.077 908.576 272.764C882.798 223.231 843.144 185.221 814.393 162.042C782.91 136.648 757.211 122.993 756.95 122.88C753.61 121.116 751.107 118.099 749.988 114.492C748.869 110.884 749.226 106.98 750.982 103.635C752.737 100.291 755.746 97.7789 759.351 96.65C762.955 95.5211 766.86 95.8675 770.209 97.6134C771.312 98.2224 798.137 112.396 831.736 139.372C851.45 155.216 869.442 172.178 885.178 189.886C905.005 212.12 921.397 235.581 933.898 259.577C935.016 261.759 935.556 264.191 935.467 266.64C935.377 269.09 934.661 271.476 933.386 273.57C932.111 275.664 930.32 277.396 928.185 278.601C926.05 279.805 923.642 280.442 921.19 280.45V280.45Z" fill="white"/>
                            <g id="toetsprogramma">
                                <path id="Path_332" d="M772.824 121.61L779.85 110.833L776.15 108.35L777.788 105.867L788.142 112.682L786.504 115.165L782.804 112.682L775.778 123.459L772.824 121.61Z" fill="#020304"/>
                                <path id="Path_333" d="M785.028 130.115C784.382 129.68 783.825 129.124 783.39 128.477C783.023 127.829 782.739 127.137 782.545 126.417C782.334 125.603 782.334 124.748 782.545 123.934C782.81 123.045 783.22 122.206 783.76 121.451C784.266 120.734 784.892 120.108 785.609 119.602C786.277 119.123 787.061 118.831 787.88 118.757C788.623 118.546 789.41 118.546 790.152 118.757C790.886 118.905 791.586 119.192 792.212 119.602C792.859 120.037 793.415 120.594 793.85 121.24C794.261 121.867 794.548 122.566 794.695 123.3C794.907 124.114 794.907 124.969 794.695 125.783C794.431 126.673 794.02 127.512 793.48 128.266C792.974 128.984 792.349 129.609 791.631 130.115C790.963 130.595 790.178 130.887 789.359 130.96C788.617 131.171 787.83 131.171 787.087 130.96C786.36 130.789 785.665 130.504 785.027 130.115M786.665 127.632C786.936 127.808 787.244 127.918 787.565 127.955C787.886 127.992 788.211 127.953 788.514 127.843C789.268 127.475 789.907 126.909 790.363 126.205C790.948 125.497 791.315 124.634 791.42 123.722C791.442 123.398 791.375 123.074 791.226 122.785C791.077 122.497 790.852 122.254 790.575 122.084C790.304 121.908 789.996 121.798 789.675 121.761C789.355 121.725 789.03 121.763 788.726 121.873C787.973 122.242 787.334 122.808 786.877 123.511C786.293 124.22 785.926 125.082 785.82 125.994C785.781 126.32 785.84 126.651 785.991 126.943C786.141 127.235 786.376 127.475 786.665 127.632" fill="#020304"/>
                                <path id="Path_334" d="M797.019 138.779C796.378 138.254 795.825 137.63 795.381 136.93C794.968 136.228 794.682 135.459 794.536 134.658C794.393 133.826 794.466 132.971 794.747 132.175C795.011 131.286 795.422 130.447 795.962 129.692C796.474 128.905 797.185 128.268 798.022 127.843C798.748 127.484 799.509 127.201 800.293 126.998C801.047 126.893 801.811 126.893 802.565 126.998C803.299 127.146 803.999 127.433 804.625 127.843C805.272 128.278 805.828 128.835 806.263 129.481C806.629 130.033 806.847 130.67 806.897 131.33C806.947 132.043 806.8 132.755 806.474 133.39C806.207 134.118 805.852 134.809 805.417 135.45L804.783 136.084L804.36 136.507L798.549 132.175C798.191 132.878 798.115 133.691 798.338 134.447C798.419 134.788 798.568 135.11 798.777 135.391C798.986 135.673 799.25 135.909 799.553 136.085C800.255 136.651 801.135 136.95 802.036 136.93L801.613 139.413C800.84 139.38 800.075 139.237 799.341 138.99C798.993 139.239 798.566 139.355 798.14 139.316C797.713 139.277 797.315 139.087 797.017 138.779M799.5 131.119L803.04 133.813C803.403 133.339 803.623 132.77 803.674 132.175C803.688 131.881 803.615 131.589 803.465 131.336C803.315 131.082 803.094 130.878 802.829 130.749C802.423 130.436 801.914 130.285 801.403 130.326C800.558 130.115 800.135 130.537 799.503 131.118" fill="#020304"/>
                                <path id="Path_335" d="M807.163 146.65C806.662 146.297 806.252 145.831 805.967 145.289C805.683 144.747 805.531 144.145 805.525 143.533C805.475 142.954 805.625 142.377 805.948 141.895C806.371 141.261 806.582 140.838 807.004 140.257L810.121 136.348L808.906 135.291L810.544 133.231L812.182 134.288L814.453 132.016L816.725 133.865L814.665 136.348L816.937 138.197L815.299 140.469L813.027 138.62L809.91 142.529C809.552 142.924 809.33 143.424 809.276 143.955C809.272 144.173 809.329 144.387 809.441 144.574C809.553 144.761 809.716 144.913 809.91 145.012C810.121 145.223 810.333 145.223 810.333 145.435C810.544 145.435 810.756 145.646 810.967 145.646L809.752 148.129C809.329 147.918 809.118 147.918 808.695 147.706C808.148 147.409 807.634 147.055 807.163 146.649" fill="#020304"/>
                                <path id="Path_336" d="M814.188 152.461C813.547 151.936 812.994 151.311 812.55 150.612C812.137 149.91 811.851 149.141 811.705 148.34L814.399 147.706C814.555 148.271 814.767 148.82 815.033 149.344C815.297 149.818 815.657 150.231 816.09 150.559C816.366 150.877 816.736 151.099 817.147 151.193C817.314 151.218 817.486 151.192 817.637 151.116C817.788 151.04 817.913 150.919 817.992 150.77C818.121 150.593 818.19 150.381 818.19 150.162C818.19 149.944 818.121 149.731 817.992 149.555C817.781 149.344 817.781 149.132 817.569 148.71C817.347 148.477 817.199 148.182 817.146 147.865C816.986 147.484 816.773 147.128 816.512 146.808C816.301 146.385 816.301 145.963 816.089 145.593V144.378C816.106 144.142 816.171 143.913 816.28 143.704C816.389 143.495 816.54 143.311 816.723 143.163C817.089 142.768 817.497 142.414 817.938 142.106C818.389 141.893 818.87 141.75 819.364 141.683C819.932 141.717 820.488 141.86 821.002 142.106C821.597 142.376 822.149 142.732 822.64 143.163C823.243 143.727 823.791 144.346 824.278 145.012C824.645 145.66 824.929 146.352 825.123 147.072L822.429 147.706C822.312 147.223 822.171 146.747 822.006 146.28C821.852 145.842 821.554 145.469 821.161 145.223C820.527 144.589 819.946 144.589 819.523 145.012C819.402 145.121 819.327 145.272 819.312 145.435C819.294 145.549 819.304 145.667 819.34 145.777C819.377 145.888 819.44 145.988 819.523 146.069C819.523 146.28 819.734 146.492 819.946 146.914C820.169 147.147 820.316 147.441 820.369 147.759C820.529 148.139 820.742 148.495 821.003 148.816C821.214 149.239 821.214 149.661 821.426 150.031V151.246C821.426 151.669 821.003 152.091 820.792 152.461C820.48 152.907 820.063 153.27 819.577 153.518C819.126 153.731 818.645 153.873 818.151 153.941C817.583 153.906 817.027 153.763 816.513 153.518C815.711 153.23 814.933 152.876 814.189 152.461" fill="#020304"/>
                                <path id="Path_337" d="M817.939 160.914L828.927 148.288L831.198 150.137L830.564 151.194C831.188 151.157 831.814 151.228 832.413 151.405C833.017 151.557 833.578 151.846 834.052 152.25C834.617 152.657 835.041 153.229 835.266 153.888C835.546 154.462 835.621 155.115 835.477 155.737C835.479 156.472 835.258 157.19 834.844 157.797C834.43 158.524 833.952 159.214 833.417 159.857C832.849 160.594 832.151 161.221 831.357 161.706C830.631 162.065 829.87 162.348 829.085 162.551C828.393 162.694 827.674 162.62 827.026 162.34C826.422 162.188 825.861 161.899 825.387 161.495C825.042 161.139 824.756 160.728 824.542 160.28C824.273 159.775 824.128 159.214 824.12 158.642L822.904 160.068L820.633 162.762L817.939 160.914ZM826.814 159.276C827.027 159.483 827.29 159.632 827.577 159.706C827.865 159.78 828.166 159.778 828.452 159.699C829.349 159.378 830.137 158.81 830.724 158.061C832.15 156.423 832.362 155.155 831.358 154.152C830.685 153.712 829.892 153.49 829.087 153.518L825.759 157.218C825.773 157.609 825.923 157.983 826.182 158.275C826.343 158.638 826.557 158.975 826.816 159.275" fill="#020304"/>
                                <path id="Path_338" d="M832.203 167.781L840.497 158.906L842.557 160.966L841.342 162.604C842.138 162.323 842.993 162.25 843.825 162.393C844.474 162.598 845.095 162.882 845.674 163.238L846.308 163.872C846.519 164.083 846.519 164.295 846.731 164.506L844.248 166.355C844.037 166.144 844.037 165.932 843.825 165.721C843.613 165.51 843.614 165.298 843.402 165.298C842.979 164.875 842.557 164.875 841.976 164.664C841.264 164.615 840.551 164.761 839.916 165.087L835.161 170.264L832.203 167.781Z" fill="#020304"/>
                                <path id="Path_339" d="M843.56 178.716C843.031 178.191 842.617 177.561 842.345 176.867C841.993 176.165 841.846 175.377 841.922 174.595C841.955 173.822 842.098 173.057 842.345 172.323C843.191 170.632 844.562 169.26 846.254 168.414C846.966 168.092 847.745 167.947 848.526 167.991C849.299 168.025 850.064 168.167 850.798 168.414C851.5 168.698 852.138 169.12 852.673 169.656C853.209 170.191 853.631 170.829 853.915 171.531C854.443 173 854.443 174.606 853.915 176.074C853.594 176.971 853.026 177.759 852.277 178.346C851.614 179.013 850.847 179.567 850.005 179.984C849.293 180.307 848.513 180.452 847.733 180.407C846.962 180.348 846.201 180.206 845.461 179.984C844.694 179.807 844.019 179.356 843.561 178.716M845.621 176.656C845.876 176.864 846.175 177.01 846.496 177.083C846.817 177.157 847.15 177.155 847.47 177.079C848.32 176.771 849.094 176.285 849.742 175.653C850.447 175.067 850.947 174.271 851.168 173.381C851.268 173.045 851.261 172.687 851.147 172.355C851.033 172.024 850.819 171.736 850.534 171.532C850.308 171.278 850.008 171.101 849.677 171.025C849.345 170.95 848.999 170.979 848.685 171.109C847.865 171.356 847.144 171.855 846.625 172.535C845.92 173.121 845.42 173.917 845.199 174.807C844.988 175.599 844.988 176.233 845.622 176.656" fill="#020304"/>
                                <path id="Path_340" d="M849.582 191.976C849.159 191.342 848.737 190.919 848.367 190.338C848.004 189.863 847.784 189.295 847.733 188.7C847.628 188.477 847.574 188.233 847.574 187.987C847.574 187.741 847.628 187.497 847.733 187.274C847.92 186.811 848.209 186.396 848.578 186.059C848.974 185.724 849.457 185.506 849.97 185.431C850.484 185.357 851.008 185.428 851.484 185.636V184.315C851.556 183.896 851.782 183.519 852.118 183.258C852.494 182.995 852.902 182.782 853.333 182.624H854.759C854.748 182.071 854.819 181.519 854.97 180.986C855.121 180.334 855.495 179.754 856.027 179.348C856.527 178.929 857.077 178.574 857.665 178.291C858.264 178.114 858.89 178.042 859.514 178.08C859.815 178.072 860.115 178.124 860.397 178.232C860.678 178.341 860.935 178.505 861.152 178.714C861.706 179.017 862.191 179.43 862.578 179.929C862.997 180.429 863.352 180.979 863.635 181.567L866.752 184.895L864.903 186.744L863.688 185.318C863.688 185.529 863.477 185.741 863.477 185.952L862.843 186.586C862.365 187.034 861.81 187.392 861.205 187.643C860.677 187.817 860.121 187.888 859.567 187.854C858.961 187.852 858.378 187.626 857.929 187.22C857.364 186.934 856.875 186.518 856.503 186.005C856.157 185.648 855.872 185.238 855.658 184.79H855.024C854.813 184.79 854.813 185.001 854.601 185.001C854.39 185.212 854.39 185.424 854.39 185.846C854.39 186.268 854.813 186.48 855.235 187.061L856.661 188.487C857.509 189.287 858.144 190.286 858.51 191.393C858.607 192.161 858.402 192.937 857.939 193.557C857.476 194.178 856.791 194.595 856.027 194.721C855.429 194.932 854.776 194.932 854.178 194.721C853.458 194.527 852.766 194.243 852.118 193.876C851.133 193.455 850.263 192.803 849.582 191.976M851.642 190.708C852.079 191.243 852.642 191.66 853.28 191.923C853.914 192.134 854.337 192.134 854.495 191.712C854.706 191.501 854.918 191.078 854.706 190.867C854.455 190.442 854.172 190.035 853.861 189.652L853.016 188.807C852.805 188.596 852.382 188.173 852.382 187.962C852.171 187.751 852.171 187.539 851.959 187.328C851.325 187.328 850.902 187.328 850.744 187.751C850.564 187.891 850.443 188.093 850.404 188.318C850.365 188.542 850.411 188.773 850.533 188.966C850.708 189.65 851.097 190.26 851.642 190.709M858.034 184.528C858.183 184.697 858.373 184.825 858.586 184.899C858.799 184.973 859.027 184.991 859.249 184.951C859.518 184.953 859.785 184.898 860.031 184.788C860.276 184.679 860.496 184.518 860.675 184.317C861.055 183.907 861.343 183.421 861.52 182.891C861.484 182.457 861.338 182.039 861.097 181.676C860.753 181.363 860.335 181.145 859.882 181.042C859.248 180.831 859.037 181.253 858.456 181.676C858.029 182.049 857.733 182.549 857.611 183.102C857.536 183.355 857.536 183.625 857.611 183.878C857.686 184.131 857.833 184.357 858.034 184.528" fill="#020304"/>
                                <path id="Path_341" d="M860.098 195.675L869.184 187.592L871.244 189.864L869.818 191.502C870.632 191.29 871.486 191.29 872.301 191.502C872.923 191.72 873.484 192.082 873.939 192.559L874.573 193.193C874.649 193.278 874.707 193.379 874.744 193.488C874.78 193.597 874.794 193.712 874.784 193.827L872.09 195.465C871.879 195.254 871.879 195.042 871.667 194.831C871.455 194.62 871.456 194.408 871.244 194.197C871.033 193.774 870.399 193.563 870.029 193.352C869.335 193.235 868.624 193.308 867.969 193.563L862.792 198.318L860.098 195.675Z" fill="#020304"/>
                                <path id="Path_342" d="M868.812 205.817C868.467 205.461 868.181 205.05 867.967 204.602C867.794 204.148 867.722 203.661 867.756 203.176C867.792 202.742 867.938 202.324 868.179 201.961C868.398 201.563 868.683 201.205 869.024 200.904C869.47 200.509 870.015 200.241 870.601 200.129C871.187 200.018 871.792 200.067 872.352 200.27C874.048 201.016 875.589 202.074 876.895 203.387C877.256 203.08 877.483 202.644 877.529 202.172C877.486 201.639 877.262 201.136 876.895 200.746C876.529 200.352 876.122 199.997 875.68 199.689C875.108 199.461 874.56 199.178 874.042 198.844L875.099 196.361C875.966 196.613 876.8 196.968 877.582 197.418C878.408 197.859 879.115 198.494 879.642 199.267C880.093 199.731 880.437 200.289 880.647 200.901C880.857 201.512 880.929 202.163 880.857 202.806C880.582 204.278 879.773 205.595 878.585 206.506L873.197 211.049L871.348 208.777L872.193 207.72C871.522 207.729 870.869 207.505 870.344 207.086C869.792 206.717 869.278 206.292 868.812 205.818M871.718 204.761C871.929 204.972 872.352 205.184 872.563 205.395C872.934 205.596 873.361 205.671 873.778 205.606L875.416 204.18C874.359 203.335 873.778 202.754 873.144 202.754C872.906 202.683 872.654 202.665 872.408 202.702C872.161 202.738 871.926 202.828 871.718 202.965C871.496 203.198 871.348 203.493 871.295 203.81C871.261 203.993 871.284 204.182 871.359 204.351C871.435 204.521 871.56 204.664 871.718 204.761" fill="#020304"/>
                                <path id="Path_343" d="M876.051 213.9L885.56 206.451L887.409 208.723L886.352 209.938C887.056 209.972 887.751 210.114 888.412 210.361C889.085 210.558 889.666 210.989 890.05 211.576C890.328 211.84 890.548 212.16 890.693 212.515C890.839 212.871 890.908 213.253 890.895 213.636C890.944 214.281 890.796 214.926 890.472 215.485C891.245 215.519 892.009 215.661 892.743 215.908C893.437 216.18 894.067 216.594 894.592 217.123C894.959 217.545 895.225 218.045 895.371 218.585C895.518 219.125 895.54 219.691 895.437 220.24C895.077 221.463 894.265 222.502 893.165 223.146L887.143 227.901L884.871 224.995L890.471 220.663C890.946 220.252 891.355 219.771 891.686 219.237C891.897 218.814 891.686 218.392 891.263 218.022C890.964 217.73 890.608 217.504 890.217 217.358C889.825 217.213 889.407 217.151 888.991 217.177L882.599 222.354L880.328 219.448L885.928 215.116C886.402 214.705 886.812 214.224 887.143 213.69C887.354 213.267 887.143 212.845 886.72 212.475C886.421 212.183 886.065 211.957 885.673 211.811C885.282 211.666 884.865 211.604 884.448 211.63L878.056 216.807L876.051 213.9Z" fill="#020304"/>
                                <path id="Path_344" d="M889.68 231.28L899.612 224.254L901.25 226.737L900.193 227.794C900.909 227.893 901.605 228.107 902.253 228.428C902.613 228.533 902.945 228.715 903.228 228.961C903.511 229.207 903.737 229.512 903.891 229.854C904.353 230.452 904.645 231.164 904.736 231.914C904.702 232.55 904.559 233.175 904.313 233.763C905.029 233.862 905.725 234.076 906.373 234.397C906.733 234.502 907.065 234.684 907.348 234.93C907.631 235.176 907.857 235.481 908.011 235.823C908.39 236.235 908.65 236.744 908.762 237.293C908.873 237.842 908.833 238.412 908.645 238.94C908.072 240.1 907.218 241.099 906.162 241.846L899.981 246.178L897.921 243.272L903.732 239.151C904.231 238.852 904.648 238.435 904.947 237.936C905.02 237.732 905.039 237.513 905.002 237.301C904.965 237.088 904.873 236.888 904.736 236.721C904.159 236.186 903.446 235.82 902.676 235.664L896.076 240.419L894.016 237.513L899.827 233.392C900.325 233.093 900.743 232.676 901.042 232.177C901.115 231.973 901.134 231.754 901.097 231.542C901.06 231.329 900.968 231.129 900.831 230.962C900.254 230.427 899.541 230.061 898.771 229.905L892.171 234.659L889.68 231.28Z" fill="#020304"/>
                                <path id="Path_345" d="M903.732 251.937C903.521 251.514 903.309 250.88 903.098 250.511V249.085C903.309 248.662 903.309 248.24 903.732 247.87C903.943 247.447 904.366 247.236 904.789 246.813C905.274 246.484 905.838 246.29 906.424 246.253C907.009 246.216 907.594 246.336 908.117 246.602C909.762 247.422 911.178 248.639 912.238 250.141C912.575 249.838 912.861 249.481 913.083 249.084C913.294 248.661 913.083 248.239 912.66 247.658C912.396 247.184 912.036 246.771 911.603 246.443C911.077 246.061 910.53 245.708 909.965 245.386L911.18 242.903C912.003 243.265 912.768 243.745 913.452 244.329C914.122 244.965 914.741 245.654 915.301 246.389C915.716 246.9 916.009 247.499 916.155 248.141C916.302 248.782 916.299 249.449 916.146 250.089C915.935 251.304 914.931 252.361 913.24 253.417L907.429 257.117L905.791 254.634L906.636 253.789C905.987 253.584 905.366 253.3 904.787 252.944C904.576 252.944 904.153 252.574 903.73 251.944M906.636 251.521C906.802 251.899 907.103 252.2 907.481 252.366C907.692 252.577 908.115 252.577 908.696 252.789L910.545 251.574C910.033 250.788 909.322 250.15 908.485 249.725C908.262 249.621 908.018 249.567 907.772 249.567C907.525 249.567 907.282 249.621 907.059 249.725C906.636 249.936 906.636 250.148 906.425 250.57C906.214 250.992 906.425 251.098 906.636 251.521" fill="#020304"/>
                            </g>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>Toetsprogramma</h4>
                        <p>
                            Het toetsprogramma is een bewuste en beargumenteerde combinatie van toets(vorm)en, passend bij de doelen en opbouw van een opleiding (het onderwijsprogramma) (Baartman & Van der Vleuten, 2015). Het gaat om de heldere samenhang tussen toetsen en de borging van de verschillende functies van toetsing.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom right"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="toetsbeleid-bg">
                            <path id="Path 5" d="M858.492 803.067C857.982 800.986 858.054 798.805 858.699 796.762C859.344 794.719 860.537 792.892 862.149 791.481C896.64 761.148 919.198 722 932.055 694.477C946.144 664.336 951.995 641.125 952.034 640.894C952.786 637.88 954.703 635.287 957.364 633.683C960.025 632.08 963.214 631.598 966.23 632.341C969.247 633.085 971.845 634.995 973.456 637.652C975.067 640.308 975.558 643.495 974.823 646.514C974.553 647.515 968.509 671.727 953.573 703.869C944.797 722.731 934.788 740.438 923.74 756.49C909.882 776.699 894.369 794.406 877.662 809.111C876.14 810.433 874.304 811.343 872.329 811.753C870.355 812.164 868.308 812.061 866.385 811.454C864.462 810.848 862.727 809.759 861.345 808.29C859.963 806.822 858.98 805.024 858.492 803.067V803.067Z" fill="white"/>
                            <g id="toetsbeleid">
                                <path id="Path_346" d="M899.397 783.913L888.831 775.83L886.137 779.37L883.654 777.521L891.314 767.378L893.797 769.227L891.103 772.766L901.668 780.849L899.397 783.913Z" fill="#020304"/>
                                <path id="Path_347" d="M908.536 772.133C908.101 772.779 907.545 773.336 906.898 773.771C906.25 774.138 905.558 774.422 904.838 774.616C904.006 774.759 903.152 774.686 902.356 774.405C901.466 774.141 900.627 773.73 899.872 773.19C899.086 772.678 898.448 771.967 898.023 771.13C897.566 770.45 897.276 769.671 897.179 768.858C897.144 768.094 897.215 767.33 897.389 766.586C897.613 765.84 897.971 765.142 898.446 764.526C898.882 763.879 899.438 763.323 900.085 762.888C900.733 762.521 901.425 762.237 902.144 762.043C902.977 761.9 903.831 761.973 904.627 762.254C905.517 762.518 906.356 762.929 907.111 763.469C907.897 763.981 908.535 764.692 908.96 765.529C909.417 766.209 909.706 766.987 909.804 767.801C909.945 768.563 909.872 769.35 909.593 770.073C909.393 770.827 909.032 771.53 908.536 772.133M906.264 770.284C906.44 770.013 906.551 769.705 906.587 769.384C906.624 769.063 906.586 768.738 906.476 768.435C906.067 767.649 905.511 766.95 904.837 766.375C904.129 765.791 903.267 765.424 902.354 765.318C902 765.289 901.643 765.351 901.32 765.499C900.996 765.647 900.715 765.876 900.505 766.163C900.271 766.405 900.123 766.717 900.085 767.051C900.047 767.386 900.12 767.724 900.294 768.012C900.719 768.849 901.357 769.56 902.143 770.072C902.852 770.656 903.714 771.023 904.627 771.129C904.956 771.222 905.308 771.186 905.612 771.029C905.916 770.873 906.149 770.606 906.264 770.284V770.284Z" fill="#020304"/>
                                <path id="Path_348" d="M917.411 759.506C916.967 760.206 916.414 760.83 915.773 761.355C915.081 761.834 914.313 762.191 913.501 762.412C912.687 762.623 911.832 762.623 911.018 762.412C910.129 762.148 909.29 761.737 908.535 761.197C907.812 760.622 907.125 760.005 906.475 759.348C905.936 758.693 905.572 757.911 905.418 757.076C905.207 756.334 905.207 755.547 905.418 754.804C905.566 754.07 905.853 753.371 906.263 752.744C906.639 752.051 907.208 751.482 907.901 751.106C908.505 750.685 909.225 750.463 909.961 750.472C910.655 750.438 911.349 750.509 912.021 750.683C912.767 750.907 913.465 751.265 914.081 751.74C914.292 751.951 914.715 752.163 914.926 752.374L915.349 752.797L911.228 758.978C911.931 759.337 912.744 759.412 913.5 759.189C913.86 759.084 914.193 758.903 914.476 758.656C914.759 758.41 914.985 758.105 915.138 757.763C915.631 756.946 915.921 756.022 915.983 755.069L918.466 755.28C918.433 756.054 918.29 756.819 918.043 757.552C918.036 758.253 917.815 758.936 917.409 759.507M909.326 757.447L911.809 753.747C911.335 753.385 910.766 753.165 910.171 753.113C909.537 753.113 909.114 753.536 908.745 754.17C908.399 754.642 908.247 755.228 908.322 755.808C908.269 756.442 908.692 756.865 909.322 757.446" fill="#020304"/>
                                <path id="Path_349" d="M924.438 748.571C924.119 749.181 923.621 749.678 923.012 749.997C922.378 750.208 921.955 750.631 921.586 750.631C921.032 750.643 920.48 750.572 919.948 750.42C919.299 750.215 918.678 749.932 918.099 749.575L913.767 746.881L912.922 748.307L910.65 746.881L911.495 745.243L909.012 743.183L910.65 740.7L913.344 742.549L914.982 740.066L917.465 741.492L915.827 743.975L919.948 746.669C920.582 747.092 921.005 747.303 921.374 747.092C921.609 747.059 921.832 746.964 922.018 746.815C922.204 746.666 922.346 746.47 922.43 746.247C922.506 746.162 922.565 746.061 922.601 745.952C922.637 745.843 922.651 745.728 922.641 745.613C922.641 745.402 922.852 745.19 922.852 744.979L925.335 746.036C925.335 746.459 925.124 746.67 924.912 747.251C924.972 747.494 924.959 747.749 924.875 747.984C924.79 748.219 924.638 748.424 924.437 748.572" fill="#020304"/>
                                <path id="Path_350" d="M929.404 740.698C928.915 741.363 928.366 741.982 927.766 742.547C927.148 743.172 926.356 743.596 925.494 743.762L924.437 741.068C925.009 740.84 925.557 740.557 926.075 740.224C926.498 739.801 926.92 739.59 927.132 739.009C927.35 738.635 927.494 738.222 927.555 737.793C927.555 737.582 927.344 737.16 927.132 737.16C927.103 737.119 927.065 737.084 927.021 737.059C926.978 737.034 926.93 737.018 926.88 737.013C926.83 737.008 926.779 737.014 926.732 737.03C926.684 737.046 926.64 737.072 926.604 737.106C926.597 737.106 926.59 737.108 926.583 737.11C926.577 737.113 926.571 737.117 926.566 737.122C926.561 737.127 926.557 737.133 926.554 737.139C926.552 737.146 926.551 737.153 926.551 737.16C926.34 737.16 926.128 737.37 925.917 737.37C925.706 737.581 925.494 737.581 925.072 737.793C924.838 738.062 924.55 738.278 924.227 738.427C923.804 738.638 923.593 738.851 923.17 739.062C922.796 739.28 922.383 739.424 921.955 739.484C921.575 739.661 921.156 739.733 920.74 739.695C920.306 739.659 919.888 739.514 919.525 739.272C919.051 739.008 918.637 738.648 918.31 738.215C917.887 737.792 917.887 737.37 917.676 736.789V735.151C917.881 734.503 918.165 733.882 918.521 733.302C918.904 732.559 919.467 731.923 920.159 731.453C920.732 731.031 921.353 730.676 922.008 730.396L923.065 732.88C922.52 733.023 922.026 733.316 921.639 733.724C921.301 734.028 921.016 734.385 920.794 734.781C920.371 735.626 920.371 736.206 921.005 736.418C921.034 736.459 921.072 736.493 921.115 736.519C921.158 736.544 921.207 736.56 921.257 736.565C921.307 736.57 921.357 736.564 921.405 736.548C921.452 736.532 921.496 736.506 921.533 736.471C921.54 736.472 921.547 736.47 921.553 736.468C921.56 736.465 921.566 736.461 921.571 736.456C921.576 736.451 921.579 736.445 921.582 736.439C921.585 736.432 921.586 736.425 921.586 736.418C921.797 736.418 922.009 736.208 922.22 736.208C922.431 735.997 922.643 735.997 922.854 735.785C923.088 735.516 923.376 735.3 923.699 735.151C924.097 734.932 924.455 734.646 924.756 734.306C925.179 733.883 925.601 733.883 925.971 733.672C926.35 733.495 926.769 733.422 927.186 733.46C927.682 733.52 928.163 733.663 928.612 733.884C929.086 734.148 929.5 734.508 929.827 734.94C930.25 735.363 930.25 735.996 930.461 736.366V738.215C930.242 739.094 929.885 739.932 929.405 740.698" fill="#020304"/>
                                <path id="Path_351" d="M937.275 727.281C936.982 727.785 936.563 728.204 936.059 728.496C935.503 728.894 934.876 729.181 934.21 729.341L935.267 730.186L933.841 732.669L918.521 724.164L920.37 720.836L924.07 722.896L925.708 723.953C925.531 723.354 925.46 722.728 925.497 722.104C925.5 721.531 925.645 720.968 925.921 720.466C926.278 719.828 926.764 719.27 927.346 718.828C927.926 718.472 928.547 718.188 929.195 717.983C929.959 717.869 930.738 717.941 931.468 718.194C932.364 718.357 933.212 718.718 933.95 719.251C934.818 719.718 935.589 720.345 936.223 721.1C936.793 721.675 937.211 722.383 937.438 723.16C937.654 723.829 937.796 724.52 937.86 725.22C937.906 725.953 937.701 726.679 937.28 727.28M934.162 726.435C934.318 726.152 934.4 725.834 934.4 725.511C934.4 725.187 934.318 724.869 934.162 724.586C933.637 723.811 932.93 723.176 932.103 722.737C930.254 721.68 928.774 721.68 928.193 722.948C927.986 723.329 927.877 723.756 927.877 724.19C927.877 724.623 927.986 725.05 928.193 725.431L932.526 727.914C932.906 727.754 933.262 727.541 933.583 727.28C933.753 727.215 933.901 727.099 934.004 726.948C934.108 726.797 934.163 726.618 934.163 726.435" fill="#020304"/>
                                <path id="Path_352" d="M944.306 714.444C943.955 715.209 943.472 715.906 942.88 716.504C942.328 717.103 941.611 717.526 940.82 717.719C940.024 718 939.169 718.072 938.337 717.93C937.391 717.834 936.474 717.547 935.643 717.085C934.812 716.649 934.047 716.097 933.371 715.447C932.8 714.872 932.383 714.164 932.156 713.387C931.877 712.663 931.804 711.877 931.945 711.115C931.936 710.379 932.157 709.658 932.579 709.055C932.883 708.323 933.374 707.685 934.005 707.206C934.537 706.768 935.174 706.476 935.854 706.361C936.524 706.149 937.243 706.149 937.914 706.361C938.698 706.563 939.46 706.846 940.186 707.206C940.419 707.428 940.713 707.575 941.031 707.629C941.242 707.629 941.454 707.84 941.665 708.052L938.125 714.652C938.867 714.863 939.654 714.863 940.397 714.652C940.734 714.491 941.035 714.263 941.28 713.981C941.525 713.699 941.71 713.37 941.823 713.014C942.273 712.192 942.422 711.24 942.246 710.32H944.729V712.591C944.664 713.222 944.522 713.843 944.306 714.44M936.012 713.172L938.072 709.263C937.59 708.939 937.012 708.79 936.434 708.84C936.139 708.843 935.854 708.951 935.632 709.144C935.409 709.338 935.262 709.605 935.219 709.897C934.943 710.396 934.868 710.982 935.008 711.535C934.98 711.878 935.062 712.222 935.241 712.516C935.421 712.811 935.689 713.04 936.008 713.173" fill="#020304"/>
                                <path id="Path_353" d="M949.688 703.667C949.614 703.936 949.481 704.184 949.298 704.395C949.115 704.605 948.887 704.772 948.631 704.882L947.416 705.516H945.99C945.356 705.516 944.933 705.093 944.352 704.882L932.152 698.86L933.79 695.532L946.205 701.713C946.461 701.863 946.754 701.936 947.05 701.924C947.213 701.909 947.364 701.834 947.473 701.713V701.29L950.167 702.135C950.173 702.431 950.1 702.722 949.956 702.98C949.896 703.219 949.807 703.449 949.692 703.667" fill="#020304"/>
                                <path id="Path_354" d="M954.021 694.158C953.67 694.923 953.188 695.62 952.595 696.218C952.043 696.817 951.327 697.24 950.535 697.433C949.729 697.68 948.895 697.823 948.052 697.856C947.117 697.859 946.194 697.642 945.358 697.222C944.528 696.786 943.763 696.234 943.087 695.584C942.488 695.032 942.065 694.315 941.872 693.524C941.65 692.784 941.508 692.022 941.449 691.252C941.457 690.545 941.601 689.845 941.872 689.192C942.176 688.461 942.668 687.823 943.298 687.343C943.872 686.921 944.493 686.567 945.148 686.288C945.82 686.113 946.515 686.042 947.208 686.077C947.98 686.232 948.74 686.444 949.48 686.711C949.691 686.922 950.114 686.922 950.325 687.134C950.536 687.346 950.748 687.345 950.959 687.557L947.842 694.372C948.215 694.495 948.609 694.54 949 694.504C949.391 694.468 949.77 694.351 950.114 694.161C950.748 693.777 951.247 693.204 951.54 692.523C951.889 691.67 952.034 690.748 951.963 689.829L954.446 689.618C954.657 690.36 954.657 691.147 954.446 691.889C954.538 692.276 954.548 692.678 954.475 693.069C954.402 693.46 954.248 693.832 954.023 694.16M945.729 693.526L947.578 689.405C947.071 689.155 946.494 689.08 945.94 689.194C945.639 689.25 945.361 689.396 945.145 689.613C944.928 689.83 944.782 690.107 944.725 690.409C944.552 690.937 944.48 691.493 944.514 692.047C944.83 692.607 945.241 693.108 945.729 693.526" fill="#020304"/>
                                <path id="Path_355" d="M944.935 678.838C944.86 679.106 944.727 679.355 944.544 679.565C944.361 679.775 944.133 679.942 943.878 680.053C943.654 680.157 943.411 680.211 943.165 680.211C942.918 680.211 942.675 680.157 942.452 680.053C942.208 679.966 941.987 679.826 941.804 679.643C941.621 679.46 941.481 679.239 941.395 678.996C941.285 678.728 941.246 678.436 941.283 678.149C941.32 677.862 941.431 677.589 941.606 677.358C941.68 677.089 941.814 676.841 941.996 676.63C942.179 676.42 942.407 676.254 942.663 676.143C942.886 676.039 943.129 675.984 943.376 675.984C943.622 675.984 943.865 676.039 944.089 676.143C944.332 676.23 944.553 676.369 944.736 676.552C944.919 676.735 945.059 676.956 945.146 677.2C945.257 677.467 945.297 677.76 945.26 678.047C945.223 678.335 945.111 678.607 944.935 678.838M957.35 686.287L945.992 681.321L947.418 677.993L958.776 682.959L957.35 686.287Z" fill="#020304"/>
                                <path id="Path_356" d="M962.473 674.928C962.201 675.622 961.787 676.252 961.258 676.777C960.739 677.277 960.103 677.64 959.409 677.833C958.665 678.008 957.9 678.079 957.137 678.045C956.208 677.997 955.295 677.782 954.443 677.411C953.593 677.102 952.818 676.616 952.171 675.984C951.634 675.418 951.157 674.798 950.745 674.135C950.323 673.532 950.102 672.812 950.111 672.076C950.073 671.452 950.145 670.826 950.322 670.227C950.479 669.634 950.857 669.123 951.379 668.801C951.854 668.484 952.33 668.22 952.805 667.956L950.956 667.322L947.047 665.684L948.473 662.144L964.797 668.744L963.74 671.438L962.525 671.227C962.746 671.822 962.889 672.443 962.948 673.076C962.684 673.71 962.684 674.291 962.473 674.925M959.99 672.865C960.141 672.533 960.213 672.171 960.201 671.807C960.164 671.373 960.019 670.955 959.778 670.593L955.023 668.744C954.642 668.903 954.286 669.117 953.966 669.378C953.755 669.589 953.543 670.012 953.332 670.223C953.209 670.488 953.163 670.782 953.201 671.072C953.238 671.362 953.357 671.635 953.543 671.861C954.078 672.662 954.884 673.244 955.814 673.499C956.652 673.898 957.588 674.045 958.508 673.922C958.829 673.905 959.14 673.796 959.402 673.609C959.664 673.422 959.867 673.163 959.987 672.865" fill="#020304"/>
                            </g>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>Toetsbeleid</h4>
                        <p>
                            Met het toetsbeleid wordt het geheel aan vastgestelde afspraken, zowel inhoudelijk als procedureel, over toetsen en beoordelen bedoeld (Bruijns & Kok, 2015). Binnen het integraal toetsbeleid zijn meerdere niveaus te onderscheiden, waaronder het beleid op instellingsniveau en het beleid op opleidingsniveau.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="toetsorganisatie-bg">
                            <path id="Path 7" d="M414.556 938.238C416.366 936.365 418.655 935.025 421.174 934.364C423.694 933.702 426.346 933.745 428.843 934.488C482.398 950.298 537.283 948.121 573.924 943.503C614.056 938.454 641.721 929.425 641.983 929.315C645.571 928.135 649.481 928.426 652.855 930.123C656.229 931.821 658.792 934.788 659.982 938.372C661.173 941.957 660.893 945.867 659.205 949.246C657.516 952.625 654.557 955.196 650.976 956.396C649.772 956.768 620.953 966.248 578.213 971.722C553.125 974.923 528.426 976.107 504.755 975.15C474.988 973.998 446.72 969.522 420.767 961.871C418.42 961.163 416.294 959.864 414.592 958.1C412.891 956.335 411.67 954.164 411.047 951.793C410.423 949.422 410.419 946.931 411.033 944.557C411.648 942.184 412.86 940.008 414.556 938.238V938.238Z" fill="white"/>
                            <g id="toetsorganisatie">
                                <path id="Path_357" d="M438.587 956.871L441.281 944.245L436.949 943.4L437.583 940.494L449.783 943.188L449.149 946.094L444.817 945.249L442.123 957.875L438.587 956.871Z" fill="#020304"/>
                                <path id="Path_358" d="M452.848 959.935C452.114 959.787 451.415 959.501 450.788 959.09C450.141 958.655 449.584 958.099 449.148 957.452C448.668 956.784 448.377 955.999 448.303 955.18C448.092 954.294 448.092 953.372 448.303 952.486C448.409 951.574 448.776 950.711 449.36 950.003C449.795 949.356 450.351 948.8 450.998 948.365C451.624 947.954 452.324 947.667 453.058 947.52C453.801 947.308 454.588 947.308 455.33 947.52C456.064 947.667 456.764 947.954 457.39 948.365C458.037 948.8 458.593 949.356 459.028 950.003C459.508 950.671 459.799 951.455 459.873 952.274C460.085 953.16 460.085 954.082 459.873 954.968C459.767 955.88 459.4 956.743 458.816 957.451C458.381 958.098 457.825 958.654 457.178 959.089C456.552 959.5 455.852 959.787 455.118 959.934C454.375 960.145 453.589 960.145 452.846 959.934M453.48 957.24C453.816 957.34 454.175 957.333 454.506 957.219C454.838 957.106 455.125 956.891 455.329 956.606C455.862 955.868 456.223 955.019 456.386 954.123C456.597 953.309 456.597 952.454 456.386 951.64C456.262 951.339 456.067 951.072 455.819 950.861C455.571 950.649 455.277 950.5 454.96 950.425C454.627 950.296 454.258 950.288 453.92 950.404C453.581 950.52 453.295 950.752 453.111 951.059C452.578 951.798 452.217 952.646 452.054 953.542C451.843 954.356 451.843 955.211 452.054 956.025C452.148 956.344 452.333 956.629 452.586 956.845C452.839 957.061 453.15 957.198 453.48 957.24" fill="#020304"/>
                                <path id="Path_359" d="M467.747 962.418C466.946 962.272 466.177 961.986 465.475 961.573C464.837 961.215 464.279 960.73 463.837 960.147C463.358 959.455 463.001 958.687 462.78 957.875C462.568 956.989 462.568 956.066 462.78 955.181C462.901 954.307 463.187 953.464 463.625 952.698C464.069 951.998 464.622 951.374 465.263 950.849C465.879 950.373 466.577 950.015 467.323 949.792C468.067 949.617 468.831 949.546 469.595 949.581C470.396 949.727 471.165 950.013 471.867 950.426C472.442 950.79 472.929 951.277 473.293 951.852C473.714 952.455 473.936 953.176 473.927 953.912V956.184C473.927 956.607 473.716 956.818 473.716 957.029C473.716 957.24 473.505 957.452 473.505 957.663L466.268 956.606C466.218 956.993 466.27 957.386 466.418 957.748C466.566 958.109 466.806 958.425 467.113 958.666C467.645 959.148 468.276 959.508 468.962 959.723C469.882 959.873 470.826 959.725 471.656 959.3L472.501 961.572C471.816 961.989 471.03 962.208 470.229 962.206C469.458 962.589 468.57 962.664 467.746 962.417M466.32 954.598L470.652 955.232C470.799 954.679 470.723 954.091 470.441 953.594C470.289 953.348 470.08 953.143 469.832 952.996C469.583 952.849 469.303 952.764 469.015 952.749C468.436 952.699 467.859 952.849 467.377 953.172C466.902 953.119 466.477 953.753 466.32 954.598" fill="#020304"/>
                                <path id="Path_360" d="M480.37 964.319C480.034 964.353 479.695 964.313 479.376 964.204C479.057 964.094 478.766 963.918 478.521 963.685C478.047 963.421 477.633 963.061 477.306 962.628C477.042 962.1 476.883 961.519 476.672 960.99V959.141L477.306 954.175L475.668 953.964L476.091 951.27H477.94L478.785 948.153L481.691 948.576L481.268 951.904L484.174 952.327L483.751 955.233L480.845 954.81L480.211 959.565C480.211 960.199 480.211 960.78 480.422 960.991C480.524 961.183 480.677 961.343 480.863 961.454C481.049 961.566 481.262 961.625 481.479 961.625H482.694L482.905 964.319C482.482 964.319 482.06 964.53 481.69 964.53C481.584 964.319 481.003 964.319 480.369 964.319" fill="#020304"/>
                                <path id="Path_361" d="M489.459 965.323C488.608 965.218 487.773 965.005 486.976 964.689C486.211 964.338 485.514 963.855 484.916 963.263L486.765 961.203C487.194 961.613 487.674 961.968 488.191 962.26C488.642 962.473 489.123 962.615 489.617 962.683C490.251 962.683 490.674 962.683 490.832 962.472C491.043 962.261 491.255 962.049 491.255 961.838C491.273 961.723 491.264 961.605 491.227 961.495C491.19 961.385 491.127 961.285 491.044 961.204C490.833 960.993 490.833 960.781 490.621 960.781C490.409 960.781 490.198 960.57 489.776 960.358C489.565 960.147 489.142 960.147 488.931 959.935C488.508 959.724 488.297 959.512 487.874 959.301C487.475 959.082 487.118 958.796 486.817 958.456C486.606 958.033 486.394 957.822 486.183 957.399C486.01 956.944 485.938 956.458 485.972 955.973C485.974 955.467 486.121 954.972 486.395 954.547C486.634 954.096 487.002 953.728 487.452 953.49C487.875 953.279 488.509 953.067 488.878 952.856C489.476 952.644 490.129 952.644 490.727 952.856C491.608 952.944 492.458 953.233 493.21 953.701C493.787 954.063 494.334 954.469 494.848 954.916L492.999 956.976C492.642 956.63 492.232 956.345 491.784 956.131C491.41 955.912 490.998 955.769 490.569 955.708C489.724 955.708 489.143 955.919 489.143 956.553C489.125 956.667 489.135 956.785 489.171 956.895C489.208 957.006 489.271 957.106 489.354 957.187L489.777 957.61C489.988 957.821 490.2 957.821 490.411 958.033C490.622 958.245 491.045 958.244 491.256 958.456C491.637 958.615 491.993 958.829 492.313 959.09C492.712 959.308 493.069 959.594 493.37 959.935C493.642 960.247 493.857 960.605 494.004 960.992C494.177 961.446 494.249 961.933 494.215 962.418C494.213 962.924 494.066 963.418 493.792 963.844C493.554 964.294 493.185 964.662 492.735 964.901C492.237 965.22 491.68 965.435 491.097 965.535C491.097 965.324 490.305 965.324 489.459 965.324" fill="#020304"/>
                                <path id="Path_362" d="M503.09 966.591C502.289 966.594 501.503 966.374 500.818 965.957C500.158 965.542 499.539 965.064 498.969 964.531C498.506 963.881 498.1 963.191 497.754 962.471C497.339 960.674 497.487 958.793 498.177 957.083C498.481 956.352 498.973 955.714 499.603 955.234C500.22 954.759 500.918 954.401 501.663 954.177C502.387 953.899 503.173 953.826 503.935 953.966C504.737 953.964 505.523 954.183 506.207 954.6C506.868 955.016 507.487 955.493 508.056 956.026C508.52 956.677 508.926 957.366 509.271 958.086C509.687 959.883 509.539 961.764 508.848 963.474C508.545 964.206 508.053 964.844 507.422 965.323C506.806 965.799 506.108 966.157 505.362 966.38C504.615 966.531 503.853 966.602 503.09 966.591M503.301 963.685C503.628 963.73 503.961 963.674 504.254 963.522C504.548 963.371 504.787 963.133 504.939 962.84C505.354 962.064 505.639 961.225 505.784 960.357C505.882 959.506 505.735 958.645 505.361 957.874C505.213 957.564 504.981 957.301 504.692 957.115C504.403 956.928 504.067 956.825 503.723 956.817C503.397 956.772 503.064 956.829 502.771 956.98C502.477 957.131 502.238 957.37 502.085 957.662C501.671 958.439 501.386 959.277 501.24 960.145C501.143 960.996 501.29 961.857 501.663 962.628C501.844 962.913 502.083 963.154 502.366 963.337C502.649 963.519 502.968 963.638 503.301 963.685" fill="#020304"/>
                                <path id="Path_363" d="M512.652 966.802L513.286 954.602L516.192 954.813L516.403 956.873C516.786 956.13 517.35 955.494 518.041 955.024C518.296 954.816 518.596 954.67 518.917 954.597C519.237 954.524 519.57 954.525 519.89 954.601H520.735C520.946 954.601 521.158 954.812 521.369 954.812L520.524 957.929C520.313 957.929 520.101 957.718 519.89 957.718H519.252C518.75 957.746 518.262 957.891 517.826 958.141C517.521 958.315 517.256 958.551 517.047 958.833C516.838 959.115 516.689 959.437 516.611 959.779L516.188 966.805L512.652 966.802Z" fill="#020304"/>
                                <path id="Path_364" d="M527.918 972.561C527.225 972.595 526.53 972.524 525.858 972.35C525.224 972.139 524.643 972.139 524.22 971.716C523.77 971.477 523.402 971.109 523.163 970.659C522.896 970.23 522.75 969.738 522.74 969.233C522.77 968.711 522.937 968.207 523.224 967.77C523.512 967.334 523.91 966.982 524.378 966.75C524.001 966.584 523.699 966.282 523.533 965.905C523.276 965.542 523.137 965.108 523.137 964.663C523.137 964.218 523.276 963.784 523.533 963.422C523.772 962.972 524.14 962.604 524.59 962.366C524.108 962.095 523.734 961.666 523.533 961.151C523.312 960.556 523.17 959.934 523.11 959.302C523.118 958.662 523.262 958.032 523.533 957.453C523.743 956.886 524.109 956.392 524.59 956.027C525.064 955.623 525.625 955.334 526.228 955.182C526.828 955.005 527.453 954.933 528.077 954.971C528.702 954.907 529.332 954.979 529.926 955.182H534.258V957.876H532.409C532.486 957.961 532.544 958.062 532.58 958.171C532.617 958.28 532.63 958.395 532.62 958.51C532.62 958.721 532.831 959.144 532.831 959.355C532.797 959.991 532.654 960.616 532.408 961.204C532.192 961.71 531.822 962.135 531.351 962.419C530.928 962.78 530.446 963.066 529.925 963.264C529.326 963.441 528.7 963.512 528.076 963.475C527.591 963.512 527.104 963.44 526.65 963.264L526.227 963.687V964.11C526.227 964.533 526.438 964.744 526.65 964.744C526.861 964.955 527.495 964.955 528.076 964.955H529.925C531.164 964.862 532.401 965.157 533.464 965.8C533.876 966.007 534.214 966.337 534.432 966.743C534.649 967.15 534.736 967.614 534.679 968.072C534.677 968.645 534.532 969.208 534.256 969.71C533.892 970.285 533.405 970.772 532.83 971.136C532.204 971.546 531.505 971.833 530.77 971.981C529.902 972.464 528.905 972.667 527.917 972.562M528.551 970.291C529.259 970.283 529.958 970.139 530.611 969.868C530.851 969.814 531.066 969.68 531.22 969.488C531.374 969.296 531.457 969.057 531.456 968.811C531.453 968.647 531.413 968.487 531.34 968.341C531.267 968.194 531.162 968.066 531.033 967.966C530.822 967.755 530.188 967.755 529.607 967.755H527.341C527.226 967.773 527.109 967.763 526.998 967.727C526.888 967.69 526.788 967.627 526.707 967.544C526.347 967.852 526.12 968.287 526.073 968.759C526.071 969.005 526.153 969.245 526.307 969.438C526.461 969.63 526.677 969.763 526.918 969.815C527.077 970.291 527.71 970.291 528.556 970.291M528.133 961.416C528.567 961.379 528.985 961.234 529.348 960.993C529.528 960.807 529.661 960.58 529.735 960.332C529.808 960.083 529.821 959.821 529.771 959.567C529.769 959.061 529.622 958.566 529.348 958.141C529.199 957.971 529.009 957.844 528.796 957.769C528.583 957.695 528.355 957.678 528.133 957.718C527.699 957.754 527.281 957.9 526.918 958.141C526.738 958.327 526.606 958.554 526.532 958.802C526.458 959.05 526.446 959.313 526.495 959.567C526.472 960.076 526.621 960.578 526.918 960.993C527.292 961.211 527.705 961.355 528.133 961.416" fill="#020304"/>
                                <path id="Path_365" d="M540.545 967.806C540.059 967.87 539.565 967.797 539.119 967.595C538.656 967.407 538.241 967.119 537.904 966.75C537.519 966.428 537.227 966.008 537.059 965.535C536.886 965.081 536.814 964.594 536.848 964.109C536.825 963.492 536.964 962.879 537.251 962.332C537.538 961.785 537.964 961.323 538.486 960.992C540.048 960.05 541.839 959.557 543.663 959.566C543.691 959.345 543.667 959.12 543.594 958.909C543.52 958.698 543.399 958.507 543.24 958.351C543.029 957.928 542.395 957.928 541.814 957.928C541.246 957.962 540.69 958.106 540.176 958.351C539.604 958.58 539.056 958.863 538.538 959.196L537.323 956.924L539.806 955.709C540.685 955.465 541.589 955.323 542.5 955.286C543.141 955.239 543.786 955.323 544.394 955.532C545.003 955.741 545.562 956.07 546.04 956.501C546.506 957.073 546.854 957.732 547.063 958.439C547.271 959.147 547.337 959.889 547.255 960.622V967.648H544.349L544.138 966.433C543.638 966.852 543.088 967.207 542.5 967.49C541.862 967.668 541.207 967.775 540.545 967.807M541.813 964.954C542.179 965.018 542.556 964.943 542.87 964.743C543.081 964.532 543.504 964.32 543.715 963.898V961.838C542.769 961.933 541.852 962.221 541.021 962.683C540.598 963.106 540.176 963.528 540.387 963.898C540.39 964.061 540.43 964.222 540.503 964.368C540.576 964.514 540.681 964.642 540.81 964.743C541.111 964.923 541.462 964.997 541.81 964.954" fill="#020304"/>
                                <path id="Path_366" d="M551.532 967.383L551.109 955.183L554.015 954.972L554.438 956.398C554.946 955.88 555.494 955.403 556.076 954.972C556.849 954.484 557.767 954.281 558.673 954.397C559.579 954.513 560.417 954.94 561.042 955.606C561.731 956.658 562.099 957.888 562.099 959.145L562.522 966.594L558.983 966.805L558.772 959.779C558.764 959.14 558.62 958.509 558.349 957.93C558.138 957.507 557.715 957.507 557.134 957.507C556.7 957.543 556.282 957.689 555.919 957.93C555.496 958.141 555.285 958.564 554.862 958.775L555.285 967.069L551.532 967.383Z" fill="#020304"/>
                                <path id="Path_367" d="M567.433 952.486C567.179 952.539 566.916 952.528 566.667 952.455C566.418 952.381 566.191 952.246 566.007 952.063C565.647 951.755 565.419 951.32 565.373 950.848C565.375 950.342 565.522 949.847 565.796 949.422C565.975 949.221 566.194 949.06 566.44 948.951C566.686 948.841 566.953 948.786 567.222 948.788C567.476 948.735 567.739 948.746 567.988 948.82C568.237 948.893 568.464 949.028 568.648 949.211C569.008 949.519 569.236 949.954 569.282 950.426C569.28 950.932 569.133 951.427 568.859 951.852C568.692 952.067 568.474 952.237 568.225 952.347C567.977 952.458 567.704 952.506 567.433 952.486M566.588 966.591L565.743 954.391L569.282 954.18L570.127 966.38L566.588 966.591Z" fill="#020304"/>
                                <path id="Path_368" d="M577.997 965.957C577.164 965.994 576.329 965.923 575.514 965.746C574.702 965.525 573.934 965.168 573.242 964.689L574.668 962.206C575.197 962.519 575.744 962.801 576.306 963.051C576.834 963.225 577.39 963.297 577.944 963.262C578.385 963.259 578.812 963.11 579.159 962.839C579.582 962.628 579.582 962.416 579.37 961.994C579.37 961.783 579.37 961.571 579.159 961.571C578.948 961.36 578.736 961.36 578.525 961.148C578.269 960.999 577.976 960.925 577.68 960.937C577.335 960.837 576.981 960.766 576.624 960.726C576.201 960.515 575.779 960.515 575.409 960.303C575.028 960.144 574.672 959.93 574.352 959.669C573.973 959.407 573.679 959.039 573.507 958.612C573.288 958.239 573.145 957.826 573.084 957.397C573.046 956.843 573.118 956.286 573.295 955.759C573.483 955.296 573.771 954.881 574.14 954.544C574.55 954.164 575.036 953.876 575.566 953.699C576.161 953.478 576.783 953.336 577.415 953.276C578.248 953.239 579.083 953.31 579.898 953.487C580.546 953.692 581.167 953.976 581.747 954.332L580.321 956.604C579.866 956.349 579.389 956.137 578.895 955.97C578.508 955.819 578.095 955.747 577.68 955.759C576.835 955.759 576.465 956.182 576.465 956.816C576.465 957.027 576.465 957.239 576.676 957.239C576.887 957.45 577.099 957.45 577.31 957.662C577.521 957.662 577.733 957.873 578.155 957.873C578.577 957.873 578.789 958.084 579 958.084C579.423 958.295 579.845 958.295 580.215 958.507C580.596 958.667 580.952 958.88 581.272 959.141C581.651 959.403 581.944 959.771 582.117 960.198C582.384 960.627 582.53 961.119 582.54 961.624C582.578 962.179 582.506 962.735 582.329 963.262C582.289 963.516 582.193 963.756 582.046 963.967C581.9 964.177 581.708 964.352 581.484 964.477C581.031 964.859 580.555 965.212 580.058 965.534C579.403 965.801 578.705 965.944 577.998 965.957" fill="#020304"/>
                                <path id="Path_369" d="M589.356 964.901C588.87 964.965 588.376 964.892 587.93 964.69L586.715 964.056C586.336 963.794 586.043 963.427 585.87 962.999C585.603 962.571 585.457 962.078 585.447 961.573C585.348 960.992 585.409 960.395 585.623 959.846C585.837 959.297 586.196 958.817 586.662 958.456C588.171 957.459 589.856 956.759 591.628 956.396C591.663 956.153 591.621 955.904 591.507 955.686C591.394 955.468 591.214 955.292 590.994 955.181C590.786 955.044 590.551 954.954 590.304 954.918C590.058 954.881 589.807 954.899 589.568 954.97C589.062 954.973 588.567 955.119 588.142 955.393C587.613 955.667 587.132 956.023 586.716 956.449L585.078 954.178C585.748 953.576 586.517 953.094 587.35 952.752C588.201 952.337 589.109 952.052 590.044 951.907C590.686 951.79 591.345 951.805 591.981 951.95C592.617 952.095 593.217 952.368 593.744 952.752C594.743 953.816 595.324 955.204 595.382 956.661L596.227 963.476L593.321 963.899L592.898 962.684C592.487 963.159 592.006 963.569 591.472 963.899C590.878 964.429 590.145 964.776 589.359 964.899M590.416 962.046C590.807 962.033 591.181 961.883 591.473 961.623C591.684 961.412 592.107 961.2 592.318 960.778L592.107 958.718C591.218 958.904 590.374 959.263 589.624 959.774C589.264 960.082 589.037 960.518 588.99 960.989C588.993 961.153 589.033 961.313 589.106 961.459C589.179 961.606 589.284 961.734 589.413 961.834C589.557 961.935 589.72 962.006 589.891 962.042C590.063 962.078 590.241 962.079 590.413 962.045" fill="#020304"/>
                                <path id="Path_370" d="M604.677 962.841C604.065 962.946 603.439 962.946 602.828 962.841C602.283 962.697 601.789 962.404 601.402 961.996C601.02 961.543 600.667 961.066 600.345 960.57C600.123 959.974 599.981 959.353 599.922 958.721L599.288 953.755L597.65 953.966L597.227 951.272L599.076 950.849V947.521L601.982 947.098L602.405 950.215L605.311 949.792L605.734 952.486L602.828 952.909L603.462 957.664C603.505 958.197 603.729 958.7 604.096 959.09C604.264 959.225 604.463 959.315 604.676 959.352C604.888 959.389 605.107 959.371 605.311 959.301C605.425 959.319 605.543 959.309 605.653 959.272C605.764 959.236 605.864 959.173 605.945 959.09C606.03 959.013 606.131 958.955 606.24 958.919C606.349 958.882 606.464 958.869 606.579 958.879L607.636 961.362C607.425 961.573 607.002 961.573 606.579 961.785C606.091 962.352 605.418 962.727 604.679 962.842" fill="#020304"/>
                                <path id="Path_371" d="M609.855 947.732C609.301 947.77 608.744 947.698 608.217 947.521C607.79 947.24 607.487 946.805 607.372 946.306C607.277 946.055 607.267 945.779 607.344 945.522C607.42 945.264 607.579 945.039 607.795 944.88C608.205 944.5 608.691 944.212 609.221 944.035C609.776 943.998 610.332 944.069 610.859 944.246C611.287 944.527 611.589 944.962 611.704 945.461C611.757 945.715 611.747 945.979 611.673 946.227C611.599 946.476 611.464 946.703 611.281 946.887C610.9 947.303 610.403 947.597 609.855 947.732ZM610.278 961.837L608.218 949.845L611.758 949.211L613.818 961.203L610.278 961.837Z" fill="#020304"/>
                                <path id="Path_372" d="M623.488 959.724C622.674 959.935 621.82 959.935 621.005 959.724C620.271 959.576 619.572 959.289 618.945 958.879C618.299 958.444 617.743 957.887 617.307 957.241C616.826 956.474 616.47 955.636 616.25 954.758C616.039 953.872 616.039 952.949 616.25 952.064C616.397 951.263 616.683 950.494 617.095 949.792C617.531 949.145 618.087 948.589 618.733 948.154C619.36 947.743 620.059 947.456 620.793 947.309C621.536 947.098 622.322 947.098 623.064 947.309C623.713 947.514 624.334 947.798 624.913 948.154C625.478 948.561 625.903 949.133 626.128 949.792C626.541 950.494 626.827 951.263 626.973 952.064C626.973 952.487 626.973 952.698 627.184 952.909V953.543L619.947 954.969C620.201 955.674 620.71 956.259 621.373 956.607C622.022 956.887 622.741 956.961 623.433 956.818C624.323 956.553 625.162 956.143 625.916 955.603L627.554 957.452C626.988 957.988 626.368 958.466 625.705 958.878C625.022 959.29 624.271 959.576 623.486 959.723M619.577 952.697L623.909 951.852C623.757 951.248 623.468 950.688 623.064 950.214C622.593 949.867 622.007 949.715 621.426 949.791C620.882 949.935 620.388 950.227 620 950.636C619.768 950.919 619.608 951.255 619.534 951.613C619.46 951.972 619.475 952.344 619.577 952.696" fill="#020304"/>
                            </g>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>Toetsorganisatie</h4>
                        <p>
                            De kwaliteit van de hele organisatie van het toetsbouwwerk is belangrijk om toetskwaliteit te kunnen garanderen. Met de toetsorganisatie wordt verwezen naar de wijze waarop docenten, examencommissie, toetscommissie, management en ondersteunende medewerkers doelgericht met elkaar samenwerken om de gewenste toetskwaliteit op alle toetsentiteiten te realiseren (Van Deursen & Van Zijl, 2015). Daarbij gaat het om het vaststellen van rollen, taken en verantwoordelijkheden van actoren/betrokkenen bij toetsing, het rolvast met elkaar samenwerken en de logistieke organisatie van toetsing. 
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g id="toetsbekwaamheid-bg">
                            <path id="Path 8" d="M87.1401 575.381C89.593 576.257 91.7584 577.789 93.4005 579.811C95.0426 581.833 96.0982 584.266 96.4525 586.847C104.157 642.153 128.794 691.246 148.124 722.714C169.286 757.184 188.929 778.656 189.137 778.85C191.693 781.631 193.042 785.312 192.888 789.086C192.735 792.86 191.091 796.419 188.317 798.982C185.543 801.546 181.866 802.905 178.092 802.762C174.317 802.619 170.754 800.985 168.182 798.218C167.347 797.275 146.817 774.938 124.19 738.269C110.92 716.738 99.6463 694.73 90.7481 672.775C79.511 645.185 71.9211 617.59 68.1772 590.794C67.8538 588.364 68.159 585.891 69.0638 583.613C69.9685 581.334 71.4426 579.326 73.345 577.78C75.2474 576.234 77.5145 575.201 79.9298 574.781C82.345 574.361 84.8275 574.568 87.1401 575.381V575.381Z" fill="white"/>
                            <g id="toetsbekwaamheid">
                                <path id="Path_373" d="M76.1875 588.238L89.2355 585.755L88.3905 581.423L91.5075 580.789L93.7795 593.203L90.6625 593.837L90.0285 589.294L76.9805 591.777L76.1875 588.238Z" fill="#020304"/>
                                <path id="Path_374" d="M79.0921 602.925C78.8808 602.182 78.8808 601.395 79.0921 600.653C79.2397 599.919 79.5265 599.219 79.9371 598.593C80.3723 597.946 80.9286 597.39 81.5751 596.955C82.4055 596.45 83.3169 596.092 84.2691 595.898C85.2262 595.686 86.218 595.686 87.1751 595.898C87.9762 596.044 88.7452 596.33 89.4471 596.743C90.0937 597.178 90.6499 597.734 91.0851 598.381C91.9252 599.658 92.2288 601.214 91.9301 602.713C91.7826 603.447 91.4958 604.146 91.0851 604.773C90.65 605.42 90.0937 605.976 89.4471 606.411C88.6167 606.916 87.7053 607.273 86.7531 607.468C85.796 607.679 84.8043 607.679 83.8471 607.468C83.0461 607.322 82.277 607.036 81.5751 606.623C80.9286 606.188 80.3724 605.631 79.9371 604.985C79.4236 604.418 79.1246 603.689 79.0921 602.925M81.9981 602.344C82.0481 602.671 82.1882 602.978 82.4028 603.23C82.6175 603.482 82.898 603.669 83.2131 603.77C84.0987 603.981 85.0216 603.981 85.9071 603.77C86.8032 603.607 87.6516 603.246 88.3901 602.713C88.6939 602.526 88.9232 602.239 89.0389 601.902C89.1546 601.565 89.1493 601.198 89.0241 600.864C88.9742 600.537 88.834 600.23 88.6194 599.978C88.4048 599.726 88.1242 599.539 87.8091 599.438C86.9236 599.226 86.0007 599.226 85.1151 599.438C84.2191 599.6 83.3707 599.961 82.6321 600.494C82.347 600.698 82.1326 600.985 82.019 601.317C81.9053 601.648 81.898 602.007 81.9981 602.343" fill="#020304"/>
                                <path id="Path_375" d="M82.4217 617.822C82.2445 617.007 82.1736 616.172 82.2108 615.339C82.2508 614.513 82.5461 613.719 83.0558 613.068C83.5448 612.403 84.093 611.785 84.6938 611.219C85.4605 610.738 86.2985 610.381 87.1768 610.162C88.0669 610.013 88.9683 609.942 89.8708 609.951C90.6718 610.097 91.4408 610.383 92.1427 610.796C92.7808 611.154 93.3384 611.639 93.7807 612.222C94.2561 612.838 94.6144 613.536 94.8377 614.282C94.9865 615.03 95.0572 615.791 95.0487 616.554C94.9099 617.226 94.6211 617.858 94.2037 618.403C93.7487 618.974 93.1937 619.457 92.5657 619.829C91.8639 620.242 91.0948 620.528 90.2937 620.674C89.8707 620.674 89.6598 620.885 89.2368 620.885H88.6027L86.7537 613.648C85.9087 614.071 85.3277 614.493 85.1157 615.286C84.9045 616.028 84.9045 616.815 85.1157 617.557C85.367 618.495 85.8585 619.35 86.5417 620.04L84.6927 621.678C84.0478 621.213 83.5522 620.571 83.2668 619.829C82.9 619.199 82.616 618.524 82.4217 617.821M89.4478 613.278L90.5047 617.61C91.1387 617.399 91.7198 617.187 91.9308 616.765C92.1169 616.54 92.2354 616.266 92.2728 615.976C92.3101 615.687 92.2647 615.392 92.1418 615.127C91.9846 614.534 91.6064 614.024 91.0847 613.701C90.8737 613.278 90.2397 613.067 89.4467 613.278" fill="#020304"/>
                                <path id="Path_376" d="M85.907 630.45C85.7585 629.774 85.6877 629.083 85.696 628.39C85.6938 628.121 85.7492 627.855 85.8586 627.609C85.9679 627.363 86.1286 627.143 86.33 626.964C86.6424 626.518 87.0596 626.155 87.545 625.907C88.1245 625.551 88.7455 625.268 89.394 625.062L94.149 623.636L93.726 621.998L96.42 621.153L97.054 623.002L100.382 622.579L101.227 625.485L98.11 626.33L98.955 629.236L96.261 630.081L95.416 627.175L90.661 628.601C90.4076 628.641 90.1666 628.738 89.9561 628.884C89.7456 629.03 89.5712 629.223 89.446 629.446C89.2698 629.826 89.197 630.245 89.235 630.661C89.235 630.872 89.446 631.084 89.446 631.295C89.657 631.506 89.657 631.718 89.869 631.718L87.386 632.933C87.1252 632.613 86.9117 632.257 86.752 631.876C86.329 631.717 86.118 631.084 85.907 630.45" fill="#020304"/>
                                <path id="Path_377" d="M88.6026 639.534C88.3214 638.737 88.2487 637.883 88.3916 637.051C88.3949 636.183 88.6127 635.33 89.0256 634.568L91.7196 635.413C91.4981 636.008 91.3559 636.629 91.2966 637.262C91.2589 637.816 91.3306 638.373 91.5076 638.9C91.6135 639.305 91.8335 639.672 92.1416 639.957C92.3973 640.106 92.6906 640.179 92.9866 640.168C93.0964 640.16 93.1998 640.113 93.2776 640.036C93.3554 639.958 93.4023 639.854 93.4096 639.745C93.4862 639.659 93.5444 639.558 93.5807 639.449C93.617 639.34 93.6305 639.225 93.6206 639.111C93.5826 638.812 93.6579 638.511 93.8316 638.266V637.209C93.7937 636.792 93.8665 636.373 94.0426 635.994C94.0789 635.559 94.2244 635.141 94.4656 634.779C94.62 634.341 94.9178 633.969 95.3106 633.723C95.7336 633.512 95.9446 633.089 96.5256 633.089C97.0588 632.941 97.6103 632.87 98.1636 632.878C98.4328 632.875 98.6993 632.931 98.9452 633.04C99.1912 633.15 99.4109 633.31 99.5896 633.512C100.093 633.804 100.512 634.223 100.805 634.727C101.243 635.259 101.534 635.896 101.65 636.576C101.931 637.372 102.003 638.226 101.861 639.059C101.853 639.766 101.709 640.465 101.438 641.119L98.7436 640.063C98.8602 639.58 99.0014 639.104 99.1666 638.637C99.2045 638.22 99.1317 637.801 98.9556 637.422C98.7446 636.577 98.3216 636.207 97.5296 636.365C97.4198 636.372 97.3164 636.419 97.2386 636.497C97.1608 636.574 97.1139 636.678 97.1066 636.788C97.1066 636.999 96.8956 637.211 96.8956 637.422V639.271C96.9335 639.687 96.8607 640.106 96.6846 640.486C96.6483 640.92 96.5028 641.338 96.2616 641.701C96.1073 642.138 95.8095 642.511 95.4166 642.758C95.1087 643.118 94.6733 643.345 94.2016 643.392C93.6739 643.565 93.118 643.637 92.5636 643.603C92.2944 643.605 92.0279 643.549 91.782 643.44C91.536 643.331 91.3163 643.17 91.1376 642.969L89.9226 641.754C89.5668 641.489 89.2669 641.157 89.0402 640.776C88.8135 640.395 88.6644 639.973 88.6016 639.535" fill="#020304"/>
                                <path id="Path_378" d="M93.1449 654.061C92.9712 653.534 92.8996 652.978 92.9339 652.423C92.9254 651.752 93.1494 651.099 93.5679 650.574L92.1419 650.785L91.2969 648.091L107.832 642.491L109.047 646.031L104.926 647.457L103.077 647.88C103.631 648.183 104.116 648.596 104.503 649.095C104.864 649.519 105.15 650.001 105.348 650.521C105.628 651.17 105.702 651.889 105.559 652.581C105.452 653.229 105.237 653.853 104.925 654.43C104.49 655.077 103.933 655.633 103.287 656.068C102.558 656.525 101.799 656.931 101.015 657.283C100.082 657.608 99.0956 657.751 98.1089 657.706C97.2664 657.673 96.4318 657.531 95.6259 657.283C94.9317 657.011 94.302 656.597 93.7769 656.068C93.72 655.36 93.5032 654.674 93.1429 654.061M95.8369 652.161C95.9186 652.451 96.0732 652.715 96.2859 652.927C96.4986 653.14 96.7623 653.294 97.0519 653.376C98.0199 653.597 99.0318 653.523 99.9579 653.165C102.018 652.531 102.864 651.316 102.441 650.048C102.127 649.311 101.54 648.724 100.803 648.41L96.0479 650.048C95.8717 650.428 95.7989 650.847 95.8369 651.263C95.7331 651.39 95.6763 651.549 95.6763 651.713C95.6763 651.877 95.7331 652.036 95.8369 652.163" fill="#020304"/>
                                <path id="Path_379" d="M98.1107 667.692C97.7873 666.905 97.6429 666.057 97.6877 665.209C97.6952 664.432 97.8383 663.663 98.1107 662.937C98.4144 662.205 98.9064 661.567 99.5367 661.088C100.256 660.444 101.102 659.958 102.02 659.661C102.879 659.337 103.796 659.194 104.714 659.239C105.556 659.272 106.391 659.414 107.197 659.661C108.042 659.872 108.412 660.507 109.046 660.877C109.517 661.447 109.924 662.067 110.261 662.726C110.483 663.466 110.624 664.227 110.684 664.998C110.685 665.732 110.464 666.451 110.05 667.058C109.632 667.651 109.154 668.2 108.624 668.696C108.007 669.171 107.309 669.529 106.564 669.753C106.308 669.902 106.015 669.975 105.719 669.963C105.508 669.963 105.296 670.175 105.085 670.175L102.391 663.149C102.053 663.309 101.753 663.538 101.508 663.819C101.262 664.101 101.077 664.43 100.965 664.786C100.742 665.543 100.817 666.356 101.176 667.059C101.548 667.927 102.107 668.703 102.814 669.331L101.176 671.18C100.529 670.744 99.9729 670.188 99.5377 669.542C99.1677 668.908 98.3227 668.327 98.1117 667.693M104.504 662.305L106.142 666.426C106.708 666.216 107.203 665.849 107.568 665.369C107.772 665.145 107.885 664.853 107.885 664.55C107.885 664.247 107.772 663.955 107.568 663.731C107.493 663.462 107.36 663.213 107.177 663.003C106.994 662.793 106.766 662.626 106.511 662.515C106.217 662.324 105.881 662.205 105.533 662.169C105.184 662.132 104.831 662.179 104.504 662.305Z" fill="#020304"/>
                                <path id="Path_380" d="M101.439 675.559L117.763 668.959L119.189 672.287L109.889 675.987L115.911 677.836L117.337 681.536L110.945 679.476L105.979 686.502L104.553 682.802L108.092 678.47L105.82 677.625L102.914 678.84L101.439 675.559Z" fill="#020304"/>
                                <path id="Path_381" d="M108.043 691.676L117.975 683.593L119.401 686.921L114.646 690.46C114.128 690.751 113.649 691.107 113.22 691.517C112.694 691.9 112.147 692.252 111.582 692.574C112.177 692.352 112.799 692.21 113.431 692.151C114.067 692.117 114.692 691.974 115.28 691.728L121.091 690.513L122.306 693.419L117.551 697.119C116.6 697.823 115.649 698.528 114.698 699.232C115.931 698.95 117.165 698.668 118.398 698.387L124.209 697.172L125.635 700.289L113.009 702.772L111.16 698.863L115.281 695.746C115.704 695.323 116.338 695.112 116.707 694.689C117.233 694.306 117.78 693.953 118.345 693.632C117.75 693.853 117.128 693.995 116.496 694.055C115.862 694.266 115.281 694.266 114.858 694.478L109.892 695.535L108.043 691.676Z" fill="#020304"/>
                                <path id="Path_382" d="M116.917 711.116C116.704 710.665 116.561 710.184 116.494 709.69C116.456 709.204 116.529 708.717 116.705 708.264C116.886 707.796 117.163 707.371 117.517 707.016C117.872 706.661 118.297 706.384 118.765 706.204C119.31 705.886 119.937 705.737 120.567 705.774C121.196 705.812 121.801 706.034 122.304 706.415C123.89 707.425 125.169 708.85 126.004 710.536C126.454 710.297 126.823 709.93 127.061 709.48C127.272 709.057 127.061 708.635 126.85 708.054C126.586 707.58 126.226 707.166 125.793 706.839C125.382 706.364 124.901 705.954 124.367 705.624L126.005 703.352C126.804 703.837 127.564 704.385 128.277 704.99C128.944 705.652 129.497 706.42 129.915 707.262C130.55 708.463 130.701 709.861 130.338 711.171C129.915 712.386 128.912 713.231 127.01 714.288L120.618 717.405L119.403 714.711L120.46 713.866C119.799 713.597 119.178 713.242 118.611 712.809C117.971 712.327 117.402 711.758 116.921 711.118M120.038 710.907C120.204 711.284 120.506 711.585 120.883 711.752C121.023 711.889 121.188 711.997 121.369 712.069C121.551 712.142 121.745 712.178 121.94 712.175L123.789 711.118C123.272 710.348 122.65 709.654 121.94 709.058C121.306 708.847 120.883 708.635 120.514 708.847C120.091 709.058 119.88 709.27 119.88 709.692C119.798 710.103 119.854 710.53 120.038 710.907" fill="#020304"/>
                                <path id="Path_383" d="M123.573 723.742C123.36 723.291 123.218 722.81 123.15 722.316C123.113 721.831 123.185 721.343 123.361 720.89L123.995 719.675C124.362 719.28 124.769 718.926 125.21 718.618C125.748 718.307 126.358 718.143 126.98 718.143C127.601 718.143 128.212 718.307 128.749 718.618C130.35 719.585 131.692 720.926 132.658 722.527C132.874 722.433 133.064 722.287 133.212 722.103C133.359 721.919 133.459 721.702 133.503 721.47C133.714 721.047 133.503 720.625 133.292 720.044C133.028 719.57 132.668 719.156 132.235 718.829C131.806 718.419 131.327 718.064 130.809 717.773L132.235 715.501C133.035 715.986 133.794 716.534 134.507 717.139C135.245 717.737 135.811 718.522 136.145 719.411C136.53 719.977 136.787 720.62 136.896 721.295C137.006 721.97 136.966 722.662 136.779 723.32C136.496 724.022 136.073 724.66 135.538 725.195C135.002 725.731 134.364 726.153 133.662 726.437L127.481 729.765L126.055 727.071L127.112 726.226C126.452 725.958 125.83 725.602 125.263 725.169C124.872 725.125 124.503 724.966 124.202 724.712C123.902 724.458 123.683 724.121 123.573 723.743M126.69 723.532C126.856 723.909 127.158 724.211 127.535 724.377C127.675 724.514 127.84 724.622 128.021 724.695C128.203 724.767 128.397 724.803 128.592 724.8L130.441 723.743C129.864 722.955 129.17 722.26 128.381 721.683C128.158 721.579 127.915 721.524 127.668 721.524C127.422 721.524 127.179 721.579 126.955 721.683C126.532 721.894 126.321 722.106 126.321 722.528C126.35 722.889 126.478 723.235 126.691 723.528" fill="#020304"/>
                                <path id="Path_384" d="M129.121 733.673L139.898 727.281L141.324 729.975L140.109 731.032C140.828 731.227 141.521 731.51 142.169 731.877C142.807 732.235 143.365 732.721 143.807 733.303C144.175 733.932 144.392 734.637 144.441 735.363C144.45 736.034 144.226 736.687 143.807 737.212C144.541 737.36 145.241 737.647 145.867 738.057C146.56 738.433 147.129 739.002 147.505 739.695C147.818 740.184 148.019 740.736 148.092 741.312C148.165 741.887 148.109 742.472 147.928 743.023C147.314 744.166 146.377 745.103 145.234 745.717L138.634 749.626L136.785 746.509L142.966 742.809C143.552 742.555 144.048 742.132 144.392 741.594C144.518 741.403 144.567 741.171 144.527 740.945C144.488 740.719 144.364 740.517 144.181 740.379C143.952 740.034 143.648 739.745 143.291 739.535C142.934 739.324 142.534 739.198 142.121 739.164L134.884 743.496L133.035 740.379L139.216 736.679C139.802 736.425 140.298 736.002 140.642 735.464C140.768 735.273 140.817 735.041 140.777 734.815C140.738 734.589 140.614 734.387 140.431 734.249C140.202 733.904 139.898 733.615 139.541 733.405C139.184 733.194 138.784 733.068 138.371 733.034L131.134 737.366L129.121 733.673Z" fill="#020304"/>
                                <path id="Path_385" d="M140.742 752.903L155.428 743.395L157.488 746.511L153.788 748.782L151.728 749.839C152.377 750.045 152.998 750.328 153.577 750.684C154.27 751.06 154.839 751.629 155.215 752.323C155.577 752.747 155.81 753.266 155.885 753.819C155.96 754.372 155.874 754.934 155.638 755.439C155.07 756.616 154.12 757.565 152.944 758.133L146.552 762.255L144.492 759.137L150.514 755.229C151.1 754.974 151.596 754.551 151.94 754.013C152.013 753.81 152.032 753.591 151.995 753.378C151.958 753.165 151.867 752.965 151.729 752.798C151.518 752.375 151.095 752.164 150.884 751.953C150.456 751.687 149.963 751.54 149.458 751.531L142.432 756.073L140.742 752.903Z" fill="#020304"/>
                                <path id="Path_386" d="M152.102 770.706C151.675 769.985 151.321 769.224 151.045 768.434C150.834 767.62 150.834 766.765 151.045 765.951C151.224 765.159 151.508 764.395 151.89 763.679C152.416 762.904 153.123 762.269 153.95 761.83C154.659 761.245 155.521 760.878 156.433 760.773C157.247 760.561 158.102 760.561 158.916 760.773C159.651 760.92 160.35 761.207 160.976 761.618C161.614 761.976 162.172 762.461 162.614 763.044C162.984 763.731 163.354 764.418 163.671 765.104C163.777 765.786 163.777 766.481 163.671 767.164C163.403 767.824 163.047 768.446 162.614 769.013C162.089 769.654 161.465 770.207 160.765 770.651C160.532 770.873 160.238 771.02 159.92 771.074C159.835 771.15 159.734 771.208 159.625 771.245C159.516 771.281 159.401 771.295 159.286 771.285L155.165 765.104C154.858 765.357 154.606 765.67 154.424 766.025C154.242 766.379 154.135 766.766 154.108 767.164C154.107 767.899 154.328 768.617 154.742 769.224C155.261 770.041 156.075 770.627 157.014 770.862L155.957 773.133C155.193 772.876 154.491 772.463 153.897 771.918C153.523 771.871 153.165 771.736 152.852 771.525C152.54 771.314 152.281 771.032 152.097 770.703M156.851 763.835L159.334 767.535C159.968 767.112 160.391 766.69 160.391 766.109C160.47 765.822 160.472 765.521 160.398 765.233C160.324 764.946 160.176 764.683 159.968 764.471C159.577 764.017 159.09 763.656 158.542 763.414C157.952 763.409 157.371 763.555 156.852 763.837" fill="#020304"/>
                                <path id="Path_387" d="M157.277 777.522L167.42 770.285L169.48 773.191L159.337 780.429L157.277 777.522ZM169.903 770.496C169.696 770.283 169.548 770.02 169.474 769.733C169.399 769.445 169.402 769.144 169.48 768.858C169.481 768.593 169.562 768.335 169.713 768.118C169.864 767.901 170.078 767.735 170.325 767.643C170.732 767.329 171.24 767.178 171.751 767.22C172.276 767.369 172.73 767.702 173.031 768.157C173.332 768.613 173.459 769.161 173.389 769.703C173.389 769.967 173.308 770.225 173.157 770.442C173.006 770.659 172.792 770.825 172.544 770.918C172.138 771.231 171.63 771.382 171.118 771.341C170.86 771.318 170.611 771.229 170.398 771.081C170.185 770.932 170.014 770.731 169.903 770.496" fill="#020304"/>
                                <path id="Path_388" d="M164.511 787.663C164.073 787.131 163.782 786.493 163.666 785.814C163.455 785.144 163.455 784.424 163.666 783.754C163.834 782.987 164.198 782.278 164.723 781.694C165.286 781.026 165.904 780.407 166.572 779.845C167.302 779.264 168.149 778.85 169.055 778.63C169.795 778.408 170.557 778.266 171.327 778.207C172.062 778.206 172.78 778.427 173.387 778.841C173.897 779.204 174.374 779.61 174.813 780.056C175.167 780.562 175.451 781.113 175.658 781.694C175.764 782.235 175.764 782.791 175.658 783.332L177.084 782.117L180.412 779.634L182.684 782.54L168.843 793.317L166.994 790.834L167.839 789.777C167.168 789.786 166.515 789.561 165.99 789.143C165.363 788.806 164.848 788.292 164.511 787.664M167.417 786.607C167.498 786.772 167.617 786.915 167.764 787.026C167.911 787.136 168.081 787.21 168.262 787.241C168.642 787.417 169.061 787.49 169.477 787.452L173.598 784.335C173.636 783.919 173.563 783.499 173.387 783.12C173.176 782.697 173.176 782.486 172.964 782.275C172.751 782.06 172.495 781.892 172.213 781.783C171.931 781.674 171.629 781.625 171.326 781.641C170.417 781.756 169.557 782.122 168.843 782.697C168.057 783.209 167.419 783.92 166.994 784.757C166.918 785.077 166.917 785.41 166.99 785.731C167.063 786.052 167.21 786.351 167.417 786.606" fill="#020304"/>
                            </g>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>Toetsbekwaamheid</h4>
                        <p>
                            Met toetsbekwaamheid wordt in het toetsweb verwezen naar de deskundigheid die bij actoren binnen de opleiding aanwezig moet zijn om kwaliteit te realiseren op alle toetsentiteiten (Van Berkel, Sluijsmans & Joosten-ten Brinke, 2015). Specifiek voor de entiteit toetsen geldt dat de toetsbekwaamheid van docenten, examencommissies en andere betrokkenen van essentieel belang is: elke docent moet in staat zijn om toetsinformatie te interpreteren en te gebruiken om vast te stellen waar studenten staan en hoe deze informatie verder kan bijdragen aan het leren van de student (Straetmans, 2006).
                        </p>
                    </div>
                </Popup>
                <path id="Path_389" d="M525.643 328.061L527.281 63.71L531.824 63.499L532.669 328.853L525.643 328.061Z" fill="white"/>
                <path id="Path_390" d="M692.787 446.184L944.301 364.459L945.939 368.58L694.214 452.946L692.787 446.184Z" fill="white"/>
                <path id="Path_391" d="M367.215 446.184L115.913 364.459L114.275 368.58L366 452.946L367.215 446.184Z" fill="white"/>
                <path id="Path_392" d="M427.387 636.681L273.711 851.796L277.25 854.49L433.411 640.009L427.387 636.681Z" fill="white"/>
                <path id="Path_393" d="M631.982 637.051L785.448 852.166L782.12 855.072L625.748 640.591L631.982 637.051Z" fill="white"/>
                </g>
            </svg>

        </div>
        
    )
}

export default ToetsmodelComponent;
