import { useState } from 'react';

const useSpinner = () => {
  const [spinnerState, setSpinnerState] = useState(false);

  const onSetSpinnerState = (state: boolean) => {
    setSpinnerState(state);
    console.log(state);
  };

  return {
    onSetSpinnerState,
    spinnerState,
  };
};

export default useSpinner;
