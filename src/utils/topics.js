import React from 'react';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';

export default () => [
  {
    name: 'What to expect',
    id: 'what-to-expect',
    description:
      'blurb',
  },
  {
    name: 'Understanding addiction',
    id: 'understanding-addiction',
    description:
      'Substance use and mental health problems are treatable, and help is available.',
    subTopics: [
      {
        name: 'Why is it hard?',
        body: (
          <p css={tw`block`}>
            <strong>This</strong> is a test <Link to="/">link</Link>
          </p>
        )
      },
      {
        name: 'How do I stop?',
        body: ''
      },
      {
        name: 'Building a support team',
        body: ''
      },
      {
        name: 'What is a SUD?',
        body: ''
      },
      {
        name: 'Why are some people affected?',
        body: ''
      }
    ]
  },
  {
    name: 'Treatment options',
    id: 'treatment-options',
    description:
      'Learn about finding quality treatment, the different types of treatment, and what to expect when starting treatment.',
    subTopics: [
      {
        name: 'Calling a facility',
        body: ''
      },
      {
        name: 'What happens next?',
        body: (
          <div>
            <p><strong>Assessment</strong></p>
            <p>
              Everyone entering treatment receives a <strong>clinical assessment</strong> to determine the type of treatment that’s the best fit. No one type of treatment is right for everyone; to work, the treatment needs to meet your individual needs.
            </p>
            <p>
              Although clinical assessment continues throughout a person’s treatment, it starts at or just before a person’s admission to a treatment program. All facilities in the treatment locator offer assessment services.
            </p>
            <p><strong>Signs of Quality Treatment</strong></p>
            <ol>
              <li><strong>Licensed and accredited.</strong> All facilities in the treatment locator are licensed by the state they’re in.</li>
              <li><strong>Medication.</strong> A facility should only use FDA-approved medication in treating alcohol or opioid use. <em>There are no FDA-approved medication to help prevent relapse from other problem substances.</em></li>
              <li><strong>Evidence-based practices.</strong> Quality programs should offer a full range of services accepted as effective in treatment and recovery, including:</li>
                <ul>
                  <li>Motivational therapy</li>
                  <li>Cognitive behavioral therapy (CBT)</li>
                  <li>Drug and alcohol counseling and education</li>
                  <li>Peer support</li>
                  <li>Care for or help accessing care for other physical and mental health needs.</li>
                </ul>
              <li><strong>Families.</strong> Family members should be included in the treatment process. They have an important role in understanding the impact of addiction and being supportive in recovery.</li>
              <li><strong>Supports beyond substance use.</strong> For many, addiction is a chronic disease that needs ongoing support. A quality program treat s the whole patient for the long term. This can include ongoing counseling or recovery coaching, and help meeting basic needs like sober housing, employment supports, and continued family involvement.</li>
            </ol>
          </div>
        )
      },
      {
        name: 'Types of providers',
        body: (
          <div>
            <p>
              In most treatment programs, the main caregivers are specially trained individuals certified or licensed as <strong>substance abuse treatment counselors</strong>.
            </p>
            <p>
              Most treatment programs assign patients to a <strong>treatment team</strong> of professionals. Depending on the type of treatment, teams can be made up of social workers, counselors, doctors, nurses, psychologists, and psychiatrists.
            </p>
            <p>
              Be honest during the assessment; the counselor needs to get a full picture of the problem to plan and help implement the most effective treatment. You may feel embarrassed answering some of these questions or have difficulty completing the interview, but remember: the counselor is there to help.
            </p>
            <p>
              After the assessment, the counselor will work with you (and possibly your family members) to develop a <strong>treatment plan</strong>. This plan lists problems, treatment goals, and ways to meet those goals.
            </p>
            <p><strong>Pre-treatment and detox</strong></p>
            <p>
              Medically supervised withdrawal (often called detoxification or detox) uses medication to help people withdraw from alcohol or drugs after using large amounts. Sometimes, withdrawal can be so severe that people hallucinate, have convulsions, or develop other dangerous conditions.
            </p>
            <p>
              Detox can take place on a regular medical ward of a hospital, in a specialized inpatient detoxification unit, or on an outpatient basis with close medical supervision. Detoxification may take several days to a week or more.
            </p>
            <p>
              <strong>Social detoxification</strong> can provide the support and care for someone who doesn’t need to be medically supervised during withdrawal. Sometimes social detoxification centers are part of a residential treatment program; other times they are separate facilities.
            </p>
            <p>
              Social detoxification centers are not hospitals and seldom use medication, but the person does stay there from several days to 1 week. A staff of nurses watches each person’s medical condition closely, and counselors are available to help them through the most difficult parts of withdrawing from alcohol and drugs.
            </p>
            <p>
              It is important to know that <strong>detoxification is not treatment</strong>; it is a first step that can prepare a person for treatment.
            </p>
          </div>
        )
      },
      {
        name: 'Types of treatment',
        body: ''
      },
      {
        name: 'Medications used in treatment',
        body: ''
      }
    ]
  },
  {
    name: 'Paying for treatment',
    id: 'paying-for-treatment',
    description:
      'Learn more about the cost of treatment and payment options.',
    subTopics: [
      {
        name: 'Long-term recovery',
        body: ''
      },
      {
        name: 'Helping someone through recovery',
        body: ''
      },
      {
        name: 'Basic living needs',
        body: ''
      },
      {
        name: 'For caregivers',
        body: ''
      },
      {
        name: 'What is family therapy?',
        body: ''
      }
    ]
  }
];

export const lipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas augue non felis gravida, in efficitur sapien viverra. Mauris dapibus ultrices libero, at convallis tortor pellentesque a. Sed vestibulum nisi eu tristique laoreet. Nullam iaculis nisi metus, at aliquet quam dignissim ac. Suspendisse quis justo eget sem vulputate euismod. Duis a egestas dolor, vitae interdum nulla. Fusce semper nunc ex, sit amet mattis ipsum finibus ac. Aliquam congue, orci varius faucibus elementum, nibh neque gravida odio, id aliquet purus tellus a diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tempor augue sit amet lectus hendrerit, et ullamcorper nisi tristique. Duis fermentum aliquet nibh ac consectetur. Quisque nulla orci, finibus in tellus eu, pharetra viverra erat. Donec lobortis tristique aliquam. Aliquam in mollis dui. Suspendisse a lacus ac tellus auctor pulvinar at nec metus.';
