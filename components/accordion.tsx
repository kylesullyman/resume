import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import styles from '../styles/component_styles/accordion.module.css'

export default function AccordionDepthPanel({title, body}) {
    const [expanded, setExpanded] = React.useState<boolean>(false);

    return (
        <div className={styles.accordionWrapper}>
            <AccordionGroup className={styles.accordionGroup}>
                <Accordion expanded={expanded}>
                    <AccordionSummary
                        className={styles.accordionSummary}
                        onClick={() => setExpanded(!expanded)}
                    >
                        <div className={styles.accordionSummaryButton}>{title}</div>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetailsContent}>
                        {body}
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </div>
    );
}