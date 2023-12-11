import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import swpIcon1 from '../../assets/images/swp-icon1.svg';
import swpIcon2 from '../../assets/images/swp-icon2.svg';



import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const DsbPages = (props) => {

	const [isActive, setActive] = useState("false");
  	const ToggleClass = () => {
		setActive(!isActive); 
	};

	const [isOpen, setIsOpen] = useState(false);
  	const toggleNav = () => setIsOpen(!isOpen);

	// const [modal, setModal] = useState(false);
  	// const toggle1 = () => setModal(!modal);
  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight">
                <div className="SwpHdd mb-4">
                    <h4>Swap</h4>
                </div>
                <div className="row">
                    <div className="col-xl-7 mx-auto">
                        <div className="BluBg0b0 SwpFrMainSec ">
                            <div className="SwpFrmSec">
                                <div className="PaySec">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="SwpFrm">
                                                <div className="form-group">
                                                    <label for="value" className="FrmLbl">You Pay</label>
                                                    <input type="text" className="form-control pl-0" id="value" placeholder="0.1245 USDT" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 pt-sm-4">
                                            <div className="CoinSlctSec text-right">
                                                <div className="CoinSlct mb-3">
                                                    <h4><img src={swpIcon2} alt="" className="img-fluid mr-1" /> USDT</h4>
                                                </div>
                                                <div className="CoinSlctCnt">
                                                    <p>Balance : <span>20.0124 USDT</span></p>
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
                                                    <label for="value" className="FrmLbl">You Receive</label>
                                                    <input type="text" className="form-control pl-0" id="value" placeholder="0.1245 OSIZ" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 pt-sm-4 d-none">
                                            <div className="CoinSlctSec text-right">
                                                <div className="CoinSlct mb-3">
                                                    <h4><img src={swpIcon2} alt="" className="img-fluid mr-1" /> USDT</h4>
                                                </div>
                                                <div className="CoinSlctCnt">
                                                    <p>Balance : <span>20.0124 USDT</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="SwpMainBtn mt-4">
                                <button className="btn BtnPrimry Btn160-42 w-100">Swap</button>
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