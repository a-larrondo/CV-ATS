import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Resume, ContactInfo } from '@free-resume/models-types';

const initialState: Resume = {
  contactInfo: {
    name: '',
    certgree: '',
    resumeEmail: '',
    location: '',
    phone: '',
    birthDate: '',
    nationality: '',
    linkedin: '',
  },
  objective: '',
  skills: [],
  idioms: [],
  experiences: [],
  educations: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateResume: (state, action: PayloadAction<Resume>) => {
      return { ...state, ...action.payload };
    },
    updateContactInfo: (state, action: PayloadAction<ContactInfo>) => {
      return { ...state, contactInfo: { ...action.payload } };
    },
  },
});

export const { updateResume, updateContactInfo, updateCarrerSummary } =
  resumeSlice.actions;
export default resumeSlice.reducer;
