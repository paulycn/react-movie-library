import { useState } from "react"
import '../css/Register.scss'

function Register () {

    const [formData, setFormData] =  useState({
        name:"",
        email:"",
        age:"",
        message:""
    })

    const change = (e) => {
        const {name, value} = e.target 
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return(
        <div className="register">
             <form onSubmit={submit}>
            <h4>Register</h4>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} id="name" onChange={change}/>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} id="email" onChange={change} />
            </div>
            <div>
            <label htmlFor="age">Age  </label>
            <input type="number" name="age" value={formData.age} id="age" onChange={change}/>
            </div>
            <label htmlFor="message">Tell us your favourite movie from Christopher Nolan </label>
            <textarea name="message" cols="20" rows="10" id="message" value={formData.message} onChange={change}></textarea>
            <button type="submit">Send</button>
            <button type="submit">Log In</button>
        </form>
        </div>
       
    )

}

export default Register