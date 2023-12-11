import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import stkUnstkImg1 from '../../assets/images/stk-unstk-img1.svg';
import mdlCloseIcon from '../../assets/images/mdl-close-icon.svg';



import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const StakeOne = (props) => {

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);    
      const toggle = () => setModal(!modal);

  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight">
                <div className="SwpHdd mb-4">
                    <h4>Stake</h4>
                </div>
                <div className="row ">
                    <div className="col-xl-4 col-lg-6 mb-4">
                        <div className="StkUnStkBox">
                            <div className="StkUnStkHddSec text-center mb-4">
                                <div className="StkUnStkHddImg mb-3">
                                    <img src={stkUnstkImg1} alt="" className="img-fluid" />
                                </div>
                                <div className="StkUnStkHdd">
                                    <h4>20.578941 <span className="ml-2">OSIZ</span></h4>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>SHIMS Balance</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>40.00154</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>APY</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>4.74%</p>
                                </div>
                            </div>
                            <div className="StkClmBtnSec text-center mt-4">
                                <button className="btn StkClmBtn" type="button" onClick={toggle}>Claim Reward</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-4">
                        <div className="StkUnStkBox">
                            <div className="StkUnStkHddSec text-center mb-4">
                                <div className="StkUnStkHddImg mb-3">
                                    <img src={stkUnstkImg1} alt="" className="img-fluid" />
                                </div>
                                <div className="StkUnStkHdd">
                                    <h4>20.578941 <span className="ml-2">OSIZ</span></h4>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>SHIMS Balance</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>40.00154</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>APY</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>4.74%</p>
                                </div>
                            </div>
                            <div className="StkClmBtnSec text-center mt-4">
                                <button className="btn StkClmBtn" onClick={toggle}>Claim Reward</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-4">
                        <div className="StkUnStkBox">
                            <div className="StkUnStkHddSec text-center mb-4">
                                <div className="StkUnStkHddImg mb-3">
                                    <img src={stkUnstkImg1} alt="" className="img-fluid" />
                                </div>
                                <div className="StkUnStkHdd">
                                    <h4>20.578941 <span className="ml-2">OSIZ</span></h4>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>SHIMS Balance</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>40.00154</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>APY</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>4.74%</p>
                                </div>
                            </div>
                            <div className="StkClmBtnSec text-center mt-4">
                                <button className="btn StkClmBtn" onClick={toggle}>Claim Reward</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-4">
                        <div className="StkUnStkBox">
                            <div className="StkUnStkHddSec text-center mb-4">
                                <div className="StkUnStkHddImg mb-3">
                                    <img src={stkUnstkImg1} alt="" className="img-fluid" />
                                </div>
                                <div className="StkUnStkHdd">
                                    <h4>20.578941 <span className="ml-2">OSIZ</span></h4>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>SHIMS Balance</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>40.00154</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>APY</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>4.74%</p>
                                </div>
                            </div>
                            <div className="StkClmBtnSec text-center mt-4">
                                <button className="btn StkClmBtn" onClick={toggle}>Claim Reward</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-4">
                        <div className="StkUnStkBox">
                            <div className="StkUnStkHddSec text-center mb-4">
                                <div className="StkUnStkHddImg mb-3">
                                    <img src={stkUnstkImg1} alt="" className="img-fluid" />
                                </div>
                                <div className="StkUnStkHdd">
                                    <h4>20.578941 <span className="ml-2">OSIZ</span></h4>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>SHIMS Balance</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>40.00154</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>APY</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>4.74%</p>
                                </div>
                            </div>
                            <div className="StkClmBtnSec text-center mt-4">
                                <button className="btn StkClmBtn" onClick={toggle}>Claim Reward</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-4">
                        <div className="StkUnStkBox">
                            <div className="StkUnStkHddSec text-center mb-4">
                                <div className="StkUnStkHddImg mb-3">
                                    <img src={stkUnstkImg1} alt="" className="img-fluid" />
                                </div>
                                <div className="StkUnStkHdd">
                                    <h4>20.578941 <span className="ml-2">OSIZ</span></h4>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>SHIMS Balance</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>40.00154</p>
                                </div>
                            </div>
                            <div className="StkBlnDtlsFlx">
                                <div className="StkBlnDtls1">
                                    <p>APY</p>
                                </div>
                                <div className="StkBlnDtls2 text-right">
                                    <p>4.74%</p>
                                </div>
                            </div>
                            <div className="StkClmBtnSec text-center mt-4">
                                <button className="btn StkClmBtn" onClick={toggle}>Claim Reward</button>
                            </div>
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
                <div className="ClmRwrdHdd mb-5 text-center">
                    <h5>Claim Your Rewards</h5>
                </div>
                <div className="StkBlnDtlsFlx ">
                    <div className="StkBlnDtls1">
                        <p>Total Staked</p>
                    </div>
                    <div className="StkBlnDtls2 text-right ClaimMdlBlnc">
                        <p>31,127,106 <span>OSIZ</span></p>
                    </div>
                </div>
                <div className="StkBlnDtlsFlx">
                    <div className="StkBlnDtls1">
                        <p>Rewards</p>
                    </div>
                    <div className="StkBlnDtls2 text-right ClaimMdlBlnc">
                        <p>500 <span>SHIMS</span></p>
                    </div>
                </div>
                <div className="StkClmBtnSec text-center mt-4">
                    <button className="btn StkClmBtn" type="button">Claim Reward</button>
                </div>
            </div>
        </Modal>
		
      </Fragment>
    );
    
}

export default StakeOne;