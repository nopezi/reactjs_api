import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

class Input extends Component{
    state = {
        nama: '',
        alamat: '',
    }

    handleChangeNama = event => {
        this.setState({ nama : event.target.value });
    }

    handleChangeAlamat = event => {
        this.setState({ alamat : event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            nama: this.state.nama
        };
        const alamat = {
            alamat: this.state.alamat
        };

        axios.post(`http://localhost:1000/profil`, { user,alamat })
            .then(res => {
                console.log(res);
                console.log(res.data);
      })
    }

    render(){
        return(
            <div className="App">
                <br></br>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group form-inline">
                            <label className="col-md-3">nama</label>
                            <input type="text" className="form-control" name="nama" onChange={this.handleChangeNama} />
                        </div>
                        <div className="form-group form-inline">
                            <label className="col-md-3">Alamat</label>
                            <textarea type="text" className="form-control col-md-6" name="alamat" onChange={this.handleChangeAlamat} />
                        </div>
                        
                        <button className="btn btn-info" type="submit">Simpan</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Input;