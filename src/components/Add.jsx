import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
    const [input, setInput] = new useState(
        {

            "name": "",
            "age": "",
            "mobile": "",
            "address": "",
            "pin": "",
            "email": "",
            "password": ""

        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3003/api/blog/signup",input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully registered")
                    setInput(
                        {
                            "name": "",
                            "age": "",
                            "mobile": "",
                            "address": "",
                            "pin": "",
                            "email": "",
                            "password": ""
                        }
                    )
                }else{
                    alert("Something went wrong")
                }
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">AGE</label>
                                <input type="text" className="form-control"name="age" value={input.age} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">MOBILE</label>
                                <input type="text" className="form-control"name="mobile" value={input.mobile} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ADDRESS</label>
                                <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PIN</label>
                                <input type="text" className="form-control" name="pin" value={input.pin} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EMAIL</label>
                                <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValues}>REGISTER</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <a href='/'>Back to login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add