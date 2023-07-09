const QuestionSort = ({ sortType, setSortType }) => {
  return (
    <div>
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="dateAsc">Newest first</option>
        <option value="dateDesc">Oldest first</option>
        <option value="answersAsc">With most answers first</option>
        <option value="answersDesc">With least answers first</option>
      </select>
    </div>
  );
};

export default QuestionSort;
