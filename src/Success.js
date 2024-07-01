import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      {formData && <pre>{JSON.stringify(formData, null, 2)}</pre>}
    </div>
  );
};

export default Success;
