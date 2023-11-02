import PropTypes from "prop-types";

const SearchBox = ({ onChangeHandler, id, className, placeholder }) => (
    <>
      <div className="text-center py-5">
        <input
          id={id}
          type="search"
          className={`searchInput ${className}`}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    </>
  );


SearchBox.propTypes = {
  onChangeHandler: PropTypes.any,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchBox;
