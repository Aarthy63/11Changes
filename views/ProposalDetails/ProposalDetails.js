import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import Header from "../../components/GovHeader/GovHeader";

import backArrw from '../../assets/images/back-arrw.svg';
import swpIcon3 from '../../assets/images/swp-icon3.svg';
import prpslDrpIcon2 from '../../assets/images/prpsl-drp-icon2.svg';
import prpslDrpIcon1 from '../../assets/images/prpsl-drp-icon1.svg';
import dwnldIcon from '../../assets/images/dwnld-icon.svg';
import prpsTblPrflIcon1 from '../../assets/images/prps-tbl-prfl-icon1.png';
import prpsTblPrflIcon2 from '../../assets/images/prps-tbl-prfl-icon2.png';
import prpsTblPrflIcon3 from '../../assets/images/prps-tbl-prfl-icon3.png';
import prpsTblPrflIcon4 from '../../assets/images/prps-tbl-prfl-icon4.png';
import prpsTblPrflIcon5 from '../../assets/images/prps-tbl-prfl-icon5.png';
import prpsTblPrflIcon6 from '../../assets/images/prps-tbl-prfl-icon6.png';
import prpsTblPrflIcon7 from '../../assets/images/prps-tbl-prfl-icon7.png';
import prslLogoIcon from '../../assets/images/prsl-logo-icon.svg';
import extLinkIcon from '../../assets/images/ext-link-icon.svg';

import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const DsbPages = (props) => {

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
    };
    return (
      <Fragment>
        <Header />
        <div className="Main-section ">
            <div className="container container-1200">
                <div className="GvrnceMain">
                    <div className="PrpsalMain ">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="BluBg107 mb-4 ProposalCntMain">
                                    <div className="BckHdd mb-4">
                                        <a href=""><img src={backArrw} alt="" className="img-fluid mr-1" /> Back</a>
                                    </div>
                                    <div className="PropsHdd mb-4">
                                        <h4>TAP-24 - Liquidity Incentives for Arbitrum</h4>
                                    </div>
                                    <div className="PropsHddSec mb-4 pb-2">
                                        <div className="PropsStatus">
                                            <div className="ClBtn mr-2">
                                                <button className="btn ClosBtn" type="button">Closed</button>
                                            </div>
                                            <div className="PstusDtls">
                                                <a href="" className="mr-2"><img src={swpIcon3} alt="" className="img-fluid mr-2" />OSIZ DAO</a>by
                                                <a href="" className="CorHovr CoreDtls ml-2">abipup.eth<span className="CoreBtn btn ml-2">Core</span></a>
                                            </div>
                                        </div>
                                        <div className="ShreSec">
                                            <div className="PrpsCusDrpDwn">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="btn btn-link">
                                                        <img src={prpslDrpIcon2} className="img-fluid mr-2" />Share
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag="a">Twiter</DropdownItem>
                                                        <DropdownItem tag="a">copylink</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                {/* <div className="dropdown">
                                                    <button className="btn btn-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <img src={prpslDrpIcon2} className="img-fluid mr-2" />Share
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Twiter</a>
                                                        <a className="dropdown-item" href="#">copylink</a>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="PrpsCusDrpDwn">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="btn btn-link">
                                                        <img src={prpslDrpIcon1} />
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem tag="a">Duplicate</DropdownItem>
                                                        <DropdownItem tag="a">Report</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                {/* <div className="dropdown">
                                                    <button className="btn btn-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src={prpslDrpIcon1} />
                                                </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Duplicate</a>
                                                        <a className="dropdown-item" href="#">Report</a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={isActive ? "PropsCntSwmr" : "PropsCntSwmr expand"}>
                                        <div className="PropsCntMain">
                                            <div className="PropsCnt mb-4">
                                                <h4>Summary</h4>
                                                <p>To support the cross-chain growth of OHM liquidity and, by extension, new use cases, establish an ongoing incentives budget that can be used to experiment with incentivizing liquidity on the various DEXes and
                                                    staking layers on Arbitrum. This budget will be capped at $50k/week.</p>
                                            </div>
                                            <div className="PropsCnt mb-4">
                                                <h4>Background</h4>
                                                <p>TAP-15 permitted OSIZ DAO to explore the use of Hidden Hand incentives as a means to boost voting power to its LP Gauges. TAP-23 formalized this approach, increased the allocated budget, and extended these incentives
                                                    to multiple Aura and Balancer markets.</p>
                                                <p>The results so far have been favorable, and OSIZ has seen several million in TVL added across its incentivized pools. On average, Treasury has seen around a 5-15% return, with margin largely being impacted by
                                                    the decrease in BAL and AURA prices. Even still, incentives have proven an effective means to accumulate liquidity in a cost effective way.</p>
                                            </div>
                                            <div className="PropsCnt mb-4">
                                                <h4>Motivation</h4>
                                                <p>On Mainnet, the liquidity incentives are both good to attract liquidity as well as to increase the protocol’s voting power (by accruing more strategic assets). On Arbitrum, the considerations are slightly different.</p>
                                                <p>Perhaps most importantly, Arbitrum POL is not as deep as mainnet since the protocol needs very deep liquidity on Mainnet in order to run RBS, whereas on Arbitrum this is not a direct concern. The protocol will
                                                    not be able to offer the same level of deep liquidity on all chains without reducing POL on mainnet. A way around this is for the protocol to offer a guaranteed base layer of liquidity through POL and extend
                                                    that with third party liquidity, which is created either through incentives, voting power, or more novel solutions like the recently launched BLV.</p>
                                                <p>It’s important to note that as more OHM finds its way to Arbitrum and as the number of integrations and use cases expand, there will be a need for more liquidity to, for example, support effective liquidations
                                                    in lending markets.</p>
                                            </div>
                                            <div className="PropsCnt mb-4">
                                                <h4>Proposal</h4>
                                                <p>As such, the Treasury Team requests community approval to create a budget specifically to experiment with liquidity incentives on Arbitrum and to support the creation of more third party OHM liquidity. This
                                                    budget will be capped at $50k/week. Initially, it is likely that only a fraction of the budget will be tapped.</p>
                                                <p>Considering the number and variety of DEXes and staking layers on Arbitrum this TAP is not limited to selected venues, but instead offers the flexibility to experiment with various platforms in order to find
                                                    the most optimal solution to create third party OHM liquidity.</p>
                                                <p>The list of potential assets used to incentivize will include:</p>
                                                <ul className="PropslOrdLst">
                                                    <li>OHM</li>
                                                    <li>USDC</li>
                                                    <li>DAI</li>
                                                    <li>FRAX</li>
                                                    <li>ARB (Preferred)</li>
                                                </ul>
                                                <p>OHM utilized will either come from OHM already owned by the Treasury or minted specifically for this purpose.</p>
                                            </div>
                                        </div>
                                        <div className="SwmrBtnSec">
                                            <button className="btn StkClmBtn" onClick={ToggleClass}><span className="moreTxt">Show More</span><span className="lessTxt">Show Less</span></button>
                                        </div>
                                    </div>
                                    <div className="PrpsDiscs">
                                        <div className="PrpsDiscsHdd">
                                            <h4>Discussion</h4>
                                        </div>
                                        <div className="PrpsDiscsMain BluBg0b0 ">
                                            <div className="PrpsDisImg mr-3">
                                                <img src={swpIcon3} alt="" className="img-fluid" />
                                            </div>
                                            <div className="PrpsDisCnt">
                                                <h4>TAP-24 - Liquidity Incentives for Arbitrum - OlympusDAOForum</h4>
                                                <p>The Olympus DAO Forum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="BondDtlsTbl PrpslTbl table-responsive w-100 mb-0">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Votes<span className="VoteCount ml-2">05</span></th>
                                                    <th scope="col"></th>
                                                    <th scope="col" className="text-right"><img src={dwnldIcon} alt="" /></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img src={prpsTblPrflIcon1} className="img-fluid mr-2" />scovell.eth</td>
                                                    <td>Approve TAP-24</td>
                                                    <td className="text-right">3.1K OHM</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={prpsTblPrflIcon2} className="img-fluid mr-2" />scovell.eth</td>
                                                    <td>Approve TAP-24</td>
                                                    <td className="text-right">3.1K OHM</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={prpsTblPrflIcon3} className="img-fluid mr-2" />scovell.eth</td>
                                                    <td>Approve TAP-24</td>
                                                    <td className="text-right">3.1K OHM</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={prpsTblPrflIcon4} className="img-fluid mr-2" />scovell.eth</td>
                                                    <td>Approve TAP-24</td>
                                                    <td className="text-right">3.1K OHM</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={prpsTblPrflIcon5} className="img-fluid mr-2" />scovell.eth</td>
                                                    <td>Approve TAP-24</td>
                                                    <td className="text-right">3.1K OHM</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={prpsTblPrflIcon6} className="img-fluid mr-2" />scovell.eth</td>
                                                    <td>Approve TAP-24</td>
                                                    <td className="text-right">3.1K OHM</td>
                                                </tr>
                                                <tr>
                                                    <td><img src={prpsTblPrflIcon7} className="img-fluid mr-2" />scovell.eth</td>
                                                    <td>Approve TAP-24</td>
                                                    <td className="text-right">3.1K OHM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="SwMoreBtn text-center">
                                        <a href="#">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="BluBg107 mb-4">
                                    <div className="InfrSec">
                                        <div className="InfrSechdd BrdBtmm mb-4">
                                            <h4>Information</h4>
                                        </div>
                                        <div className="InfrSecFlx">
                                            <h4>Strategie(s)</h4>
                                            <h4>
                                                <a href="#"><img src={prslLogoIcon} alt="" className="img-fluid" /></a>
                                                <a href="#"><img src={prslLogoIcon} alt="" className="img-fluid" /></a>
                                                <a href="#"><img src={prslLogoIcon} alt="" className="img-fluid" /></a>
                                                <a href="#"><img src={prslLogoIcon} alt="" className="img-fluid" /></a>
                                                <a href="#"><img src={prslLogoIcon} alt="" className="img-fluid" /></a>
                                            </h4>
                                        </div>
                                        <div className="InfrSecFlx">
                                            <h4>IPFS</h4>
                                            <h4><span>#bafkrei<a href=""><img src={extLinkIcon} className="img-fluid ml-1" /></a></span></h4>
                                        </div>
                                        <div className="InfrSecFlx">
                                            <h4>Voting system</h4>
                                            <h4><span>Single choice voting</span></h4>
                                        </div>
                                        <div className="InfrSecFlx">
                                            <h4>Start date</h4>
                                            <h4><span>May 19, 2023, 10:09 AM</span></h4>
                                        </div>
                                        <div className="InfrSecFlx">
                                            <h4>End date</h4>
                                            <h4><span>May 23, 2023, 3:25 AM</span></h4>
                                        </div>
                                        <div className="InfrSecFlx">
                                            <h4>Snapshot</h4>
                                            <h4><span>17,294,621<a href=""><img src={extLinkIcon} className="img-fluid ml-1" /></a></span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="BluBg107 mb-4">
                                    <div className="InfrSec">
                                        <div className="InfrSechdd BrdBtmm mb-4">
                                            <h4>Results</h4>
                                        </div>
                                        <div className="ResltPrgCnt">
                                            <h4>Approve TAP-24</h4>
                                            <h4>11K OHM <span>100%</span></h4>
                                        </div>
                                        <div className="CustmPrgrss mb-4">
                                            <div>
                                                <progress id="Prgrs1" className="progress" max="100" value="90"></progress>
                                                <progress id="Prgrs2" className="progress" max="100" value="70"></progress>
                                                <progress id="Prgrs3" className="progress" max="100" value="60"></progress>
                                            </div>
                                        </div>
                                        <div className="ResltPrgCnt pt-3">
                                            <h4>Reject TAP-24</h4>
                                            <h4>0.1K OHM <span>0%</span></h4>
                                        </div>
                                        <div className="CustmPrgrss mb-4">
                                            <div>
                                                <progress id="Prgrs1" className="progress" max="100" value="0"></progress>
                                                <progress id="Prgrs2" className="progress" max="100" value="0"></progress>
                                                <progress id="Prgrs3" className="progress" max="100" value="0"></progress>
                                            </div>
                                        </div>
                                    </div>
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