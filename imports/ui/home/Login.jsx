import React, {Component} from "react";
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Login extends Component{
    state  = {
        firstName: 'admin.firstname',
        lastName: 'admin.lastname',
        github: 'admin.github',
        errorMsg:'', 
    }
    login = (e) =>{
        e.preventDefault();
        this.setState({errorMsg:''}) 
        const {firstName,lastName,github} = this.state;
        Meteor.call('connection',firstName,lastName,github,(error,result)=>{
            if(error){
                this.setState({errorMsg:error.reason})
            }
            if(result){
                FlowRouter.go(result)
            } 
        })
    }
    render(){
        return(
            <div className={"login"}>
                <form>
                    <h1>Login</h1>
                    <input className={'nom'} value={this.state.lastName}onChange={()=>this.setState({lastName: event.target.value})} type={'text'}/>
                    <label>Nom:</label>
                    <input className={'prenom'} value={this.state.firstName}type={'text'} onChange={()=>this.setState({firstName: event.target.value})}/>
                    <label>Prénom:</label>
                    <input className={'lien'} value={this.state.github}type={'text'} onChange={()=>this.setState({github: event.target.value})}/>
                    <label>GitHub:</label>
                    <button className={'btn'}  onClick={this.login}>Submit</button>
                    {this.state.errorMsg !== '' && 
                    <i>{this.state.errorMsg}</i>
                    }
                </form>
            </div>
        )
    }
}


export default FormLogin = withTracker(() => {
    return {
        students: 'lol'
    };
})(Login);