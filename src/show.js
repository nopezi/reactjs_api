import React from 'react';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// class Show extends Component{

const Show = () => {
    return(
        
        <div className="page">
            <section>
                <p>loremlorem</p>
                <div className="container">
                    <div className="row">
                        <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Setting</th>
                            </tr>
                        </thead>
                        {/* { this.state.persons.map(person => 
                            <tr>
                            <td>{person.id}</td>
                            <td>{person.nama}</td>
                            <td>{person.alamat}</td>
                            <td>
                                <a href="" className="btn btn-warning">Edit</a>
                                <a href="" className="btn btn-danger">Delete</a>
                            </td>
                            </tr>
                        )} */}
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}
// }
export default Show;