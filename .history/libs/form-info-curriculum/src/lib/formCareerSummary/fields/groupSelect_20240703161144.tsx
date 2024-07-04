import React from 'react';
import { ChakraProvider, Box, Select } from '@chakra-ui/react';
import { skills } from '@free-resume/models-types';
const selectValues = Object.keys(skills).map(tipo=> {
    return (<optgroup label={tipo}>
        const listaSkill:string[] = skills[tipo];
        .map(skill => {
            <option value={skill}>skill</option>
        })
    </optgroup>
  )};

const GroupedSelect = () => {
  

    return (
    <ChakraProvider>
      <Box width="300px" p={4}>
        <Select placeholder="Select option">            
          {selectValues}
        </Select>
      </Box>
    </ChakraProvider>
  );
};

export default GroupedSelect;