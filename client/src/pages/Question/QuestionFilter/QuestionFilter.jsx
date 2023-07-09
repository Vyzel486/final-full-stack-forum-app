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

export default QuestionFilter;
