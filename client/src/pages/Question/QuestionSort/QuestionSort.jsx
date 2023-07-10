import PropTypes from "prop-types";

const QuestionSort = ({ sortType, setSortType }) => {
  return (
    <div>
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="dateAsc">Oldest first</option>
        <option value="dateDesc">Newest first</option>
        <option value="answersAsc">With most answers first</option>
        <option value="answersDesc">With least answers first</option>
      </select>
    </div>
  );
};

QuestionSort.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
};

export default QuestionSort;
