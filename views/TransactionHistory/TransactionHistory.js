import React, { Fragment, useEffect, useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';
import classnames from 'classnames';

import bondTblIcon1 from '../../assets/images/bond-tbl-icon1.svg';
import bondTblIcon3 from '../../assets/images/bond-tbl-icon3.svg';

import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const TransactionHistory = (props) => {

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight">
                <div className="SwpHdd mb-4">
                    <h4>Transaction History</h4>
                </div>
                <div className="TrnsHisTbbSec">
                    <nav className="TrnsHisTbb">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Stake
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Bond
                                </NavLink>
                            </NavItem>
                        </Nav>
                        {/* <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="TnsStk-tab" data-toggle="tab" href="#TnsStk1" role="tab" aria-controls="TnsStk1" aria-selected="true"></a>
                            <a className="nav-item nav-link" id="TnsStk2-tab" data-toggle="tab" href="#TnsStk2" role="tab" aria-controls="TnsStk2" aria-selected="false"></a>
                        </div> */}
                    </nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="SwMrPgSecFlx">
                                <div className="SwMrCnt ShowFrm">
                                    <p>Showing
                                        <select className="form-control input-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>10 of 200 entries
                                    </p>
                                </div>
                                <div className="ShortBySec d-flex align-items-center flex-wrap">
                                    <div className="form-group row ShortSelct align-items-center">
                                        <label for="input" className="col-auto pr-0 SrtFrmLbl">Sort by</label>
                                        <div className="col-auto">
                                            <select id="input" className="form-control">
                                                <option selected>Date</option>
                                                <option>...</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div className="form-group ml-2 TblSearch">
                                        <label for="inputP" className="sr-only">Search</label>
                                        <input type="search" className="form-control" id="inputP" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                            <div className="CmmnTbl TrnsHstryTbl table-responsive">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">S No</th>
                                            <th scope="col">Date & Time</th>
                                            <th scope="col">Token Amount</th>
                                            <th scope="col">Transaction ID </th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="SwMrPgSecFlx">
                                <div className="SwMrCnt">
                                    <p>Showing 1 to 10 of 200 entries</p>
                                </div>
                                <div className="PgntSec">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.5 1L1.5 6L6.5 11" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5..</a></li>
                                            <li className="page-item"><a className="page-link" href="#">20</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.5 1L6.5 6L1.5 11" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="SwMrPgSecFlx">
                                <div className="SwMrCnt ShowFrm">
                                    <p>Showing
                                        <select className="form-control input-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>10 of 200 entries
                                    </p>
                                </div>
                                <div className="ShortBySec d-flex align-items-center flex-wrap">
                                    <div className="form-group row ShortSelct align-items-center">
                                        <label for="input" className="col-auto pr-0 SrtFrmLbl">Sort by</label>
                                        <div className="col-auto">
                                            <select id="input" className="form-control">
                                                <option selected>Date</option>
                                                <option>...</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div className="form-group ml-2 TblSearch">
                                        <label for="inputP" className="sr-only">Search</label>
                                        <input type="search" className="form-control" id="inputP" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                            <div className="CmmnTbl TrnsHstryTbl table-responsive">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">S No</th>
                                            <th scope="col">Date & Time</th>
                                            <th scope="col">Token Amount</th>
                                            <th scope="col">Transaction ID </th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>05-05-2023 | 08:05:26 PM</td>
                                            <td>012.0089562 OSIZ</td>
                                            <td>0x3s5d4f6s874fgsr835d4f....</td>
                                            <td><span className="TxtComplt">Completed</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="SwMrPgSecFlx">
                                <div className="SwMrCnt">
                                    <p>Showing 1 to 10 of 200 entries</p>
                                </div>
                                <div className="PgntSec">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.5 1L1.5 6L6.5 11" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5..</a></li>
                                            <li className="page-item"><a className="page-link" href="#">20</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.5 1L6.5 6L1.5 11" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>

            </div>
        </div>
		
      </Fragment>
    );
    
}

export default TransactionHistory;