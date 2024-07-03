import { useSelector } from 'react-redux';

import { Section } from '../utils/Section';
import { SectionSecondary } from '../utils/SectionSecondary';
import { RootState } from '@free-resume/redux-store';

export function Educations() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>Resume not defined</p>;
  return (
    <Section title="Education">
      <ul>
        {resume.educations.map((education) => (
          <Education education={education} />
        ))}
      </ul>
    </Section>
  );
}

function Education({ education }: { education: Education }) {
  return (
    <SectionSecondary title={education.career}>
      <>
        <div>{education.institution}</div>
        <div>{education.location}</div>
        {education.since && (
          <div>
            {education.since} &rarr;{education.to}
          </div>
        )}
      </>
    </SectionSecondary>
  );
}
