import React from 'react'

export const Login = ({handleChange, handleSubmit}) => {
    return(
        <div className="hero min-h-screen bg-base-200 text-white">
            <div className="flex-col justify-center hero-content">
                <div className="text-center">
                    <h1 className="mb-5 text-5xl font-bold">
                        Welcome to Shopping Site
                        </h1> 
                    <p className="mb-5">
                            Please login first
                        </p>
                </div> 
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Username</span>
                        </label> 
                        <input name='username' type="text" placeholder="username" className="input input-bordered" onChange={handleChange} />
                    </div> 
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label> 
                        <input name='password' type="text" placeholder="password" className="input input-bordered" onChange={handleChange} /> 
                        <label className="label">
                        <button className="label-text-alt">Forgot password?</button>
                        </label>
                    </div> 
                    <div className="form-control mt-6">
                        <input type="button" value="Login" className="btn btn-primary" onClick={handleSubmit} />
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}