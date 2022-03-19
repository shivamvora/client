import React, { useState } from 'react';


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
    return (
        <div className="container">
            <form>
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

                <div className="alert alert-success" role="alert">
                    Message has been sent...!
                </div>

                <button type='submit' className='btn btn-outline-primary'>submit</button>
            </form >
        </div >
    )
}

export default Form