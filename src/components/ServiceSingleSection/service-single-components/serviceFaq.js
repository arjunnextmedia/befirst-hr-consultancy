import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="wpo-benefits-section">
            <h2>FAQs</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>Why should my Kerala-based business invest in HR consultancy?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    HR consultancy ensures your business has structured policies, legal compliance, and effective talent management systems – essential for growth, productivity, and avoiding costly legal issues.                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>Do you offer HR consultancy for startups in Kerala?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes! We specialize in creating scalable HR frameworks for startups, ensuring they are ready for rapid growth while maintaining compliance and efficiency.                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography> How long does it take to set up a complete HR system?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Depending on your organization’s size, it can take 2–6 weeks to design, implement, and train your team on the new HR system.                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Can you help with performance appraisal systems?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely. We create customized job descriptions, KPIs, and appraisal systems to measure and improve employee performance.                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Do you provide ongoing HR support after setup?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, we offer both one-time setup services and ongoing HR management support packages to ensure your systems evolve with your business.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ;