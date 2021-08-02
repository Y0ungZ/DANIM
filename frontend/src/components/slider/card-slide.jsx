import { Typography } from '@material-ui/core';
import React from 'react';

const CardSlide = ({ data }) => {
  return (
    <div>
      <Typography variant="h5">{data.title}</Typography>
      <Typography variant="button">{data.location}</Typography>
    </div>
  );
};

export default CardSlide;