
import React, { useState } from 'react';
const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{props.message}</p>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
};
const Contact = () => {
  return <Counter message="Click the button to increase count:" />;
};

export default Contact;
