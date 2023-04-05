import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-light text-center">
      <h1>404 - Pagina non trovata </h1>
      <h4>
        <Link to="/" className="text-danger">
          Torna alla Home Page
        </Link>
      </h4>
    </div>
  );
};
export default NotFound;
