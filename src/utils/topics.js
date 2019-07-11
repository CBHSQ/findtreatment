import React from 'react';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';

export default () => [
  {
    name: 'What to expect',
    id: 'what-to-expect',
    description: 'blurb'
  },
  {
    name: 'Understanding addiction',
    id: 'understanding-addiction',
    description:
      'Addiction is a chronic disease that changes the brain and alters decision-making. Treatment works, help is available, and people recover from addiction every day.',
    subTopics: [
      {
        name: 'Addiction can affect anyone',
        body: (
          <>
            <p>
              People from all backgrounds experience addiction. Addiction
              doesn't care how old you are, how much money you make, or the
              color of your skin - it has no bias. While the initial choice to
              use a drug is often voluntary, the powerful effects of addiction
              makes it very hard to stop, even if someone wants to.
            </p>
            <p>
              When drugs or alcohol are used so often that they have significant
              negative effects on your life, making it unlivable to the quality
              it was before, this is called a <strong>substance use
              disorder</strong>.
            </p>
            <p>
              It causes intense cravings for alcohol or drugs, and can include:
                <ul>
                  <li>
                    Using illegal drugs like heroin or cocaine, or excessive
                    alcohol drinking.
                  </li>
                  <li>
                    Using prescription drugs in ways other than prescribed, or
                    using someone else’s prescription.
                  </li>
                </ul>
              </p>
          </>
        )
      },
      {
        name: 'It’s hard to stop using drugs on your own',
        body: (
          <>
          <p>
            Addiction is a chronic and treatable disease. Repeated drug use
            changes the brain, including the parts that help exert
            self-control. That’s why even if someone feels ready to stop
            using drugs, or knows the drug is causing harm, they may not be
            able to.
          </p>
          <p>
            Some common behaviors of addiction and substance use disorder
            include:
              <ol>
                <li>
                  Trying to stop or cut down on drug use, but not being
                  able to.
                </li>
                <li>
                  Using drugs because of being angry or upset with other
                  people
                </li>
                <li>
                  Taking one drug to get over the effects of another.
                </li>
                <li>
                  Making mistakes at school or on the job because of using drugs.
                </li>
                <li>
                  Drug use hurting relationships with family and friends.
                </li>
                <li>
                  Being scared at the thought of running out of drugs.
                </li>
                <li>
                  Stealing drugs or money to pay for drugs.
                </li>
                <li>
                  Being arrested or hospitalized for drug use.
                </li>
                <li>
                  Developing a tolerance, and needing larger amounts of
                  drugs or alcohol to get high.
                </li>
                <li>
                  Overdosing on drugs.
                </li>
              </ol>
            </p>
          </>
        )
      },
      {
        name: 'Asking for help is the first important step',
        body: (
          <>
            <p>
              It takes courage to seek help for a drug problem. But
              remember: treatment works, there are many paths to help, and
              people recover every day.
            </p>
            <p>
              Like other chronic diseases, addiction can be managed
              successfully. It can take several attempts at treatment to
              find the right approach. Treatment helps people disrupt
              addiction's powerful effects on the brain and behavior and
              regain control of their lives.
            </p>
            <p>
              Our treatment locator lists facilities across the country. We
              have guidance about what to expect when looking for treatment,
              including <u>different kinds of treatment</u> and
              <u> understanding how to pay for treatment</u>.
            </p>
            <p>
              If treatment isn’t the next right step for you, you can still
              find someone to talk to:
                <ul>
                  <li>
                    <strong>Talking to a professional therapist or
                    counselor.</strong>Your primary care doctor can
                    recommend therapists in your care network, and NAMI has
                    locations around the country with resources for finding
                    a therapist.
                      <a href="https://www.nami.org/local/"> https://www.nami.org/local
                      </a>
                  </li>
                  <li>
                    <strong>Joining a support group of peers.</strong>
                    People who have common life experiences have a unique
                    ability to help each other. Peers can be very
                    supportive since they have “been there” and serve as
                    living examples that individuals can and do recover.
                    There are peer groups for people in recovery as well as
                    their families and loved ones, including:
                  </li>
                    <ul>
                      <li>
                        Narcotics Anonymous <a href="www.na.org">(www.na.org)</a>,
                        and Nar-Anon <a href="https://www.nar-anon.org/">(www.nar-anon.org)</a>
                      </li>
                      <li>
                        Alcoholics Anonymous <a href="www.aa.org">(www.aa.org)</a>,
                        and Al-Anon <a href="https://al-anon.org/">(https://al-anon.org)</a>
                      </li>
                      <li>
                        Faces and Voices of Recovery <a href="www.facesandvoicesofrecovery.org">(www.facesandvoicesofrecovery.org)</a>
                      </li>
                      </ul>
                </ul>
            </p>
          </>
        )
      },
      {
        name: 'You cannot do someone else’s recovery for them',
        body: (
          <>
            <p>
              If you think your family member or friend might be addicted,
              you cannot fix the problem by yourself, or force them into
              treatment. If the person is initially not willing to be
              helped, learning more about drug addiction for your own
              knowledge, and see if there are resources or information that
              might convince them to seek help.
            </p>
            <p>
              Everyone acts differently when they start treatment. Some
              people are very happy to be getting treatment at last; others
              suffer a great deal while they adjust to a new life and
              attempt to live it without alcohol and drugs. They may be sad,
              angry, or confused. It is important for you to realize that
              these are normal reactions and to get support for yourself.
            </p>
          </>
        )
      },
      {
        name: 'Supporting recovery and caring for yourself',
        body: (
          <>
          <p>
            Many treatment professionals consider substance use disorders
            family diseases. To help everyone recover and cope, family may
            be asked to take part in treatment. This may involve going to
            a family education program or to counseling for families or
            couples.
          </p>
          <p>
            As you and your family member recover, remember:
              <ul>
                <li>
                  You are participating in treatment for
                  <strong> yourself</strong>, not just for the sake of the
                  person who used substances.
                </li>
                <li>
                  Your loved one’s recovery, sobriety, or abstinence does
                  not depend on you.
                </li>
                <li>
                  Your family’s recovery does not depend on the recovery
                  of the person who used substances.
                </li>
                <li>
                  You did not cause your family member’s substance use
                  disorder. It is not your fault.
                </li>
              </ul>
            </p>
            <p>
              You still may have hurt feelings and anger from the past
              that need to be resolved. You need support to understand
              and deal with these feelings, and you need to support your
              loved one’s efforts to get well.
            </p>
            </>
          )
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
        body: (
          <>
            <h3>What should I know before I call?</h3>
            <p>
              When you call, facility staff will ask questions about yourself.
              You can ask questions too - it’s important to make sure the
              services and facility are a good fit for you.
            </p>
            <p>
              <strong>This is a confidential call</strong>. Answering the questions honestly is
              important, and you won’t be reported to law enforcement for
              talking about using illegal drugs.
            </p>
            <p>
              If a facility can’t see you within 48 hours, try another one. A
              sign of quality care is being able to be seen quickly. Many
              programs offer walk in care, or interim care if only a waitlist
              is available.
            </p>
            <h3>Questions you may be asked</h3>
            <ol>
              <li>
                If you’re calling for yourself or someone else.
              </li>
              <li>
                Which drugs or alcohol have you been using, for how long, and
                how much.
              </li>
              <li>
                Current health conditions and medications, including pain
                medications you’re currently taking.
              </li>
              <li>
                What financial resources are you working with (insurance, money
                from a loved one, etc?)
              </li>
            </ol>
            <h3>Questions you may want to ask the facility</h3>
            <ol>
              <li>
                When can I get an appointment?
              </li>
              <li>
                How much will treatment cost? Do you accept my insurance?
              </li>
              <li>
                What do I need to bring? What should I not bring?
              </li>
              <li>
                How do I get to the facility? Is there public transportation?
                Can you pick me up?
              </li>
              <li>
                Consider asking questions that are important for you and your
                situation:
                  <ul>
                    <li>
                      Is the facility smoke-free or is smoking allowed?
                    </li>
                    <li>
                      Are there childcare options available?
                    </li>
                    <li>
                      What types of medications am I allowed to take while in
                      treatment?
                    </li>
                    <li>
                      What kind of family contact is allowed, and when?
                    </li>
                  </ul>
                </li>
              </ol>
            </>
          )
        },
      {
        name: 'What happens next?',
        body: (
          <>
            <h3>Assessment</h3>
            <p>
              Everyone entering treatment receives a{' '}
              <strong>clinical assessment</strong> to determine the type of
              treatment that’s the best fit. No one type of treatment is right
              for everyone; to work, the treatment needs to meet your individual
              needs.
            </p>
            <p>
              Although clinical assessment continues throughout a person’s
              treatment, it starts at or just before a person’s admission to a
              treatment program. All facilities in the treatment locator offer
              assessment services.
            </p>
            <h3>Signs of Quality Treatment</h3>
            <ol>
              <li>
                <strong>Licensed and accredited.</strong> All facilities in the
                treatment locator are licensed by the state they’re in.
              </li>
              <li>
                <strong>Medication.</strong> A facility should only use
                FDA-approved medication in treating alcohol or opioid use.{' '}
                <em>
                  There are no FDA-approved medication to help prevent relapse
                  from other problem substances.
                </em>
              </li>
              <li>
                <strong>Evidence-based practices.</strong> Quality programs
                should offer a full range of services accepted as effective in
                treatment and recovery, including:
                <ul>
                  <li>Motivational therapy</li>
                  <li>Cognitive behavioral therapy (CBT)</li>
                  <li>Drug and alcohol counseling and education</li>
                  <li>Peer support</li>
                  <li>
                    Care for or help accessing care for other physical and
                    mental health needs.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Families.</strong> Family members should be included in
                the treatment process. They have an important role in
                understanding the impact of addiction and being supportive in
                recovery.
              </li>
              <li>
                <strong>Supports beyond substance use.</strong> For many,
                addiction is a chronic disease that needs ongoing support. A
                quality program treat s the whole patient for the long term.
                This can include ongoing counseling or recovery coaching, and
                help meeting basic needs like sober housing, employment
                supports, and continued family involvement.
              </li>
            </ol>
          </>
        )
      },
      {
        name: 'Types of providers',
        body: (
          <>
            <p>
              In most treatment programs, the main caregivers are specially
              trained individuals certified or licensed as{' '}
              <strong>substance abuse treatment counselors</strong>.
            </p>
            <p>
              Most treatment programs assign patients to a{' '}
              <strong>treatment team</strong> of professionals. Depending on the
              type of treatment, teams can be made up of social workers,
              counselors, doctors, nurses, psychologists, and psychiatrists.
            </p>
            <p>
              Be honest during the assessment; the counselor needs to get a full
              picture of the problem to plan and help implement the most
              effective treatment. You may feel embarrassed answering some of
              these questions or have difficulty completing the interview, but
              remember: the counselor is there to help.
            </p>
            <p>
              After the assessment, the counselor will work with you (and
              possibly your family members) to develop a{' '}
              <strong>treatment plan</strong>. This plan lists problems,
              treatment goals, and ways to meet those goals.
            </p>
            <h3>Pre-treatment and detox</h3>
            <p>
              Medically supervised withdrawal (often called detoxification or
              detox) uses medication to help people withdraw from alcohol or
              drugs after using large amounts. Sometimes, withdrawal can be so
              severe that people hallucinate, have convulsions, or develop other
              dangerous conditions.
            </p>
            <p>
              Detox can take place on a regular medical ward of a hospital, in a
              specialized inpatient detoxification unit, or on an outpatient
              basis with close medical supervision. Detoxification may take
              several days to a week or more.
            </p>
            <p>
              <strong>Social detoxification</strong> can provide the support and
              care for someone who doesn’t need to be medically supervised
              during withdrawal. Sometimes social detoxification centers are
              part of a residential treatment program; other times they are
              separate facilities.
            </p>
            <p>
              Social detoxification centers are not hospitals and seldom use
              medication, but the person does stay there from several days to 1
              week. A staff of nurses watches each person’s medical condition
              closely, and counselors are available to help them through the
              most difficult parts of withdrawing from alcohol and drugs.
            </p>
            <p>
              It is important to know that{' '}
              <strong>detoxification is not treatment</strong>; it is a first
              step that can prepare a person for treatment.
            </p>
          </>
        )
      },
      {
        name: 'Types of treatment',
        body: (
          <>
            <p>
              There are many kinds of treatment; your recovery may include one
              or more of these.
            </p>
            <h3>
              <strong>Detoxification/Detox</strong>
            </h3>
            <p>
              <em>Supervised withdrawal from substance use</em>
            </p>
            <p>
              A process that helps the body rid itself of substances while the
              symptoms of withdrawal are treated. <strong>Detoxification by
              itself is not treatment</strong>; it is a first step that can
              prepare a person for treatment.
            </p>
            <h3>
              <strong>Interim care</strong>
            </h3>
            <p>
              <em>When immediate admission to other care isn’t available</em>
            </p>
            <p>
              Many facilities have long waitlists, but can still help. Interim
              care provides daily medication and emergency counseling. This can
              be a helpful bridge from beginning recovery to admission to a
              regular outpatient, inpatient, or residential setting
            </p>
            <h3>
              <strong>Outpatient</strong>
            </h3>
            <p>
              <em>
                Treatment at a program site while a patient lives on their
                own
              </em>
            </p>
            <p>
              Outpatient treatment is best for people willing to attend regular
              appointments and counseling sessions. Since there is no overnight
              care, it’s important to have a stable living environment,
              reliable transportation, and supportive family or friends.
            </p>
            <p>
              Care frequency depends on the program, with some requiring daily
              attendance and others meeting one to three times per week.
              Outpatient care usually lasts from about 2 months to 1 year.
            </p>
            <h3>
              <strong>Hospital inpatient</strong>
            </h3>
            <p>
              <em>24/7 care connected to a hospital, lasting days or weeks</em>
            </p>
            <p>
              These are usually connected to a hospital or clinic, and provide
              detox and rehabilitative care. People with a serious mental or
              medical concerns as well as substance use disorders are the most
              likely to use inpatient treatment.
            </p>
            <p>
              Teens and adolescents benefit from the structure of inpatient
              treatment to fully understand their needs and make a treatment
              plan.
            </p>
            <h3>
              <strong>Residential</strong>
            </h3>
            <p>
              <em>Live-in care, lasting for one month to one year</em>
            </p>
            <p>
              A stable setting for long-term phased treatment. Each facility
              has specific rules and expectations for both residents and their
              families. Residential care usually lasts from a few months to a
              year.
            </p>
            <p>
              They’re best for people without stable living or work situations,
              and/or who have limited or no family support in treatment. They
              also help people with very serious disorders who have been unable
              to get and stay sober or drug free in other treatment.
            </p>
            <h3>
              <strong>Psychiatric Emergency Walk-in Services</strong>
            </h3>
            <p>
              <em>
                Walk-in help for urgent/emergency mental health evaluation
              </em>
            </p>
            <p>
              These facilities focus on resolving a mental health crisis in a
              less intensive setting than a hospital, though they may recommend
              hospitalization when appropriate.
            </p>
            <h3>
              <strong>
                Telemedicine (including internet and mobile options)
              </strong>
            </h3>
            <p>
              <em>
                Care over the phone or online
              </em>
            </p>
            <p>
              Computer or web-based interactive, structured, substance abuse
              treatment program to support the assessment, intervention,
              treatment, or continuing care of clients.
            </p>
          </>
        )
      },
      {
        name: 'Medications used in treatment',
        body: (
          <>
            <p>
              Although no single recovery pathway is right for everyone, people
              who are addicted to opioids are usually more successful with
              <strong> medication-assisted treatment (MAT)</strong>. This
              treatment uses FDA-approved medication together with counseling
              and behavioral therapies.
            </p>
            <p>
              Three FDA-approved medications are used in the US to treat opioid
              addiction: methadone, buprenorphine, and naltrexone.
            </p>
            <h3>
              <strong>Methadone</strong>
            </h3>
            <h4>
              <em>(METH-ah-dohn)</em>
            </h4>
            <p>
              Methadone is a long-acting medication that reduces cravings and
              withdrawal symptoms. It can block the euphoric effects of
              short-acting opioids, such as heroin.
            </p>
            <p>
              Methadone is usually taken daily as a drinkable liquid. It can be
              dispensed only at licensed, federally-regulated opioid treatment
              programs, so having reliable daily transportation to a clinic is
              important while taking methadone.
            </p>
            <p>
              Because methadone controls withdrawal symptoms and blocks
              cravings, people who are addicted to opioids tend to stick with
              it. This allows them to build a life in recovery and avoid the
              hazards and problems that come with illegal drug use. People who
              take methadone for a year or more have the best rates of success.
            </p>
            <p>
              Methadone can work for people who have made other unsuccessful
              attempts to stop using opioids or alcohol. It is a recommended
              treatment for opioid use disorder during pregnancy.
            </p>
            <h3>
              <strong>Buprenorphine</strong>
            </h3>
            <h4>
              <em>(byoo-preh-NOR-feen)</em>
            </h4>
            <p>
              Buprenorphine works in a similar way to methadone, controlling
              withdrawal symptoms and blocking cravings. Buprenorphine is
              usually taken daily as a small film that must be dissolved under
              the tongue.
            </p>
            <p>
              Most guidelines suggest people with shorter, less extensive
              histories of heavy opioid use may be good candidates for treatment
              with buprenorphine. It also works for more severe opioid use
              disorder and for people who decide to switch from methadone.
            </p>
            <p>
              Buprenorphine can be a good choice for people who can’t regularly
              get to an opioid treatment program. Doctors who have completed a
              required training and certification process can prescribe
              buprenorphine for patients they see in the office. While the
              beginning of treatment usually involves frequent in-office visits,
              patients may be able to have a prescription to take at home.
            </p>
            <p>
              Buprenorphine is widely available in a formula that contains
              added naloxone (commonly known as Narcan), which discourages
              abusing or injecting it.
            </p>
            <h3>
              <strong>Naltrexone</strong>
            </h3>
            <h4>
              <em>(nal-TREX-ohn)</em>
            </h4>
            <p>
              Naltrexone blocks the ability of opioids to eliminate pain and
              induce euphoria. This removes the rewarding aspects of opioid use
              that result in a desire for more. It is available in an extended
              release injection that is given every 30 days and in tablet form,
              taken once a day by mouth.
            </p>
            <p>
              Because of the way naltrexone blocks opioid receptors in the
              brain, it’s not a good fit for everyone. Before starting
              naltrexone, you needs to get through an initial 7-10 days of
              withdrawal. People with chronic pain problems, who sometimes need
              to take opioid medications, should work carefully with their
              doctor about a pain management strategy before starting
              naltrexone.
            </p>
            <p>
              Naltrexone works well for highly motivated people who are able to
              stop opioid use for 7-10 days prior to beginning treatment. It is a
              good option for those who are eager to eliminate all opioids. The
              injectable form is helpful for people who have a hard time keeping
              up with daily pills.
            </p>
            <p>
              Since it is approved for treating alcohol problems as well,
              people taking naltrexone may find it also helps them avoid
              drinking.
            </p>
          </>
        )
      }
    ]
  },
  {
    name: 'Paying for treatment',
    id: 'paying-for-treatment',
    description: 'Learn more about the cost of treatment and payment options.',
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
