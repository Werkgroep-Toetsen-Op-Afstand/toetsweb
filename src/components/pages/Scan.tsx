import ScanCard from '../layout/ScanCard';
import {useState} from 'react';
import {useTitle} from "../../utils/hooks/TitleHook";

const Scan = () => {

    const [currentEntity, setCurrentEntity] = useState(0);
    const [currentElement, setCurrentElement] = useState(0);

    useTitle('Toetsweb - Scan');

    const handleNext = () => {
        if(currentElement === 2) {
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
        <div className='scan'>
            <h1 className='scan__title'>Scan</h1>
            <ScanCard entity={currentEntity} element={currentElement} handleNext={handleNext} handlePrevious={handlePrevious} />
        </div>
    )
}

export default Scan;
