import React from "react";

function App() {
    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header">
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
                    <a className="navbar-brand" href="#">
                        <b className="logo-icon">
                            <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span className="logo-text">
                            <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                            <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                        </span>
                    </a>
                    <ul class="navbar-nav float-right d-block d-md-none">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/users/1.jpg" alt="user" width="30" class="profile-pic rounded-circle" />
                            </a>
                            <div class="dropdown-menu mailbox dropdown-menu-right scale-up border rounded shadow">
                                <ul class="dropdown-user list-style-none">
                                    <li>
                                        <div class="dw-user-box p-3 d-flex">
                                            <div class="u-img">
                                                <img src="../assets/images/users/1.jpg" alt="user" class="rounded" width="80" />
                                            </div>
                                            <div class="u-text ml-2">
                                                <h4 class="mb-0">Steave Jobs</h4>
                                                <p class="text-muted mb-1 font-14">varun@gmail.com</p>
                                                <a href="pages-profile.html" class="btn btn-rounded btn-danger btn-sm text-white d-inline-block">ViewProfile</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" class="dropdown-divider"></li>
                                    <li class="user-list">
                                        <a class="px-3 py-2" href="#"><i class="ti-user"></i> My Profile</a>
                                    </li>
                                    <li role="separator" class="dropdown-divider"></li>
                                    <li class="user-list">
                                        <a class="px-3 py-2" href="#"><i class="ti-settings"></i> Account Setting</a>
                                    </li>
                                    <li role="separator" class="dropdown-divider"></li>
                                    <li class="user-list"><a class="px-3 py-2" href="/login">
                                        <i class="fa fa-power-off"></i> Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {/* <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a> */}
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto float-left">
                        <li className="nav-item"> <a className="nav-link sidebartoggler d-none d-md-block waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu" /></a> </li>
                    </ul>
                    <ul className="navbar-nav float-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/users/1.jpg" alt="user" width={30} className="profile-pic rounded-circle" />
                            </a>
                            <div className="dropdown-menu mailbox dropdown-menu-right scale-up border rounded shadow">
                                <ul className="dropdown-user list-style-none">
                                    <li>
                                        <div className="dw-user-box p-3 d-flex">
                                            <div className="u-img"><img src="../assets/images/users/1.jpg" alt="user" className="rounded" width={80} /></div>
                                            <div className="u-text ml-2">
                                                <h4 className="mb-0">Steave Jobs</h4>
                                                <p className="text-muted mb-1 font-14">varun@gmail.com</p>
                                                <a href="pages-profile.html" className="btn btn-rounded btn-danger btn-sm text-white d-inline-block">ViewProfile</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" className="dropdown-divider" />
                                    <li className="user-list"><a className="px-3 py-2" href="#"><i className="ti-user" /> My Profile</a></li>
                                    <li role="separator" className="dropdown-divider" />
                                    <li className="user-list"><a className="px-3 py-2" href="#"><i className="ti-settings" /> Account Setting</a></li>
                                    <li role="separator" className="dropdown-divider" />
                                    <li className="user-list"><a className="px-3 py-2" href="/login"><i className="fa fa-power-off" /> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default App;