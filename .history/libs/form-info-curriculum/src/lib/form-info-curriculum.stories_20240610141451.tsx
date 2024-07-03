import React from 'react';
import { FormInfoCurriculum } from './form-info-curriculum';
import { ChakraProvider } from '@chakra-ui/react';

export default {
  title: 'Components/FormInfoCurriculum',
  component: FormInfoCurriculum,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

const Template = (args) => <FormInfoCurriculum {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Template!/gi)).toBeTruthy();
  },