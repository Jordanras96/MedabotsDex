import PropTypes from "prop-types";

const Card = ({ bot: { id, email, username } }) => ( 
  // ou on peut simplement opter pour  const {id, name, email} = monster; et ce dernier sera en props
  <>
    <div
      key={id}
      className="w-1/4 flex flex-col items-center bg-[#95dada] border border-gray-300 rounded cursor-pointer hover:scale-105 transform transition-transform duration-250 m-6 py-5 shadow-lg hover:drop-shadow-sm hover:shadow-[#95dada]"
    >
      <img
        alt={`bot ${username}`}
        src={`https://robohash.org/${id}?set=set3`}
      />
      <h2>{username}</h2>
      <p>{email}</p>
    </div>
  </>
);

Card.propTypes = {
  bot: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default Card;
