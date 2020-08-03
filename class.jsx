import React from 'react';

const ApplicationBase = () => {
  const thing = {
    stuff: 'stuff',
  };

  // Parse works when the next line is commented out.
  const string = thing?.stuff;
  // Works when un-commented
  // const string = 'stuff';

  return (
    <div>
      {string}
    </div>
  );
};

export default ApplicationBase;
