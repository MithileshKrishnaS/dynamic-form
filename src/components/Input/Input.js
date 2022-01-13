import React from 'react'
import InputComponent from '../InputComponent/InputComponent';

var inputList = [
    {
        type : "text",
        label : "Enter your username",
        placeholder : "your Username",
        datatestid : 'username'
    },
    {
        type : "email",
        label : "Enter your email",
        placeholder : "Your Email",
        datatestid : 'email',
    },
    {
        type : "password",
        label : "Enter your password",
        placeholder : "your Password",
        datatestid : 'password'
    },
]

const Input = () => {
    return (
        <div className="maincomp">
            {inputList.map((input,index)=>(
            <InputComponent  key={index} data={input.type} place={input.placeholder}></InputComponent>
           ))}
        </div>
    )
}

export default Input
