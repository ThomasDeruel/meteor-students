import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Students from '../../api/students.js';

import './form.css';


class Form extends Component {

    state = {
        firstName:'',
        lastName:'',
        github:''
    }
    ;
    deleteData = (id) => () => Students.remove({_id: id});

    handleFistName = () =>{
        this.setState({firstName:event.target.value})
        console.log(this.state.firstName);
    }
    handlelastName = () =>{
        this.setState({lastName:event.target.value})
        console.log(this.state.lastName);
    }
    handlegithub = () =>{
        this.setState({github:event.target.value});
        console.log(this.state.github);
    }
    submit = (e) =>{
        e.preventDefault();
        const {firstName,lastName,github} = this.state;
        Students.insert({firstName,lastName,github});
    };

    render() {
        return (
            <div>
                <form>
                    <h1>Inscription</h1>
                    <input className={'nom'} onChange={this.handleFistName} type={'text'}/>
                    <label>Nom:</label>
                    <input className={'prenom'} type={'text'} onChange={this.handlelastName} />
                    <label>Prénom:</label>
                    <input className={'lien'} type={'text'} onChange={this.handlegithub} />
                    <label>GitHub:</label>
                    <button className={'btn'} type={'submit'} onClick={this.submit}>Submit</button>
                </form>
                <div>
                    <h1>Liste des élèves inscrit</h1>
                    {
                        this.props.students.map((item,index)=>{
                        return(
                            <ul key={index}>
                            <li>{item.firstName}</li>
                            <li>{item.lastName}</li>
                            <li>{item.github}</li>
                            <button onClick={this.deleteData(item._id)}>supprimer</button>
                            </ul>
                        )


                    })
                    }

                </div>
            </div>
        )
    }


}

export default FormContainer = withTracker(() => {
    return {
        students: Students.find().fetch(),
    };
})(Form);