import React from 'react';
import { useParams } from 'react-router';

const Child = () => {
  let { id } = useParams();
  return <div>id:{id}</div>;
};

export default Child;
