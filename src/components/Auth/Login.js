import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top pt-3">
                <div className="container">
                    <Link class="navbar-brand" to="/">Gouni</Link>
                    <div class="ml-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <p className="mb-0 font-weight-bold pt-1">Don’t have an account? <Link className="text-primary" to="/register">Register</Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="form-wrapper d-flex justify-content-center align-items-center" >
                <div className="container-fluid forms-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="card border rounded">
                                <div className="card-header bg-white">
                                    <h2 className="mb-0">Sign in to Gouni</h2>
                                    <p className="mb-0 text-muted">Enter your details below.</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="username"
                                                name="username"
                                                id="username"
                                                placeholder="Username"
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
                                        <div className="d-flex align-items-center form-group">
                                            <Link className="nav-link-style font-size-sm text-primary" to="/reset-password">Forgot password?</Link>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block">
                                            Login
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

export default Login;