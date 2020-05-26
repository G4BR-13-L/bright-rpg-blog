import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
        email:'',
        password:'',
        personagem:'',
        classe:'',
        subclasse:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container-1">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="personagem">Personagem</label>
                        <input type="text" id="personagem" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="class">Classe</label>
                        <input type="text" id="class" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="subclass">Subclasse</label>
                        <input type="text" id="subclass" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn bright-btn  z-depth-0">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
