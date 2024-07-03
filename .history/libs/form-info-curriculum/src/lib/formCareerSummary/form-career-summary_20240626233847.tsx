import React, { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import { Summary } from '@free-resume/models-types';
import { PitchField } from './fields/pitch-field';
import { HighlightField } from './fields/highlight-field';
import { CompetencyField } from './fields/competency-field';
import { useDispatch } from 'react-redux';
import { updateCarrerSummary } from '@free-resume/redux-store';

export interface FormContactInfoProps {
  summaryProps?: Summary;
}

export function FormCareerSummary(summaryProps: Summary) {
  const [summary, setSummary] = useState<Summary>(
    summaryProps || {
      pitch: '',
      highlights: [''],
      competencies: [{ skill: '', level: 'Basic' }],
    }
  );
  const dispach = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispach(updateCarrerSummary(summary));
  };

  return (
    <VStack alignItems="start" spacing={4} p={8}>
      <Box
        as="form"
        onSubmit={handleSubmit}
        maxW="md"
        mx="auto"
        mt={5}
        minWidth="300px"
      >
        <PitchField value={summary.pitch} setSummary={setSummary} />
        <HighlightField
          highlights={summary.highlights}
          setSummary={setSummary}
        />
        <CompetencyField
          competencies={summary.competencies}
          setSummary={setSummary}
        />
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </Box>
    </VStack>
  );
}

export default FormCareerSummary;
