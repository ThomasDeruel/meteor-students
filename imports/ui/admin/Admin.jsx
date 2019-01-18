import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Students from '../../api/students.js';

import '../../style/global';


class Admin extends Component {

    state = {
        firstName: '',
        lastName: '',
        github: ''
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
        Meteor.call('addStudent', firstName, lastName, github)
    };
    getAccount = (_id) => () => FlowRouter.go(`/account/${_id}`);

    render() {
        return (
            <div className='list_content'>
                <div className='form_registration'>
                    <form>
                        <h1 className='h1_spe'>Ajouter un nouvel élève</h1>
                        <input className={'nom'} onChange={this.handleFistName} type={'text'} placeholder="Prénom" />
                        {/*<label>Nom:</label>*/}
                        <input className={'prenom'} type={'text'} onChange={this.handlelastName} placeholder="Prénom" />
                        {/*<label>Prénom:</label>*/}
                        <input className={'lien'} type={'text'} onChange={this.handlegithub} placeholder="Prénom" />
                        {/*<label>Lien GitHub:</label>*/}
                        <button className={'btn_spe'} type={'submit'} onClick={this.submit}>Submit</button>
                    </form>
                    <hr></hr>
                    <div className='form_list'>
                        <h1>Liste des élèves inscrit</h1>
                        <table className='table'>
                            <tr className='bold'>
                                <td>Nom</td>
                                <td>Prénom</td>
                                <td>Lien GitHub</td>
                            </tr>
                            {
                                this.props.students.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.github}</td>
                                            <td><button className={"btn"} onClick={this.deleteData(item._id)}>supprimer</button></td>
                                            <td><button className={"btn"} onClick={this.getAccount(item._id)}>Modifier</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormContainer;