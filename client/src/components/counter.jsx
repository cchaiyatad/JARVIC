import "./counter.css";

function Counter(props) {
  const { value, index, onChangeValue, onDelete } = props;
  return (
    <div>
      <span>
        Counter #{index + 1} value = {value}
      </span>
      <button onClick={() => onChangeValue(index, -1)}>-</button>
      <button onClick={() => onChangeValue(index, 1)}>+</button>
      <button onClick={() => onDelete(index)}>Delete</button>
      <button onClick={() => onChangeValue(index, 0)}>Reset</button>
    </div>
  );
}

export default Counter;
