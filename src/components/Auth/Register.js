import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top pt-3">
                <div className="container">
                    <Link class="navbar-brand" to="/">Gouni</Link>
                    <div class="ml-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <p className="mb-0 font-weight-bold pt-1">Already have an account? <Link className="text-primary" to="/login">Login</Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="form-wrapper d-flex justify-content-center align-items-center" >
                <div className="container-fluid forms-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="card border rounded mb-0">
                                <div className="card-header bg-white">
                                    <h2 className="mb-0">Register in to Gouni</h2>
                                    <p className="mb-0 text-muted">Enter your details below.</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col pr-1">
                                                <div className="form-group">
                                                    <input
                                                        type="firstname"
                                                        name="firstname"
                                                        id="firstname"
                                                        placeholder="Firstname"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col pl-1">
                                                <div className="form-group">
                                                    <input
                                                        type="lastname"
                                                        name="lastname"
                                                        id="lastname"
                                                        placeholder="Lastname"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="phone"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone number"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email address"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block mt-4">
                                            Register
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;