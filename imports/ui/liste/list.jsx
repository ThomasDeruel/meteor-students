import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {withTracker} from 'meteor/react-meteor-data';
import Students from '../../api/students.js';

import '../../style/global';
//import '../../style/list';


class List extends Component {

    deleteData = (id) => () => Students.remove({_id: id});

    getAccount = (_id) => () => FlowRouter.go(`/account/${_id}`);

    render() {
        return (
            <div className={"list_content"}>
                <div className={"form_list"} >
                    <h1>Liste des élèves inscrit</h1>
                    {
                        this.props.students.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li>{item.firstName}</li>
                                    <li>{item.lastName}</li>
                                    <li>{item.github}</li>
                                    <button className={"btn"} onClick={this.deleteData(item._id)}>supprimer</button>
                                    <button className={"btn"} onClick={this.getAccount(item._id)}>Modifier</button>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FormContainer = withTracker(() => {
    return {
        students: Students.find().fetch(),
    };
})(List);