import React, { Fragment, useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

 
 const Faq = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      <Fragment>
        <Header />
        <div className="Main-section cmsSec faqSec">
            <div className="container container-1200">
                <div className="cmsBanner d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="text-center">How Can We Help?</h3>
                        <p className="text-center">Frequently Asked Questions</p>
                    </div>
                    <div className="searchCnt">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>
                <div className="faqCnt">
                    <div className="row">
                        <div className="col-lg-3">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        General
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        What is Voting?
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        Payments
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); }}
                                    >
                                        Security
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="col-lg-9">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Accordion allowMultipleExpanded={false}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Accordion allowMultipleExpanded={false}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Accordion allowMultipleExpanded={false}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </TabPane>
                                <TabPane tabId="4">
                                    <Accordion allowMultipleExpanded={false}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How to stake with OSIZ Token?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur. Eget purus metus congue ipsum. Lacus turpis feugiat nunc sit etiam. Sodales eu nec non cras eros velit tempus lectus. Eget ut duis nunc velit velit 
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<Footer />
      </Fragment>
    );
    
}

export default Faq;