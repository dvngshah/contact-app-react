import React from 'react';

class AddContact extends React.Component{

    render() {

        return(

            <div className='ui main'>

                <h2>Add Contact</h2>

                <form className='ui form'>
                    <div className='field'>

                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name'/>

                        <label>Number</label>
                        <input type='text' name='name' placeholder='Number'/>

                        <button className='ui button blue'>Add</button>
                    </div>
                </form>
            </div>


        );
    }

}

export default AddContact;
