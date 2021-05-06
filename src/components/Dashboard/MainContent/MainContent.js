import React from "react";

function App() {
    return (
        <div className="page-wrapper">
            <div className="row page-titles">
                <div className="col-md-5 col-12 align-self-center">
                    <h3 className="text-themecolor mb-0">Dashboard</h3>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap">
                                            <div>
                                                <h3 className="card-title">Sales Overview</h3>
                                                <h6 className="card-subtitle">Ample Admin Vs Pixel Admin</h6>
                                            </div>
                                            <div className="ml-auto">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item px-2">
                                                        <h6 className="text-success"><i className="fa fa-circle font-10 mr-2 " />Ample</h6>
                                                    </li>
                                                    <li className="list-inline-item px-2">
                                                        <h6 className="text-info"><i className="fa fa-circle font-10 mr-2" />Pixel</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="amp-pxl" style={{ height: '360px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Our Visitors </h3>
                                <h6 className="card-subtitle">Different Devices Used to Visit</h6>
                                <div id="visitor" style={{ height: '290px', width: '100%' }} />
                            </div>
                            <div className="card-body text-center border-top">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item px-2">
                                        <h6 className="text-info"><i className="fa fa-circle font-10 mr-2 " />Mobile</h6>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <h6 className=" text-primary"><i className="fa fa-circle font-10 mr-2" />Desktop</h6>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <h6 className=" text-success"><i className="fa fa-circle font-10 mr-2" />Tablet</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <small>© 2021 Gouni Report.</small>
            </footer>
        </div>
    );
}

export default App;