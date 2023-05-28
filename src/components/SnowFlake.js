import React from 'react';

const Snowflake = ({ left }) => {
  const screenWidth = window.innerWidth;
  const adjustedLeft = left % screenWidth;

  return <div className="snowflake" style={{ left: adjustedLeft }}></div>;
};

export default Snowflake;