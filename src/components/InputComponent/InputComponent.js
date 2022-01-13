import React, { useState } from 'react'

const InputComponent = (props) => {
    const [event, setEvent] = useState({
        name:'',
        email:'',
        password:'',
        result:'',
        color:''
    });
    var pass='';
    function handleChange()
    {
        if(props.data==='text')
        {
            setEvent({name:document.getElementById('text').value,color:"black"});  
            console.log(event.name)   
        }
        
        if(props.data==='email')
        {
            setEvent({email:document.getElementById('email').value,color:"black"}); 
        }

        if(props.data==='password')
        {
            var passed=[0,0,0];
            pass=document.getElementById('password').value;
            setEvent({password:document.getElementById('password').value,color:"red",result:"password is weak"});
            if(pass.length>=0)
            {
                var check=0;
                for (var i = 0; i < pass.length; i++)
                {
                    if (pass[i] >= "A" && pass[i] <= "Z")
                    {
                        passed[0]=1;
                       
                    }
                    if(pass[i]>=0 && pass[i]<=9)
                    {
                        passed[1]=1;
                    }
                    if(pass[i]=="@"||pass[i]=="^"||pass[i]=="(")
                    {
                        console.log("sss")
                        passed[2]=1;
                    }
                }
                check=passed[0]+passed[1]+passed[2];
                if(check===1)
                {
                    setEvent({result:"password is good",color:"orange"});
                }
                if(check===2)
                {
                    setEvent({result:"password is strong",color:"lightgreen"});
                }
                if(check===3)
                {
                    setEvent({result:"password is very strong",color:"green"});
                }
            }
            else
            {
                setEvent({password:document.getElementById('password').value,color:"black"});
            }
           
        }
        
    }

    function handleClick()
    {
        if(event.name===''&& props.data=='text' )
        {
            setEvent({result:"enter valid name",color:"red"});  
             
        }
        if(event.email==='' && props.data=='email')
        {
            setEvent({result:"enter valid email",color:"red"});
        }
        if(event.email==='' && props.data=='password')
        {
            setEvent({result:"enter valid password",color:"red"});
        }
    }

    return (
        <div>
             <input type={props.data} placeholder={props.place} onChange={handleChange} onClick={handleClick} id={props.data}
             style={{borderColor: event.color}}></input><br></br> 
             <span style={{color:event.color}}>{event.result}</span><br></br>  
        </div>
    )
}

export default InputComponent
