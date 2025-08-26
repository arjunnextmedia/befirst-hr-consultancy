import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const ServiceFAQ3 = (props) => {
    const [expanded, setExpanded] = useState(false);

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
                                <Typography>
                                    What is the role of a management consultant for businesses in Kerala?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    A management consultant helps organizations improve efficiency, solve operational challenges, and implement strategies for sustainable growth. At Befirst, we focus on Kerala’s unique business environment to deliver practical and impactful solutions.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>
                                    How can startups in Kozhikode, Kochi, and Trivandrum benefit from your services?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We provide end-to-end support for startups, from operational setup to HR planning, ensuring a strong foundation for long-term success.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>
                                    Do you offer consultancy for established companies as well?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes. Our services cater to both emerging startups and well-established organizations looking to improve efficiency, restructure operations, or enhance HR strategy.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>
                                    How do I book a consultation with Befirst HR & Management Consultancy?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can schedule a free consultation through our website or contact us directly via phone or email. We’ll assess your needs and recommend the best approach.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>
                                    Are your consultancy services available online for Kerala clients?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, we offer both in-person and virtual consultancy sessions, making it convenient for clients across Kerala to access our expertise.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceFAQ3;