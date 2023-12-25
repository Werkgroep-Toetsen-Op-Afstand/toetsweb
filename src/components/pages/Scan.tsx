import ScanCard from '../layout/ScanCard';
import {useContext, useState} from 'react';
import {useTitle} from "../../utils/hooks/TitleHook";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import Page from "../Page";
import {ScanDataContext} from "../../utils/contexts/ScanDataContext";

const Scan = () => {

    const {getTranslation} = useContext(LanguageContext);

    const [currentEntity, setCurrentEntity] = useState(0);
    const [currentElement, setCurrentElement] = useState(0);

    const {scanData: entities} = useContext(ScanDataContext);

    const entity = entities[currentEntity];

    useTitle(getTranslation("nav.scan"));

    const goToEntity = (index: number) => {
        setCurrentEntity(index);
        setCurrentElement(0);
    }

    const handleNext = () => {
        if (currentElement === 2) {
            if (currentEntity === 4) {
                window.location.href = '/result';
                return;
            }
            setCurrentElement(0);
            setCurrentEntity(currentEntity + 1);
            window.scrollTo(0, 0);
            return;
        }
        setCurrentElement(currentElement + 1);
        window.scrollTo(0, 0);
    }

    const handlePrevious = () => {
        if (currentElement === 0) {
            if (currentEntity === 0) {
                return;
            }
            setCurrentElement(2);
            setCurrentEntity(currentEntity - 1);
            window.scrollTo(0, 0);
            return;
        }
        setCurrentElement(currentElement - 1);
        window.scrollTo(0, 0);
    }

    return (
        <Page className='scan'>
            <div className={"scan__tabs"}>
                {
                    entities.map((entity, index) => {

                        const style = {
                            backgroundColor: currentEntity === index ? entity.color : 'white',
                            color: currentEntity === index ? 'white' : entity.color
                        }

                        return (
                            <button key={entity.name} className={"scan__tabs-item nobutton"} style={style}
                                    onClick={() => goToEntity(index)}>
                                <p>{entity.name}</p>
                            </button>
                        )
                    })
                }
            </div>
            <ScanCard entity={entity} entityIndex={currentEntity} element={entity.elements[currentElement]}
                      elementIndex={currentElement} handleNext={handleNext} handlePrevious={handlePrevious}/>
        </Page>
    )
}

export default Scan;
