import { useState } from "react"
import '../css/Login.scss'

function Login () {

    const [formData, setFormData] =  useState({
        name:"",
        email:"",
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
        <div className="login">
            <form onSubmit={submit}>
            <h4>Log In</h4>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} id="name" onChange={change}/>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} id="email" onChange={change} />
            </div>
            <button type="submit">Log In</button>
        </form>
        </div>
    )
}

export default Login



