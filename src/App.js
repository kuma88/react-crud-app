import { React, Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      act: 0,
      index: '',
      postList: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let postList = this.state.postList;
    let title = this.refs.title.value;
    let desc = this.refs.desc.value;

    //if(this.setState.act === 0){
      let newPost = {
        title,
        desc
      };
      postList.push(newPost);
    //}
    // else
    // {
    //   let index = this.state.index;
    //   postList[index].title = title;
    //   postList[index].desc = desc;
    // }

    this.setState({
      postList: postList,
      act: 0,
    });

    this.refs.title.value = "";
    this.refs.desc.value = "";
  };

  handleEdit = (i) => {
    let postList = this.state.postList[i];
    this.refs.title.value = postList.title;
    this.refs.desc.value = postList.desc;

    this.setState({
      postList: postList,
      act: 1,
      index: i,
    });
  };

  handleDel = (i) => {
    let postList = this.state.postList;
    postList.splice(i, 1);

    this.setState({
      postList: postList,
    });

    this.refs.title.value = "";
    this.refs.desc.value = "";
  };

  render() {
    let postList = this.state.postList;
    return (
      <div className="container">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <a class="navbar-brand" href="#">
              CRUD
            </a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dummy navbar link
                </a>
              </li>
            </ul>
          </nav>
       </div>

        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Post</h2>
          <form ref="myForm" className="myForm">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter title"
                ref="title"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Description"
                ref="desc"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary"
                onClick={(e) => this.handleSubmit(e)}
              />
            </div>
          </form>
        </div>
        <hr></hr>
        <div>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {postList.map((data, i) => (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{data.title}</td>
                  <td>{data.desc}</td>

                  <td>
                    <input
                      value="Edit"
                      className="btn btn-warning"
                      onClick={(e) => this.handleEdit(e)}
                    />
                    <br></br>
                    <input
                      value="Delete"
                      className="btn btn-danger"
                      onClick={(e) => this.handleDel(e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
