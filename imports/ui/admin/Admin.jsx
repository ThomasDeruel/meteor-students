import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {withTracker} from 'meteor/react-meteor-data';
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
        Students.insert({firstName, lastName, github});
    };
    getAccount = (_id) => () => FlowRouter.go(`/account/${_id}`);

    render() {
        return (
            <div className="content">
                <div className="form_new_student">
                    <form>
                        <h1>Ajouter un nouvel élève</h1>
                        <input className={'nom'} onChange={this.handleFistName} type={'text'} placeholder="Prénom" />
                        {/*<label>Nom:</label>*/}
                        <input className={'prenom'} type={'text'} onChange={this.handlelastName} placeholder="Prénom" />
                        {/*<label>Prénom:</label>*/}
                        <input className={'lien'} type={'text'} onChange={this.handlegithub} placeholder="Prénom" />
                        {/*<label>Lien GitHub:</label>*/}
                        <button className={'btn'} type={'submit'} onClick={this.submit}>Submit</button>
                    </form>

                    <div className="form_list">
                        <h1>Liste des élèves inscrit</h1>
                        {
                            this.props.students.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{item.firstName}</li>
                                        <li>{item.lastName}</li>
                                        <li>{item.github}</li>
                                        <button onClick={this.deleteData(item._id)}>supprimer</button>
                                        <button onClick={this.getAccount(item._id)}>Modifier</button>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }


}

export default FormContainer = withTracker(() => {
    return {
        students: Students.find().fetch(),
    };
})(Admin);