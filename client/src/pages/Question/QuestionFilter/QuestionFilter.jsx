import PropTypes from "prop-types";

const QuestionFilter = ({ filterType, setFilterType }) => {
  return (
    <div>
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="answered">Answered</option>
        <option value="unanswered">Unanswered</option>
      </select>
    </div>
  );
};

QuestionFilter.propTypes = {
  filterType: PropTypes.string.isRequired,
  setFilterType: PropTypes.func.isRequired,
};

export default QuestionFilter;
