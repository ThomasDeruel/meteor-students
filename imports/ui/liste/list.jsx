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
            <div className='list_content'>
                <div className='form_list' >
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
                                        </tr>
                                )
                            })
                        }
                    </table>
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