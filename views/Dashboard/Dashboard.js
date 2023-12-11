import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import prcInfoIcon from '../../assets/images/prc-info-icon.svg';
import InfoIcon from '../../assets/images/info-icon.svg';
import fllVwBtn from '../../assets/images/fll-vw-btn.svg';
import dbGrpahImg1 from '../../assets/images/db-grpah-img1.png';
import dbGrpahImg2 from '../../assets/images/db-grpah-img2.png';
import dbGrpahImg3 from '../../assets/images/db-grpah-img3.png';
import dbGrpahImg4 from '../../assets/images/db-grpah-img4.png';



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

	const [modal, setModal] = useState(false);
  	const toggle1 = () => setModal(!modal);
  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="PriceDetailsSec mb-4">
                <div className="row">
                    <div className="col-xl-2 mb-3">
                        <div className="PrcDtlsSec text-center PrcDtlsSec1 mb-4">
                            <p className="tooltip1"> Market Cap Price <button className="btn btn-link p-0 ToolTpWrapper"><img src={prcInfoIcon} 
                                alt="" className="img-fluid ml-1" /> <span className="Custmtooltip">Lorem ipsum dolor sit amet consectetur. Ut amet hac porttitor tortor tempus orci. Sed dolor</span></button>
                            </p>

                            <h4>$209,929,408</h4>
                        </div>

                        <div className="PrcDtlsSec text-center PrcDtlsSec2">
                            <p className="tooltip1"> OSIZ Price <button className="btn btn-link p-0 ToolTpWrapper"><img src={prcInfoIcon}
                                alt="" className="img-fluid ml-1" /> <span className="Custmtooltip">Lorem ipsum dolor sit amet consectetur. Ut amet hac porttitor tortor tempus orci. Sed dolor</span></button>
                            </p>
                            <h4>$209,929,408</h4>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="PrcDtlsSec text-center PrcDtlsSec3">
                            <p className="tooltip1">Circulating Supply / Total <button className="btn btn-link p-0 ToolTpWrapper"><img src={prcInfoIcon}
                                alt="" className="img-fluid ml-1" /> <span className="Custmtooltip">Lorem ipsum dolor sit amet consectetur. Ut amet hac porttitor tortor tempus orci. Sed dolor</span></button>
                            </p>
                            <h4>20,190,997 / 26,937,946</h4>
                        </div>
                    </div>
                    <div className="col-xl-2 mb-3">
                        <div className="PrcDtlsSec text-center PrcDtlsSec4 mb-4">
                            <p className="tooltip1"> Liquid Backing per gOSIZ <button className="btn btn-link p-0 ToolTpWrapper"><img src={prcInfoIcon}
                                alt="" className="img-fluid ml-1" /> <span className="Custmtooltip">Lorem ipsum dolor sit amet consectetur. Ut amet hac porttitor tortor tempus orci. Sed dolor</span></button>
                            </p>
                            <h4>$209,929,408</h4>
                        </div>
                        <div className="PrcDtlsSec text-center PrcDtlsSec5">
                            <p className="tooltip1"> Current Index<button className="btn btn-link p-0 ToolTpWrapper"><img src={prcInfoIcon}
                                alt="" className="img-fluid ml-1" /> <span className="Custmtooltip">Lorem ipsum dolor sit amet consectetur. Ut amet hac porttitor tortor tempus orci. Sed dolor</span></button>
                            </p>
                            <h4>$209,929,408</h4>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="PrcDtlsSec text-center PrcDtlsSec6">
                            <p className="tooltip1">gOSIZ Price<button className="btn btn-link p-0 ToolTpWrapper"><img src={prcInfoIcon}
                                alt="" className="img-fluid ml-1" /> <span className="Custmtooltip">Lorem ipsum dolor sit amet consectetur. Ut amet hac porttitor tortor tempus orci. Sed dolor</span></button></p>
                            <h4>$209,929,408</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GrphBtnSec">
                <div className="BluBg107 OSIZShnsSec mb-3">
                    <div className="OSIZShnsBtnSec">
                        <button className="btn btn-link BwSnBtn">OSIZ</button>
                        <button className="btn btn-link BwSnBtn">SHIMS</button>
                    </div>
                    <div className="OSIZShnsBtnSec">
                        <button className="btn btn-link BwSnBtn">7D</button>
                        <button className="btn btn-link BwSnBtn">30D</button>
                        <button className="btn btn-link BwSnBtn">90D</button>
                        <button className="btn btn-link BwSnBtn">Max</button>
                    </div>
                </div>
                <div className="BluBg107 BwBckngSec mb-4">
                    <div className="BwBckngFlx">
                        <div className="BwBckngHdd">
                            <h6>OSIZ Backing <img src={InfoIcon} alt="" className="img-fluid ml-1" /></h6>
                            <h5>$11.55</h5>
                        </div>
                        <div className="BwFlVwIcn">
                            <button className="btn btn-link FllVwBtn" type="button" data-toggle="modal" data-target="#ChrtFullVw"><img src={fllVwBtn} alt="" className="img-fluid" /> </button>
                        </div>
                    </div>
                    <div className="DbGrpImg1">
                        <img src={dbGrpahImg1} alt="" className="img-fluid d-block mx-auto" />
                    </div>
                </div>
                <div className="BluBg107 BwBckngSec mb-4">
                    <div className="BwBckngFlx">
                        <div className="BwBckngHdd">
                            <h6>Market Value of Treasury Assets<img src={InfoIcon} alt="" className="img-fluid ml-1" /></h6>
                            <h5>$221,121,229</h5>
                        </div>
                        <div className="MrktVlueBtnSec">
                            <button className="btn MrktVlueBtn1">Market Value</button>
                            <button className="btn MrktVlueBtn2">Liquid Backing</button>
                        </div>
                    </div>
                    <div className="DbGrpImg1">
                        <img src={dbGrpahImg2} alt="" className="img-fluid d-block mx-auto" />
                    </div>
                </div>
                <div className="BluBg107 BwBckngSec mb-4">
                    <div className="BwBckngFlx">
                        <div className="BwBckngHdd">
                            <h6>Protocol-Owned Liquidity<img src={InfoIcon} alt="" className="img-fluid ml-1" /></h6>
                            <h5>$61,435,049</h5>
                        </div>
                    </div>
                    <div className="DbGrpImg1">
                        <img src={dbGrpahImg3} alt="" className="img-fluid d-block mx-auto" />
                    </div>
                </div>
                <div className="BluBg107 BwBckngSec mb-4">
                    <div className="BwBckngFlx">
                        <div className="BwBckngHdd">
                            <h6>OSIZ Supply<img src={InfoIcon} alt="" className="img-fluid ml-1" /></h6>
                        </div>
                    </div>
                    <div className="DbGrpImg1">
                        <img src={dbGrpahImg4} alt="" className="img-fluid d-block mx-auto" />
                    </div>
                </div>
                <div className="BluBg107 BwBckngSec mb-4 py-5">
                    <div className="DisClmHdd text-center mb-3">
                        <h4>Disclaimers</h4>
                    </div>
                    <div className="DisClmCnt">
                        <ul>
                            <li>Illiquid assets have been removed from market value and will be re-introduced when they reach their date of maturity</li>
                            <li>Due to technical limitations, the balance and value of native ETH is not included</li>
                            <li>There may be a visible delay when capital is deployed to a new contract or blockchain</li>
                            <li>The timestamp shown in each tooltip represents the time of the most recently-indexed block across all chains</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
		
      </Fragment>
    );
    
}

export default DsbPages;