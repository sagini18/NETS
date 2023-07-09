import image1 from "../../images/2.svg";
import before from "../../images/before.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import validator from "validator";
import { useState } from "react";

const EditJobtitle = () => {
  const { id, name } = useParams();
  const [newJobtitleName, setNewJobtitleName] = useState(name);
  const [reason, setReason] = useState("");
  function submitEdit(e) {
    e.preventDefault();

    // Validate jobtitle name
    const regex = /^[A-Z][A-Za-z\s-]+$/;  //contains alphabet,space,-
    if (!validator.matches(newJobtitleName, regex)) {
      swal({
        icon: "warning",
        title: "Invalid",
        text: "Jobtitle name must begin with uppercase and do not include numbers or symbols.",
      });
      return;
    }

    axios
      .post(process.env.REACT_APP_API_BASE + "/jobtitles/editJobtitle", {
        fromName: name,
        newName: newJobtitleName,
        reason: reason,
        editedId: id,
      })
      .then((res) => {
        if (res.data.status === true) {
          swal({
            icon: "success",
            text: res.data.message,
          });
        } else {
          swal({
            icon: "warning",
            text: res.data.message,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="alert mt-3 heading">
        <Link
          to={"/jobtitle"}
          className="image">
          <img src={before} className="picside11" draggable={false} alt="this is image" />
        </Link>
        <h5>Edit Jobtitles</h5></div>
      <div className="alert alert-info mt-4">
        <b>Jobtitle Name must begin with uppercase and do not include numbers or symbols.</b> </div>
      <div className="columns mt-4">
        <div>
          <img src={image1} className="picside2" draggable={false} alt="this is image" />
        </div>
        <div class="card" style={{ borderRadius: "15px", backgroundColor: "#f1f8f5", boxShadow: "0px 0px 5px 2px rgba(151,196,177, 0.5)" }} >
          <div class="card-body">
            <form name="myForm" onSubmit={submitEdit}>

              <div className="field">
                <label className="ml-5 createchap">Rename Jobtitle</label>
                <div className="control">
                  <input
                    type="text"
                    value={newJobtitleName}
                    onChange={(e) => {
                      setNewJobtitleName(e.target.value);
                    }}
                    name="jname"
                    className="inputdata2 my-2 ml-5"
                    placeholder="Enter Jobtitle Name"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="ml-5 createchap">Reason</label>
                <div className="control">
                  <input
                    type="text"
                    name="dreason"
                    className="inputdata2 my-2 ml-5"
                    placeholder="Reason"
                    required
                    value={reason}
                    onChange={(e) => {
                      setReason(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="control">
                <center>
                  <button
                    type="submit"
                    className="btn btn-success mr-1 column is-half text-white col-md-3 my-3"
                  >
                    Save
                  </button>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default EditJobtitle;
