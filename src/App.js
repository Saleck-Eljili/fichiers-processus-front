import axios from "axios";
import {useState} from "react";
import './App.css';

function App() {
    const [cont, setCont] = useState([]);
    const [cont2, setCont2] = useState([]);
    const [name, setName] = useState('');
    const [cmmd, setCmmd] = useState([]);
    const handleChangeName = e => setName(e.target.value);
    const [comm, setCmd] = useState('');
    const handleChangeCmd = e => setCmd(e.target.value);

    const chow = () => {
        axios
            .get(`http://localhost:8060/api/v1/test/data`)
            .then((res) => {
                setCont(res.data);
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const chow2 = () => {
        axios
            .get(`http://localhost:8060/api/v1/test/data2`)
            .then((res) => {
                setCont2(res.data);
                console.log(res);
            })
            .catch((err) => console.log(err));
    };
    const newFolder = () => {
        axios
            .get(`http://localhost:8060/api/v1/folder/${name}`,)
            .then(res => alert(res.data))
            .catch(err => alert(err))

    }

    const newFile = () => {
        axios
            .get(`http://localhost:8060/api/v1/file/${name}`,)
            .then(res => alert(res.data))
            .catch(err => console.log(err))
    }

    const del = (str) => {
        axios
            .get(`http://localhost:8060/api/v1/del/${str}`,)
            .then(res => alert(res.data))
            .catch(err => console.log(err))
    }


    const cmd = () => {
        axios
            .get(`http://localhost:8060/api/v1/cmd/${comm}`,)
            .then(res => setCmmd(res.data))
            .catch(err => console.log(err))
    }

    const move = (str) => {
        axios
            .get(`http://localhost:8060/api/v1/move/${str}`,)
            .then(res => alert(res.data))
            .catch(err => console.log(err))
    }


    return (
        <div className="App">
            {/*<button onClick={chow}>list contents</button>
        <ul>
          {cont.map((e) => (
              <li key={e}>{e}</li>
          ))}
        </ul>
          <input type="text" value={name} onChange={handleChangeName} placeholder='enter name folder or file'/>
          <button onClick={newFile}>new file</button>

          <button onClick={newFolder}>new folder</button>

          <button onClick={delFile}>delete file</button>

          <button onClick={delFolder}>delete folder</button>

          <input type="text" value={comm} onChange={handleChangeCmd} placeholder='enter commande'/>
          <button onClick={cmd}>exec cmd</button>

          <p>{cmmd}</p>*/}


            <div className="row">
                <div className="col-sm">


                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <td>
                                <button className="btn btn-primary" onClick={chow}>list contents</button>
                            </td>
                        </tr>
                        </thead>

                        <tbody>

                        {cont.map((e) => (
                            <tr>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-front" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"/>
                                </svg>{e}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => del(e)}>Delete
                                    </button>

                                </td>
                                <td>
                                    <button type="button" className="btn btn-outline-secondary"
                                            onClick={() => move(e)}>Move
                                    </button>
                                </td>
                            </tr>

                        ))}


                        </tbody>
                    </table>
                </div>
                <div className="col-sm">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter name"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" value={name}
                               onChange={handleChangeName}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" type="button" onClick={newFile}>New File
                            </button>
                            <button className="btn btn-outline-success" type="button" onClick={newFolder}>New Folder
                            </button>
                        </div>
                    </div>
                    <br/>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">[saleck@eljili ~]#</span>
                        </div>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                               value={comm} onChange={handleChangeCmd} placeholder='enter commande'/>
                    </div>

                    <button className="btn btn-outline-danger" onClick={cmd}>exec cmd</button>


                    <div className="card bg-light mt-3">
                        <div className="card-body">
                            {cmmd.map((c) => (<p className="card-text">{c}</p>))}
                        </div>
                    </div>


                </div>


                <div className="col-sm">


                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <td>
                                <button className="btn btn-info" onClick={chow2}>list contents of move folder</button>
                            </td>
                        </tr>
                        </thead>

                        <tbody>

                        {cont2.map((e) => (
                            <tr>
                                <td>{e}</td>

                            </tr>

                        ))}


                        </tbody>
                    </table>


                </div>
                {/*<div className="col-sm">
                  One of three columns
              </div>
              */}
            </div>


        </div>
    );
}

export default App;
