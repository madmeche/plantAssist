import React from 'react';
import { useContext } from 'react';
import { PlantDataContext } from '../PlantDataContext';
import { BasicCard } from './BasicPlant';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


function PlantList () {

const plants = useContext(PlantDataContext)

  return (
    <>
    <Box 
    sx={{
      margin: 10
    }}
    >
    Plants: {plants.length}
    {plants.localeCompare((plant) => (
      <BasicCard key={plant.id} plant={plant} />
    ))}
    </Box>
    </>
  );
}

export default PlantList;