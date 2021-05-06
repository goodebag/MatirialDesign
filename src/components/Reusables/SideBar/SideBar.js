import React from "react";
import { Link } from "react-router-dom";

function App() {
    return (
        <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <div className="user-profile position-relative" style={{ background: 'url(../assets/images/background/user-info.jpg) no-repeat' }}>
                    <div className="profile-img">
                        <img src="../assets/images/users/1.jpg" alt="user" className="w-100 rounded-circle" />
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-gauge" />
                                <span className="hide-menu">Dashboard </span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-clipboard-text" />
                                <span className="hide-menu">Admit Student</span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust" />
                                        <span className="hide-menu">Admit Undergraduate Student</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index2.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust" />
                                        <span className="hide-menu">Admit Jupeb Student</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index3.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust" />
                                        <span className="hide-menu">Admit PostGraduate Student</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                            <i className="mdi mdi-clipboard-text" />
                            <span className="hide-menu">Exam Clearance</span></a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item"><a href="layout-inner-fixed-left-sidebar.html" className="sidebar-link">
                                    <i className="mdi mdi-format-align-left" />
                                    <span className="hide-menu">Create Setting</span></a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="layout-inner-fixed-right-sidebar.html" className="sidebar-link">
                                        <i className="mdi mdi-format-align-right" />
                                        <span className="hide-menu">Get Setting</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-clipboard-text" />
                                <span className="hide-menu">Reports</span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust" />
                                        <span className="hide-menu">Admission Report</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index2.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust" />
                                        <span className="hide-menu">Referal Report</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="index3.html" className="sidebar-link">
                                        <i className="mdi mdi-adjust" />
                                        <span className="hide-menu">All Student Report</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="sidebar-footer">
                <Link to className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings" /></Link>
                <Link to className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail" /></Link>
                <Link to="/login" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power" /></Link>
            </div>
        </aside >
    );
}

export default App;