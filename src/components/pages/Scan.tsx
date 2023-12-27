import ScanCard from '../layout/ScanCard';
import {useContext, useMemo, useState} from 'react';
import {useTitle} from "../../utils/hooks/TitleHook";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import Page from "../Page";
import {ScanDataContext} from "../../utils/contexts/ScanDataContext";
import {toast} from "react-toastify";

export interface ScanCardData {
    checkedPositie: number,
    checkedAmbitie: number,
    feedbackPositie: string,
    feedbackAmbitie: string,
}

const Scan = () => {

    const {getTranslation} = useContext(LanguageContext);

    const [currentEntity, setCurrentEntity] = useState(0);
    const [currentElement, setCurrentElement] = useState(0);

    const {scanData: entities} = useContext(ScanDataContext);

    const [scanCardData, setScanCardData] = useState<ScanCardData>({} as ScanCardData);

    useMemo(() => {
        const data =
            window.localStorage.getItem(`${currentEntity}.${currentElement}`) ?
                JSON.parse(window.localStorage.getItem(`${currentEntity}.${currentElement}`) as string)
                : {
                    checkedPositie: -1,
                    checkedAmbitie: -1,
                    feedbackPositie: '',
                    feedbackAmbitie: ''
                }
        setScanCardData(data);
    }, [currentEntity, currentElement]);

    const lastEntityTouched = useMemo(() => {
        for (let i = entities.length - 1; i >= 0; i--) {
            if (currentEntity === i) return i;
            const scanData = JSON.parse(window.localStorage.getItem(`${i}.0`) as string);
            if (!scanData) continue;
            if (scanData.checkedPositie !== null || scanData.checkedAmbitie !== null) {
                return i;
            }
        }
        return 0;
    }, [currentEntity, entities.length]);

    const entity = entities[currentEntity];

    useTitle(getTranslation("nav.scan"));

    const goToEntity = (index: number) => {
        if (index > lastEntityTouched) return;
        if (!isMoveAllowed()) return;
        setCurrentEntity(index);
        setCurrentElement(0);
    }

    const isMoveAllowed = () => {
        if (scanCardData.checkedPositie === -1 || scanCardData.checkedAmbitie === -1) {
            toast.error(getTranslation('positionambitionempty'));
            return false;
        }
        return true;
    }

    const handleNext = () => {
        if (!isMoveAllowed()) return;

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
        if (!isMoveAllowed()) return;

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
                        const notAllowed = index > lastEntityTouched;
                        const current = currentEntity === index;

                        const backgroundColor = () => {
                            if (notAllowed) return '#F9F9F9';
                            if (current) return entity.color;
                            return entity.elements[entity.elements.length - 1].phases[0].color;
                        }

                        const color = () => {
                            if (notAllowed) return 'gray';
                            return 'white';
                        }

                        return (
                            <button key={entity.name} className={`scan__tabs-item nobutton`}
                                    style={{
                                        backgroundColor: backgroundColor(),
                                        color: color(),
                                        cursor: notAllowed ? 'not-allowed' : 'pointer',
                                    }}
                                    onClick={() => goToEntity(index)}>
                                <p>{entity.name}</p>
                            </button>
                        )
                    })
                }
            </div>
            <ScanCard entity={entity} entityIndex={currentEntity} element={entity.elements[currentElement]}
                      elementIndex={currentElement} handleNext={handleNext} handlePrevious={handlePrevious}
                      scanData={scanCardData} setScanData={setScanCardData}/>
        </Page>
    )
}

export default Scan;
