import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaCaretRight } from "react-icons/fa6";

export default function Accordions() {
    return (
        <div className='w-[100%] mt-[40px] md:w-[84%] lg:w-[62%] xl:w-[52%]'>
            <Accordion sx={{ marginTop: '20px' }}>
                <AccordionSummary
                    expandIcon={<FaCaretRight />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{
                        textAlign: 'start',color:'#626364', fontSize: '19px', fontWeight: '400', lineHeight: '1.3', letterSpacing: '0.05em', '@media screen and (max-width: 1440px)': {
                            letterSpacing: '0.02em'
                        },
                    }}>1. Fusce eu lorem et dui #09C maximus varius?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'start', color: '#626364', lineHeight: '1.8' }}>
                        #666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                marginTop: '40px', '@media screen and (max-width: 768px)': {
                    marginTop: '38px',
                },
                '@media screen and (max-width: 1440px)': {
                    marginTop: '37px',
                },
            }}>
                <AccordionSummary
                    expandIcon={<FaCaretRight />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{
                        textAlign: 'start', fontSize: '19px',color:'#626364', fontWeight: '400', lineHeight: '1.3', letterSpacing: '0.05em', '@media screen and (max-width: 1440px)': {
                            letterSpacing: '0.02em'
                        },
                    }}>2. Vestibulum #999 ante ipsum primis in faucibus orci?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'start', color: '#626364', lineHeight: '1.8' }}>
                        Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                marginTop: '40px', '@media screen and (max-width: 768px)': {
                    marginTop: '38px',
                },
                '@media screen and (max-width: 1440px)': {
                    marginTop: '37px',
                },
            }}>
                <AccordionSummary
                    expandIcon={<FaCaretRight />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{
                        textAlign: 'start', fontSize: '19px',color:'#626364', fontWeight: '400', lineHeight: '1.3', letterSpacing: '0.05em', '@media screen and (max-width: 1440px)': {
                            letterSpacing: '0.02em'
                        },
                    }}>3. Can I redistribute this template as a ZIP file?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'start', color: '#626364', lineHeight: '1.8' }}>
                        Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <span className='mx-[3px] text-[#0000ee] underline'>contact TemplateMo</span> for additional permissions about our templates. Thank you.  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                marginTop: '40px', '@media screen and (max-width: 768px)': {
                    marginTop: '38px',
                },
            }}>
                <AccordionSummary
                    expandIcon={<FaCaretRight />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography sx={{
                        textAlign: 'start', fontSize: '19px',color:'#626364', fontWeight: '400', lineHeight: '1.3', letterSpacing: '0.05em', '@media screen and (max-width: 1440px)': {
                            letterSpacing: '0.02em'
                        },
                    }}>4. Ut ac erat sit amet neque efficitur faucibus et in lectus?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'start', color: '#626364', lineHeight: '1.8' }}>
                        Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim. </Typography>
                </AccordionDetails>
            </Accordion>
            <p className='h-[20px] xl:h-[14px]'></p>
        </div>
    );
}