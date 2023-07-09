import Edit from "./EditKT";
import Delete from "./DeleteKT";
import { Link } from "react-router-dom";
import video from "../../images/video.png";
import jwt_decode from "jwt-decode";
const KTs = ({ KTsession, chapterName, chapterID, unitName, unitId }) => {
  const userRole = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData?.userRole;
  return (
    <div>
      <div className="card mt-3">
        <div className="card-body" style={{ backgroundColor: "#ADD8E6 " }}>
          <div class="col-lg-12">
            <h3 style={{ font: "25px", color: "#000000" }}>
              {KTsession.sessionName}
            </h3>
            <div>
              {
                ["Content Creator", "Supervisor"].includes(userRole)
                &&
                <Edit key={KTsession._id} KTsession={KTsession} unitId={unitId} />
              }
            </div>
            <p>{KTsession.sessionDesc} </p>
            <div>
              {
                ["Content Creator", "Supervisor"].includes(userRole)
                &&
                <Delete key={KTsession._id} KTsession={KTsession} />
              }
            </div>
          </div>
          <p>
            <Link
              to={
                "/Unit/View/" +
                chapterID +
                "/" +
                chapterName +
                "/" +
                unitId +
                "/" +
                unitName +
                "/" +
                KTsession._id +
                "/" +
                KTsession.sessionName
              }
            >
              <img src={video} height="20px" width="20px" alt="pdf"></img>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default KTs;
