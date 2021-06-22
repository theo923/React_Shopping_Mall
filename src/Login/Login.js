import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onUsernameChange = e => {
        this.setState({username: e.target.value})
    }

    onPasswordChange = e => {
        this.setState({password: e.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://enigmatic-mesa-83961.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'Wrong username or password') 
                console.log(data)
            else if(data) {
                this.props.handleSubmit()
                this.props.loadUser(data)
            }
        })
        
    }

    render(){
        const { handleChange } = this.props
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
                            <input name='username' type="text" placeholder="username" className="input input-bordered" onChange={this.onUsernameChange} />
                        </div> 
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label> 
                            <input name='password' type="text" placeholder="password" className="input input-bordered" onChange={this.onPasswordChange} /> 
                            <label className="label">
                            <button name='register' value={true} className="label-text-alt" onClick={handleChange}>new user? click here to register</button>
                            </label>
                        </div> 
                        <div className="form-control mt-6">
                            <input type="button" value="Login" className="btn btn-primary" onClick={this.onSubmitSignIn} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
}

export default Login