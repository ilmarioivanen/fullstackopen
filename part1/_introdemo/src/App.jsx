import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <Button onClick={() => setToValue(1000)} text="thousand"></Button>
      <Button onClick={() => setToValue(0)} text="reset"></Button>
      <Button onClick={() => setToValue(value + 1)} text="increment"></Button>
    </div>
  );
};

export default App;
