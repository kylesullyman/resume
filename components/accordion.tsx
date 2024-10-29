import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import styles from '../styles/component_styles/accordion.module.css'

export default function AccordionDepthPanel({ title, body }) {
    return (
        <div className={styles.accordionWrapper}>
            <AccordionGroup className={styles.accordionGroup}>
                <Accordion defaultExpanded>
                    <AccordionSummary className={styles.accordionSummary}>
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