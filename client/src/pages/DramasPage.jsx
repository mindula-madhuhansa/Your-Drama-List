import {Link} from "react-router-dom";

export default function DramasPage() {
  return (
    <div>
        <div className=""><Link to={'/account/dramas/new'}>Add new drama</Link></div>
    </div>
  );
}
