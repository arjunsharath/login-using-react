import React, { useState } from 'react';


export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, pass);
    };

    return (<>

        <div className='container'>
  
            <form onSubmit={handleSubmit} className='form'>
                <br />
                <input
                    value={name}
                    type='text'
                    placeholder='enter name'
                    id='name'
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <br />
                <input
                    value={email}
                    type='email'
                    placeholder='enter email'
                    id='emailregister'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <br />
                <input
                    value={pass}
                    type='password'
                    placeholder='enter password'
                    id='passwordregister'
                    name='password'
                    onChange={(e) => setPass(e.target.value)}
                />
                <br />
                <button type='submit'>Register</button>
            </form><br></br>
            <label className='labelforbutton'>Already have an account</label>
            <br />
            <br></br>
            <button onClick={() => props.onFormSwitch('Login')}>login here</button>
        </div></>
    );
};
