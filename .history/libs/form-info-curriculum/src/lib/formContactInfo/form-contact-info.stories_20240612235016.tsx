import React from 'react';
import { FormContactInfo, FormContactInfoProps } from './form-contact-info';
import { ChakraProvider } from '@chakra-ui/react';
import type { Story, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { JSX } from 'react/jsx-runtime';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

const infoContacto = {
  contactInfo: {
    name: 'John Doe',
    certgree: 'Senior Developer',
    resumeEmail: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    location: 'Los alamos ',
    birthDate: '1990-01-01',
    nationality: 'World Wide',
    linkedin: 'https://www.linkedin.com/in/johndoe',
  },
};

export default {
  title: 'Components/FormInfoPersonal',
  component: FormContactInfo,
  decorators: [
    (StoryComponent: any) => (
      <Provider store={store}>
        <ChakraProvider>
          <StoryComponent />
        </ChakraProvider>
      </Provider>
    ),
  ],
};
export const FullFields = { args: infoContacto };

export const checkLoading = {
  args: {},
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
  },
};
