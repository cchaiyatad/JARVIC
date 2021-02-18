function Counter(props) {
  const { value, counter, onChangeValue, onDelete } = props;
  return (
    <div>
      <button onClick={() => onChangeValue(counter, -1)}>-</button>
      <span>I am counter with value = {value}</span>
      <button onClick={() => onChangeValue(counter, 1)}>+</button>
      <button onClick={() => onDelete(counter)}>Delete</button>
    </div>
  );
}

export default Counter;
