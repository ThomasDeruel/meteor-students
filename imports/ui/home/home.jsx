import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {withTracker} from 'meteor/react-meteor-data';
import Students from '../../api/students.js';

import '../../style/global';
//import Admin from '../admin/Admin.jsx';


class Home extends Component {

    state = {
        firstName: '',
        lastName: '',
        github: '',
        error:0,
    }
    ;
    deleteData = (id) => () => Students.remove({_id: id});

    handleFistName = () => {
        this.setState({firstName: event.target.value})
        console.log(this.state.firstName);
    }
    handlelastName = () => {
        this.setState({lastName: event.target.value})
        console.log(this.state.lastName);
    }
    handlegithub = () => {
        this.setState({github: event.target.value});
        console.log(this.state.github);
    }
    submit = (e) => {
        e.preventDefault();
        const {firstName, lastName, github} = this.state;
        Meteor.call('addStudent', firstName, lastName, github ,(error)=>{
            if(error){
                this.setState({error:1})
            }
        })
    };
    getAccount = (_id) => () => FlowRouter.go(`/account/${_id}`);

    render() {
        return (
            <div className={'connexion_content'} >
                <div className={'inscription form_registration'}>
                    <form>
                        <h1>Inscription</h1>
                        <input className={'nom'} onChange={this.handleFistName} type={'text'} placeholder={'Nom'} />
                        {/*<label>Nom:</label>*/}
                        <input className={'prenom'} type={'text'} onChange={this.handlelastName} placeholder={'Prénom'} />
                        {/*<label>Prénom:</label>*/}
                        <input className={'lien'} type={'text'} onChange={this.handlegithub} placeholder={'Lien GitHub'} />
                        {/*<label>GitHub:</label>*/}
                        <button className={'btn'} type={'submit'} onClick={this.submit}>Submit</button>
                    </form>
                </div>
                <div className='horizontal_bar'></div>
                <div className={'login form_login'}>
                    <form>
                        <h1>Login</h1>
                        <input className={'nom'} onChange={this.handleFistName} type={'text'} placeholder={'Nom'}/>
                        {/*<label>Nom:</label>*/}
                        <input className={'prenom'} type={'text'} onChange={this.handlelastName} placeholder={'Prénom'}/>
                        {/*<label>Prénom:</label>
                        <input className={'lien'} type={'text'} onChange={this.handlegithub}/>*/}
                        {/*<label>GitHub:</label>*/}
                        <button className={'btn'} type={'submit'} onClick={this.submit }>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormContainer = withTracker(() => {
    return {
        students: Students.find().fetch(),
    };
})(Home);