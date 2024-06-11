import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
  const [data,changeData] =useState([])
        const fetchData=()=>{
            axios.get("http://localhost:8081/view").then((response)=>{
                changeData(response.data)
            }
        ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                                    <thead>
                                        <tr>
                                       
                                        <th scope="col">BOOK TITLE</th>
                                        <th scope="col">CATEGORY</th>
                                        <th scope="col">AUTHOR</th>
                                        <th scope="col">PUBLISH YEAR</th>
                                        <th scope="col">PUBLISHER</th>
                                        <th scope="col">PRICE</th>
                                        
                                        </tr>
                                        </thead>
                                        <tbody>
                            {
                                data.map(
                                    
                                    (value, index) => { return   <tr>
                                                
                                                <td>{value.booktitle}</td>
                                                <td>{value.category}</td>
                                                <td>{value.author}</td>
                                                <td>{value.year}</td>
                                                <td>{value.publisher}</td>
                                                <td>{value.price}</td>
                                                
                                            </tr>
                                            
                                    }
                                )
                            }
                            </tbody>
                          </table>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll