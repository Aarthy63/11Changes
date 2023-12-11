import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import swpIcon3 from '../../assets/images/swp-icon3.svg';
import swpIcon1 from '../../assets/images/swp-icon1.svg';

import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const DsbPages = (props) => {

  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight">
                <div className="SwpHdd mb-4">
                    <h4>Bond</h4>
                </div>
                <div className="row">
                    <div className="col-xl-6 mx-auto">
                        <div className="BluBg0b0 SwpFrMainSec StkFrmMain">
                            <div className="StkSecHddFlx mb-4 pb-1">
                                <div className="StkDtlsSec">
                                    <ul className="StkDtlsLnk">
                                        <li><a href="stake1.html">Stake</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="SwpFrmSec">
                                <div className="PaySec">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="SwpFrm">
                                                <div className="form-group">

                                                    <input type="text" className="form-control pl-0" id="value" placeholder="0.1245 OSIZ" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 pt-sm-4">
                                            <div className="CoinSlctSec text-right">
                                                <div className="CoinSlct mb-3">
                                                    <h4><img src={swpIcon3} alt="" className="img-fluid mr-1" /> OSIZ</h4>
                                                </div>
                                                <div className="CoinSlctCnt">
                                                    <p>Balance : <span>20.0124 OSIZ</span>
                                                        <a href="#">Max</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CntrSwpBtnSec">
                                    <button className="btn btn-link SwpBtn" type="button"><img src={swpIcon1} alt="" className="img-fluid" /></button>
                                </div>
                                <div className="PaySec">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="SwpFrm">
                                                <div className="form-group">
                                                    <input type="text" className="form-control pl-0" id="value" placeholder="0.1245 gSHIMS" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 pt-sm-4">
                                            <div className="CoinSlctSec text-right">
                                                <div className="CoinSlctCnt">
                                                    <p>Balance : <span>20.0124 gSHIMS</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="SwpMainBtn my-4">
                                <button className="btn BtnPrimry Btn160-42 w-100">Stake</button>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>Total Balance OSIZ</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>0.5897 OSIZ</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>Total staked Balance</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>20.5897 OSIZ</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>gOSIZ</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>45.012415 gOSIZ</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>APY%</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>0.0000 OSIZ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		
      </Fragment>
    );
    
}

export default DsbPages;