import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {

    const [field, setField] = useState( {
        name: '',
        lastname: '',
        email: '',
        message: '',
        sent: false
    } )

    let name, value;
    const handleInputs = ( e ) => {
        name = e.target.name;
        value = e.target.value;
        setField( { ...field, [name]: value } )
    }

    if ( field.name !== '', field.lastname !== '', field.email !== '', field.message !== '' ) {
        console.log( 'what is filed now', field );
    }

    const formSubmit = ( e ) => {
        e.preventDefault();
        let data = {
            name: field.name,
            email: field.email,
            message: field.message,
            lastname: field.lastname,
        }
        axios.post( '/api/form', data )
            .then( res => {
                console.log( `res is following ${res}` );
                setField( { sent: true } )
            }, resetForm() ).catch( () => {
                console.log( `message not sent` );
            } )
    }

    const resetForm = () => {
        setField( {
            name: '',
            lastname: '',
            email: '',
            message: ''
        } )
        setTimeout( () => {
            setField( {
                sent: false
            } )
        }, 3000 );
    }

    return (
        <div className="container">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' className="form-control name" placeholder="your name..." onChange={handleInputs} value={field.name} />
                </div>

                <div className="form-group">
                    <label htmlFor='lastname'>Last Name</label>
                    <input type="text" name='lastname' className="form-control lastname" placeholder="your Last name..." onChange={handleInputs} value={field.lastname} />
                </div>

                <div className="form-group">
                    <label htmlFor='email'>email</label>
                    <input type="email" name='email' className="form-control email" placeholder="your email..." onChange={handleInputs} value={field.email} />
                </div>


                <div className="form-group">
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' className="form-control message" placeholder="your message..." onChange={handleInputs} value={field.message} />
                </div>

                {field.sent === true ?
                    <div className="alert alert-success" role="alert">
                        Message has been sent...!
                    </div>
                    : ''}

                <button type='submit' className='btn btn-outline-primary'>submit</button>
            </form >
        </div >
    )
}

export default Form