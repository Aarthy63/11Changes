import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import bondTblIcon1 from '../../assets/images/bond-tbl-icon1.svg';
import bondTblIcon2 from '../../assets/images/bond-tbl-icon2.svg';

import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const DsbPages = (props) => {

  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight">
                <div className="BondHddFlx">
                    <div className="SwpHdd mb-4">
                        <h4>Bond</h4>
                    </div>
                    <div className="BondBlnFlx">
                        <div className="BndDtlsSec text-right BluBg0b0 mb-3 MnWd255 mr-3">
                            <p className=""> OSIZ Price </p>
                            <h4>10.12487 USDT</h4>
                        </div>
                        <div className="BndDtlsSec text-right BluBg0b0 mb-3 MnWd255">
                            <p className="">Treasury Balance</p>
                            <h4>120.2415896 SHIMS</h4>
                        </div>
                    </div>
                </div>
                <div className="BondDtlsTbl table-responsive w-100">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Token</th>
                                <th scope="col">Payout Assets</th>
                                <th scope="col">Price</th>
                                <th scope="col">Discount (%)</th>
                                <th scope="col">Max Payout</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span></td>
                                <td><span><img src={bondTblIcon2} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                                <td><button className="btn StkClmBtn" type="button">Bond for SHIMS</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="ImprtCnt text-center">
                    <p><span>Important:</span> Inverse bonds allow you to bond your OSIZ for treasury assets. Vesting time is 0 and payouts are instant</p>
                </div>
            </div>
        </div>
		
      </Fragment>
    );
    
}

export default DsbPages;