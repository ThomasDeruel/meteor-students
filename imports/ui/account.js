import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Students from "../api/students";

class Account extends React.Component{

    render(){
        console.log(this.props.student);
        const student = this.props.student['0'];
        console.log(student._id);

        return(
            <div>
                <p>compte numéro:</p>
                <p>{student.firstName}</p>
            </div>
        )
    }
}
export default FormAccount = withTracker(() => {
    const _id = FlowRouter.getParam('_id');
    return {
        student: Students.find(_id).fetch(),
    };
})(Account);