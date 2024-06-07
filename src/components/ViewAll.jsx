import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Publish Year</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>2014</td>
      <td>450</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>2015</td>
      <td>450</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Kora</td>
      <td>Thornton</td>
      <td>2014</td>
      <td>450</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>2014</td>
      <td>450</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Mica</td>
      <td>Thornton</td>
      <td>2014</td>
      <td>450</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>2014</td>
      <td>450</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll