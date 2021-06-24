import * as React from 'react'

interface IState {
    username: string;
    password: string;
}

interface IProps {
    handleChange: any;
    handleSubmit: any;
}

class Register extends React.Component <IProps, IState>  {
    constructor(props: IProps){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    private onUsernameChange = (e: React.SyntheticEvent<HTMLInputElement>) : void => {
        this.setState({username: e.currentTarget.value})
    }

    private onPasswordChange = (e: React.SyntheticEvent<HTMLInputElement>) : void => {
        this.setState({password: e.currentTarget.value})
    }

    private async readRegisterApi<T>() : Promise<T> {
        const response = await fetch('https://enigmatic-mesa-83961.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        });
        const data = response.json();
        return data
    }

    private onSubmitRegister = () : void => {
        this.readRegisterApi()
        .then(data => {
            const e = {currentTarget: {name: 'register', value: ''}}
            this.props.handleChange(e)
        })

    }

    render() : JSX.Element {
        return(
            <div className="hero min-h-screen bg-base-200 text-white">
                <div className="flex-col justify-center hero-content">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">
                            Welcome to Shopping Site
                            </h1> 
                        <p className="mb-5">
                                Please enter the following information
                            </p>
                    </div> 
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <div className="card-body">
                        <div className="form-control">
                            <label htmlFor='username' className="label">
                            <span className="label-text">Username</span>
                            </label> 
                            <input name='username' type="text" placeholder="username" className="input input-bordered" onChange={this.onUsernameChange} />
                        </div> 
                        <div className="form-control">
                            <label htmlFor='password' className="label">
                            <span className="label-text">Password</span>
                            </label> 
                            <input name='password' type="text" placeholder="password" className="input input-bordered" onChange={this.onPasswordChange} /> 
                            <label className="label">
                            <button name='register' value='' className="label-text-alt" onClick={this.props.handleChange}>I have account. click to take me back</button>
                            </label>
                        </div> 
                        <div className="form-control mt-6">
                            <input type="button" value="Register" className="btn btn-secondary" onClick={this.onSubmitRegister} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Register