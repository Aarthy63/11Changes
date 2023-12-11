import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import logo from '../../assets/images/logo.svg';
import bnrRtImg from '../../assets/images/bnr-rt-img.svg';
import dgtlEcoIcon1 from '../../assets/images/dgtl-eco-icon1.svg';
import dgtlEcoIcon2 from '../../assets/images/dgtl-eco-icon2.svg';
import dgtlEcoIcon3 from '../../assets/images/dgtl-eco-icon3.svg';
import dgtlEcoIcon4 from '../../assets/images/dgtl-eco-icon4.svg';
import dgtlEcoIcon5 from '../../assets/images/dgtl-eco-icon5.svg';
import dgtlEcoArrw from '../../assets/images/dgtl-eco-arrw.gif';
import neoBnkImg from '../../assets/images/neo-bnk-img.png';


const Home = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Fragment>
            <Header />
            <div className="Main-section MnuPaddTop">
                <div className="BnnrSec">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 HalfContain mb-3">
                                <div className="BnnrCnt col-xl-10 pl-xl-0">
                                    <h6>Future of</h6>
                                    <h1>Decentralized Reserve Currency</h1>
                                    <p className="col-lg-9 pl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum.</p>
                                    <div className="BnrBtn mt-md-5">
                                        <button className="btn BtnPrimry Btn120-42" type="button" > <a href="/Register" style={{ color: 'black' }}>Create account</a> </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="BnrRtimgSec">
                                    <img src={bnrRtImg} alt="#" className="img-fluid d-block mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="PrtclStsSec">
                    <div className="container container-1200">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="PrtclHddCnt TxtRotate">
                                    <h4>Protocol Stats</h4>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row ">
                                    <div className="col-lg-4 mb-4">
                                        <div className="PrtclStsBox PrtclStsBox1">
                                            <div className="PrtclCnt">
                                                <h4>99.59%</h4>
                                                <p>Protocol-Owned Liquidity</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="PrtclStsBox PrtclStsBox2">
                                            <div className="PrtclCnt">
                                                <h4>120,000+</h4>
                                                <p>Number of Holders</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="PrtclStsBox PrtclStsBox3">
                                            <div className="PrtclCnt">
                                                <h4>50+</h4>
                                                <p>Unique Tokens in Treasury</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="PrtclStsBox PrtclStsBox4">
                                            <div className="PrtclCnt">
                                                <h4>$421,075,285</h4>
                                                <p>Treasury Balance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DgtlEcnmy">
                    <div className="container container-1200">
                        <div className="DgtlEcnSec">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="PrtclHddCnt text-center">
                                        <h4>A Better Digital Economy</h4>
                                        <p>A decentralized economy needs a decentralized reserve currency - one that isn’t pegged to the fiat system, but rather independently achieves purchasing power, broad acceptance, and high utility.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <div className="DgtlEcoBox">
                                        <div className="DgtlEcoIcn text-right">
                                            <img src={dgtlEcoIcon1} alt="#" className="img-fluid" />
                                        </div>
                                        <div className="DgtlEcoHdd">
                                            <h3>Purchasing</h3>
                                            <h4>Power</h4>
                                        </div>
                                        <div className="DgtlEcoCntSec">
                                            <div className="DgtlEcoCnt">
                                                <p>Strong purchasing power forms the foundation of a successful reserve currency. OSIZ preserves purchasing power with a combination of tokenomics, sound policy decisions, and active treasury management - which
                                                    in turn drives user confidence in SHIMS’s real and persistent value.</p>
                                            </div>
                                        </div>
                                        <div className="DgtlEcoArwBtn">
                                            <a href="#" className=""><img src={dgtlEcoArrw} alt="" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="DgtlEcoBox">
                                        <div className="DgtlEcoIcn text-right">
                                            <img src={dgtlEcoIcon2} alt="#" className="img-fluid" />
                                        </div>
                                        <div className="DgtlEcoHdd">
                                            <h3>Broad</h3>
                                            <h4>Acceptance</h4>
                                        </div>
                                        <div className="DgtlEcoCntSec">
                                            <div className="DgtlEcoCnt">
                                                <p>Strong purchasing power forms the foundation of a successful reserve currency. OSIZ preserves purchasing power with a combination of tokenomics, sound policy decisions, and active treasury </p>
                                            </div>
                                        </div>
                                        <div className="DgtlEcoArwBtn">
                                            <a href="#" className=""><img src={dgtlEcoArrw} alt="" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="DgtlEcoBox">
                                        <div className="DgtlEcoIcn text-right">
                                            <img src={dgtlEcoIcon3} alt="#" className="img-fluid" />
                                        </div>
                                        <div className="DgtlEcoHdd">
                                            <h3>High</h3>
                                            <h4>Utility</h4>
                                        </div>
                                        <div className="DgtlEcoCntSec">
                                            <div className="DgtlEcoCnt">
                                                <p>Strong purchasing power forms the foundation of a successful reserve currency. OSIZ preserves purchasing power.</p>
                                            </div>
                                            <div className="DgtlEcoCnt DgtlEcoCntFlx">
                                                <p>OSIZ Give</p>
                                                <p>OSIZ Give</p>
                                            </div>
                                            <div className="DgtlEcoCnt DgtlEcoCntFlx">
                                                <p>OSIZ Incubator</p>
                                                <p>OSIZ DAO</p>
                                            </div>
                                            <div className="DgtlEcoCnt DgtlEcoCntFlx">
                                                <p>OSIZ Grants</p>
                                                <p>OSIZ News</p>
                                            </div>
                                        </div>
                                        <div className="DgtlEcoArwBtn">
                                            <a href="#" className=""><img src={dgtlEcoArrw} alt="" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="HwprtcptSec">
                            <div className="row">
                                <div className="col-lg-5 mx-auto">
                                    <div className="PrtclHddCnt text-center">
                                        <h4 className="col-lg-9 mx-auto ">How to Participate</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="HwprtcptBox HwprtcptBox1">
                                        <div className="HwprtcptBtch">
                                            <p>948% APY</p>
                                        </div>
                                        <div className="DgtlEcoIcn text-right">
                                            <img src={dgtlEcoIcon5} alt="#" className="img-fluid" />
                                        </div>
                                        <div className="HwprtcptCnt">
                                            <h2>Staking</h2>
                                            <p>Stakers play an important role in the OSIZ ecosystem. Stakers deposit their SHIMS into the protocol, which contributes to SHIMS’s long-term price stability. In exchange, stakers receive additional SHIMS token rewards.</p>
                                            <div className="BnrBtn mt-5">
                                                <button className="btn BtnPrimry Btn120-42 " type="button">Stake</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="HwprtcptBox HwprtcptBox2">
                                        <div className="HwprtcptBtch">
                                            <p>Bonding Discounts</p>
                                        </div>
                                        <div className="DgtlEcoIcn text-right">
                                            <img src={dgtlEcoIcon4} alt="#" className="img-fluid" />
                                        </div>
                                        <div className="HwprtcptCnt">
                                            <h2>Bonding</h2>
                                            <p>Bonding allows you to trade various tokens for SHIMS at a discounted price. In exchange, bond sales provide additional liquidity and reserve assets to the </p>
                                            <div className="BnrBtn mt-5">
                                                <button className="btn BtnPrimry Btn120-42 " type="button">Bond</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NoeBnkSec">
                    <div className="container container-1200">
                        <div className="row">
                            <div className="col-lg-5 mx-auto">
                                <div className="PrtclHddCnt text-center pb-0">
                                    <h4 className="">Neo Banking</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="NeoBnkImgcnt">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="NoeBnkCnt">
                                        <h5 className="col-lg-6 pl-0">Secure and easy to transfer</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna.
                                        </p>
                                        <div className="BnrBtn mt-5">
                                            <button className="btn BtnPrimry Btn120-42 " type="button">Dashboard</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="NoeBnkImg">
                                        <img src={neoBnkImg} alt="#" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="AnyQusSec">
                    <div className="container container-1200">
                        <div className="row">
                            <div className="col-lg-5 mb-3">
                                <div className="PrtclHddCnt pb-0">
                                    <h4 className="">Have Any Question?</h4>
                                </div>
                            </div>
                            <div className="col-lg-2 ml-lg-auto">
                                <div className="BnrBtn mt-lg-5 text-lg-right">
                                    <button className="btn BtnPrimry Btn136-42 VwAllBtn" type="button">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="AnyQusTbbSec">
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
                                        Payments
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        Security
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); }}
                                    >
                                        Fee
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <div className="FaqSec">
                                        <Accordion allowZeroExpanded>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5 ml-lg-auto">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead2">
                                                                    <a className="btn btn-header-link collapsed">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">IS SHIMS Stable  Coin?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                            </div>
                                        </Accordion>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="FaqSec">
                                        <Accordion allowZeroExpanded>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5 ml-lg-auto">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead2">
                                                                    <a className="btn btn-header-link collapsed">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">IS SHIMS Stable  Coin?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                            </div>
                                        </Accordion>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    <div className="FaqSec">
                                        <Accordion allowZeroExpanded>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5 ml-lg-auto">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead2">
                                                                    <a className="btn btn-header-link collapsed">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">IS SHIMS Stable  Coin?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                            </div>
                                        </Accordion>
                                    </div>
                                </TabPane>
                                <TabPane tabId="4">
                                    <div className="FaqSec">
                                        <Accordion allowZeroExpanded>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5 ml-lg-auto">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead2">
                                                                    <a className="btn btn-header-link collapsed">What is OSIZ?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                                <div className="col-lg-5">
                                                    <AccordionItem className="card">
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <div className="card-header" id="faqhead1">
                                                                    <a className="btn btn-header-link">IS SHIMS Stable  Coin?</a>
                                                                </div>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="card-body">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id ut magna. Nulla viverra nulla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh elementum viverra elementum a, id
                                                            </div>
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </div>
                                            </div>
                                        </Accordion>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );

}

export default Home;