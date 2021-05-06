import React from "react";
import { Link } from "react-router-dom";

function Forgot() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top pt-3">
                <div className="container">
                    <Link class="navbar-brand" to="/">Gouni</Link>
                </div>
            </nav>
            <div className="form-wrapper d-flex justify-content-center align-items-center" >
                <div className="container-fluid forms-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="card border rounded">
                                <div className="card-header bg-white">
                                    <h2 className="mb-0">Forgot your password?</h2>
                                    <p className="mb-0 text-muted">Please enter the email address associated with your account and We will email you a link to reset your password.</p>
                                </div>
                                <div className="card-body">
                                    <form>
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
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block">
                                            Reset Password
                                        </button>
                                        <div className="text-center my-3">
                                            <Link className="text-primary" to="/login">Back</Link>
                                        </div>
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

export default Forgot;