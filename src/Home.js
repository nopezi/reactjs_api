import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

class Home extends Component{
    state = {
        persons: []
      }
    
    componentDidMount() {
    axios.get(`http://localhost:1000/profil`)
        .then(res => {
        const persons = res.data;
        this.setState({ persons });
        })
    }
    
    render(){
        return(
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
                    { this.state.persons.map(person => 
                        <tr>
                        <td>{person.id}</td>
                        <td>{person.nama}</td>
                        <td>{person.alamat}</td>
                        <td>
                            <button className="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                        </tr>
                    )}
                    </table>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Tambah data</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                    <div className="form-group form-inline">
                                        <label className="col-md-3">Nama</label>
                                        <input type="text" className="form-control col-md-7"/>
                                    </div>
                                        <div className="form-group form-inline">
                                            <label className="col-md-3">Alamat</label>
                                            <textarea className="form-control col-md-7" id="alamat" rows="3"></textarea>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Simpan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;