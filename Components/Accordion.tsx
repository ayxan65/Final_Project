// components/Accordion.js
import { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordion}>
            <div className={styles.accordionHeader} onClick={toggleAccordion}>
                1 USD - 1.700 AZN <span className={styles.accordionIcon}>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className={styles.accordionContent}>
                    <select>
                        <option value="1">1 USD - 1.700 AZN</option>
                        <option value="2">1 EUR - 2.000 AZN</option>
                        <option value="3">1 GBP - 2.300 AZN</option>
                    </select>
                </div>
            )}
        </div>
    );
};

export default Accordion;
