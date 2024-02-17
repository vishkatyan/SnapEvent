import React, { useState } from 'react';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from "react-icons/md";
import "./Value.css";
import data from '../../utils/accordion';


const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/*left side*/}
            <div className="v-left">
                <div className="image-container">
                    <img src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="value image" />
                </div>
            </div>

            {/*Right Side*/}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>We always ready to help by providing the best knowledge for you . 
                    <br />
                    We believe good knowledge provides better career option
                </span>

                    <Accordion
                    className='accordion'
                    allowMultipleExpanded = {false}
                    preExpanded={[0]}>
                        {
                            data.map((item,i)=> {
                                const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem className= {`accordionItem ${className}`} key={i} uuid= {i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            <AccordionItemState>
                                                {({expanded}) => 
                                                expanded 
                                                ? setClassName("expanded") 
                                                : setClassName ("collapsed")}
                                            </AccordionItemState>

                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                         } )}

                    </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value