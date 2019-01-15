import React from 'react';

class Account extends React.Component{
    render(){
        return(
            <div>
                compte numéro:{this.props.params._id}
            </div>
        )
    }
}

export default Account;