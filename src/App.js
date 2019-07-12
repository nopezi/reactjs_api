import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.min.css'; // optional
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';

class App extends React.Component {
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

  render() {
    return (
      <div className="App container">
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
                <td><button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Edit</button></td>
                </tr>
              )}
            </table>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;