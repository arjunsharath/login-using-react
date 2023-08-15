import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState(''); 
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(email); 
    };

    return (
        <>
        <div className='container'>
            <form onSubmit={handleSubmit} className='form'>
              
                <input
                    value={email}
                    type='email'
                    placeholder='enter email'
                    id='emaillogin'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br></br>
            
                <input
                    value={pass}
                    type='password'
                    placeholder='enter password'
                    id='passwordlogin'
                    name='password'
                    onChange={(e) => setPass(e.target.value)} 
                /><br></br>
            <br></br>
                <button type='submit'>LOG IN</button>
            </form><br></br>
            <br></br>
            <label className='labelforbutton'>Don't have an account</label>
           <br></br>
           <br></br>
            <button onClick={() => props.onFormSwitch('Register')}>register here</button>
            </div>
        </>
    );
};
