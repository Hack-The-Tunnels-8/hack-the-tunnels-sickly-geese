import { Link } from "react-router-dom";
import { Page } from "../../components";
import "./404.style.scss";
import gif from "./funnygif.gif"

function Error404() {

  return (
    <Page>
      <div className="admin-page">
        <h1>404: Not Found</h1>
        <img src={gif} alt="loading..." />
      </div>
    </Page>
  );
}

export default Error404;
