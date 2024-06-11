import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddBook = () => {

    const [data,setData] =useState(
        {
        "booktitle":"",
        "category":"",
        "author":"",
        "year":"",
        "publisher":"",
        "price":"",
       
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
        (response) => {
            console.log(response.data)
            if(response.data.status=="success")
                {
                    alert("Successfully Registered")
                }
            else
                {
                    alert("Error")
                    
                }
        } 
    ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }


  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="label form-label">Book Title</label>
                    <input type="text" className="form-control" name='booktitle' value={data.booktitle} onChange={inputHandler} />                      
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Category</label>
                            <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler}>
                                <option className="option">Comedy</option>
                                <option className="option">Horror</option>
                                <option className="option">Mysterious</option>
                                <option className="option">Thriller</option>
                                <option className="option">Science Fiction</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Author Name</label>
                        <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Published Year</label>
                        <input type="date" className="form-control" name='year' value={data.year} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Publisher</label>
                        <input type="text" className="form-control" name='publisher' value={data.publisher} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Price</label>
                        <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary"  onClick={readValue}  >SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook