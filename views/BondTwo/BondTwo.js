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
import bondTblIcon3 from '../../assets/images/bond-tbl-icon3.svg';

import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const DsbPages = (props) => {

  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight pb-3 mb-4">
                <div className="BondHddFlx mb-3">
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
                <div className="BondDtlsTbl table-responsive w-100 mb-0">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Token</th>
                                <th scope="col">Payout Assets</th>
                                <th scope="col">Price</th>
                                <th scope="col">Discount (%)</th>
                                <th scope="col">Max Payout</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                            <tr>
                                <td><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>01.047896012 <span className="Txtff9">USDT</span></td>
                                <td>01.047896012 <span className="Txtff9">SHIMS</span></td>
                                <td><button className="btn DisCntBtn">4.74%</button></td>
                                <td>01.047896012 USDT<br /><span className="Txtff9">01.047896012 SHIMS</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="BluBg107 SwapMainSec pb-3 pt-4">
                <div className="SwpHdd mb-4">
                    <h4>Bond History</h4>
                </div>
                <div className="CmmnTbl TrnsHstryTbl table-responsive">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">S No</th>
                                <th scope="col">Date & Time</th>
                                <th scope="col">Token</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Transaction ID </th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>05-05-2023 | 08:05:26 PM</td>
                                <td className="JoinTkn"><span><img src={bondTblIcon1} alt="" className="img-fluid" /></span><span className="TknLft"><img src={bondTblIcon3} alt="" className="img-fluid" /></span></td>
                                <td>012.0089562</td>
                                <td>0x3s5d4f6s874fgsr835d4f....</td>
                                <td><span className="TxtComplt">Completed</span></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
		
      </Fragment>
    );
    
}

export default DsbPages;