import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Addpost = () => {
    const [input, setInput] = new useState(
        {   
            "userid":sessionStorage.getItem("userid"),
            "post":""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3003/api/post/post", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Posted")
                    setInput(
                        {   
                            "userid":"",
                            "post":""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
        }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ENTER POST</label>
                            <textarea name="post" id="" cols="30" rows="5" className="form-control" value={input.post} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addpost