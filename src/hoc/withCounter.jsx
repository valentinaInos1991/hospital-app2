import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <WrappedComponent count={count} incrementCount={incrementCount} {...props} />
      </div>
    );
  };
};

export default withCounter;
