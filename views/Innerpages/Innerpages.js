import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';
import Dashboard from '../Dashboard/Dashboard';
import Swap from '../Swap/Swap';
import Stake from '../Stake/Stake';
import StakeOne from '../StakeOne/StakeOne';
import Unstake from '../Unstake/Unstake';
import Bond from '../Bond/Bond';
import BondOne from '../BondOne/BondOne';
import BondTwo from '../BondTwo/BondTwo';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Support from '../Support/Support';
import PlanList from '../PlanList/PlanList';
import BuyPlan from '../BuyPlan/BuyPlan';

import sdemnuIcon1 from '../../assets/images/sde-mnu-icon1.svg';
import sdemnuIcon2 from '../../assets/images/sde-mnu-icon2.svg';
import sdemnuIcon3 from '../../assets/images/sde-mnu-icon3.svg';
import sdemnuIcon4 from '../../assets/images/sde-mnu-icon4.svg';
import sdemnuIcon5 from '../../assets/images/sde-mnu-icon5.svg';
import sdemnuIcon6 from '../../assets/images/sde-mnu-icon6.svg';
import sdemnuIcon7 from '../../assets/images/sde-mnu-icon7.svg';
import dbMnuSclIcon1 from '../../assets/images/db-mnu-scl-icon1.svg';
import dbMnuSclIcon2 from '../../assets/images/db-mnu-scl-icon2.svg';
import dbMnuSclIcon3 from '../../assets/images/db-mnu-scl-icon3.svg';
import dbMnuSclIcon4 from '../../assets/images/db-mnu-scl-icon4.svg';
import logoInr from '../../assets/images/logo.png';

import metamask from '../../assets/images/MetaMask.svg';
import mdlCloseIcon from '../../assets/images/mdl-close-icon.svg';

import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const DsbPages = (props) => {

    const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
   const [modal, setModal] = useState(false);    
      const toggle = () => setModal(!modal);
  
    return (
      <Fragment>
        <div className={isActive ? null : "side-Open"}>
            <header class="Hddrg InrHddr FxdHeader">
                <div class="FxedTop">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid px-0">
                            <div class="LogoTitlSec">
                                <div class="logo_header align-items-center InrLogoSec">
                                    <a class="navbar-brand" href="index.html">
                                        <img src={logoInr} class="img-fluid" />
                                    </a>
                                    <div class="SidRitMnu" onClick={ToggleClass}>
                                        <svg id="hamburger" onclick="this.classList.toggle('active')" viewBox="0 0 100 100">
                                            <rect class="hamburger-line hamburger-line-1" x="20" y="50" rX="1" width="60" height="2" />
                                            <rect class="hamburger-line  hamburger-line-2" x="20" y="50" rX="1" width="60" height="2" />
                                            <rect class="hamburger-line  hamburger-line-3" x="20" y="50" rX="1" width="60" height="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="HdrTitlSec ml-4">
                                    <div class="HdrTitlCnt">
                                        <h4>Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="DskTpViewCnt">
                                <ul class="d-flex align-items-center">
                                    <li>
                                        <a href="#" class="btn BtnPrimry mr-3 Btn160-42"  onClick={toggle}>Connect Wallet</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="DbMain">
                <div className="container-fluid px-0">
                    <div className="row mx-0">
                        <div className="col DbSdCol">
                            <div className="DbSdMnu dbScrl">
                                <div className="DbSdMnuTop">
                                    <div className="MblViewCnt">
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <a href="#" className="btn BtnPrimry mr-3 Btn160-42" onClick={toggle}>Connect Wallet</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dbSbMenu">
                                        <ul>
                                            <li className="active">
                                                <Link to="/dashboard">
                                                    <span className="sbMIc">
                                                        <img src={sdemnuIcon1} alt="" className="mr-2" />
                                                    </span>
                                                    <span className="sbMTx">Dashboard</span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/swap">
                                                    <span className="sbMIc">
                                                        <img src={sdemnuIcon2} alt="" className="mr-2" />
                                                    </span>
                                                    <span className="sbMTx">Swap</span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/stake">
                                                    <span className="sbMIc">
                                                        <img src={sdemnuIcon3} alt="" className="mr-2" />
                                                    </span>
                                                    <span className="sbMTx">Stake</span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/bond">
                                                    <span className="sbMIc">
                                                        <img src={sdemnuIcon4} alt="" className="mr-2" />
                                                    </span>
                                                    <span className="sbMTx">Bond</span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <a href="governance.html">
                                                    <span className="sbMIc">
                                                        <img src={sdemnuIcon5} alt="" className="mr-2" />
                                                    </span>
                                                    <span className="sbMTx">Governance</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <Link to="/transactionhistory">
                                                    <span className="sbMIc">
                                                        <img src={sdemnuIcon6} alt="" className="mr-2" />
                                                    </span>
                                                    <span className="sbMTx">Transaction History</span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/support">
                                                    <span className="sbMIc">
                                                        <img src={sdemnuIcon7} alt="" className="mr-2" />
                                                    </span>
                                                    <span className="sbMTx">Support</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="DbFtrMenu">
                                    <div className="SclIcnSec text-center">
                                        <div className="SclIcnHdd mb-3">
                                            <h4>Follow US</h4>
                                        </div>
                                        <div className="SocialIcon mb-4"> 
                                            <ul>
                                                <li>
                                                    <a href="#"><img src={dbMnuSclIcon1} className="img-fluid" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><img src={dbMnuSclIcon2} className="img-fluid" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><img src={dbMnuSclIcon3} className="img-fluid" /></a>
                                                </li>
                                                <li>
                                                    <a href="#"><img src={dbMnuSclIcon4} className="img-fluid" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="DbCpyRyt">
                                            <p>© 2023 OSIZ - All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col DbMainCnt">
                            <Routes>
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/swap' element={<Swap />} />
                                <Route path='/stake' element={<Stake />} />
                                <Route path='/stakeone' element={<StakeOne />} />
                                <Route path='/unstake' element={<Unstake />} />
                                <Route path='/bond' element={<Bond />} />
                                <Route path='/bondone' element={<BondOne />} />
                                <Route path='/bondtwo' element={<BondTwo />} />
                                <Route path='/transactionhistory' element={<TransactionHistory />} />
                                <Route path='/support' element={<Support />} />
                                 <Route path='/plan-list' element={<PlanList />} />
                                 <Route path='/buy-plan' element={<BuyPlan />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal isOpen={modal} toggle={toggle} modalClassName="fade CmmnMdl ClaimMdl" className="modal-dialog-centered">
            <div className="BluBg107 ClaimMdlSec mb-4">
                <div className="BwCloseIcn">
                    <button className="btn btn-link close" type="button" onClick={toggle}><img src={mdlCloseIcon} alt="" className="img-fluid" /> </button>
                </div>
                <div className="ClmRwrdHdd mb-4 text-center">
                    <h5>Connect Wallet</h5>
                </div>
                <div className="StkBlnDtlsFlx d-block">
                    <div className="StkBlnDtls1">
                        <img src={metamask} className="img-fluid d-block mx-auto"/>
                        <p className="text-center" style={{marginTop:'-25px'}}>Metamask</p>
                    </div>                    
                </div>                
            </div>
        </Modal>  
      </Fragment>
    );
    
}

export default DsbPages;