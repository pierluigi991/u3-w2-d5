import { useNavigate } from "react-router-dom";

const Films = (props) => {
  const navigate = useNavigate();
  return (
    <div className="col-6 col-md-3 col-lg-2">
      <img
        onClick={() => {
          navigate(`/movie-details/${props.imdbID}`);
        }}
        className="img-fluid "
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
};
export default Films;
