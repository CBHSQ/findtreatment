import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';

import { ReactComponent as IconAddiction } from '../images/what-to-expect-addiction.svg';
import { ReactComponent as IconMentalHealth } from '../images/what-to-expect-mental-health.svg';
import { ReactComponent as IconPayment } from '../images/what-to-expect-payment.svg';
import { ReactComponent as IconTreament } from '../images/what-to-expect-treatment.svg';

export default () => [
  {
    name: 'What to expect',
    id: 'what-to-expect',
    hidden: true,
    description:
      'Help is available, treatment works, and people recover every day.',
    body: (
      <>
        <p>
          Beginning recovery can be overwhelming and intimidating. While
          everyone's path to recovery is unique, there are certain things you
          can expect and be ready for when you start.
        </p>
        <p>
          There is help. From understanding more about addiction and treatment
          options, to being ready to navigate insurance and payment, this
          information can help you feel more confident as you take the next step
          to finding treatment.
        </p>
      </>
    )
  },
  {
    name: 'Understanding addiction',
    id: 'understanding-addiction',
    icon: <IconAddiction css={tw`w-24 h-24`} />,
    description:
      'Addiction is a chronic disease that changes the brain and alters decision-making.',
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
              it was before, this is called a{' '}
              <strong>substance use disorder</strong>.
            </p>
            <p>
              It causes intense cravings for alcohol or drugs, and can include:
            </p>
            <ul>
              <li>
                Using illegal drugs like heroin or cocaine, or excessive alcohol
                drinking.
              </li>
              <li>
                Using prescription drugs in ways other than prescribed, or using
                someone else’s prescription.
              </li>
            </ul>
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
              self-control. That’s why even if someone feels ready to stop using
              drugs, or knows the drug is causing harm, they may not be able to.
            </p>
            <p>
              Some common behaviors of addiction and substance use disorder
              include:
            </p>
            <ol>
              <li>
                Trying to stop or cut down on drug use, but not being able to.
              </li>
              <li>
                Using drugs because of being angry or upset with other people
              </li>
              <li>Taking one drug to get over the effects of another.</li>
              <li>
                Making mistakes at school or on the job because of using drugs.
              </li>
              <li>Drug use hurting relationships with family and friends.</li>
              <li>Being scared at the thought of running out of drugs.</li>
              <li>Stealing drugs or money to pay for drugs.</li>
              <li>Being arrested or hospitalized for drug use.</li>
              <li>
                Developing a tolerance, and needing larger amounts of drugs or
                alcohol to get high.
              </li>
              <li>Overdosing on drugs.</li>
            </ol>
          </>
        )
      },
      {
        name: 'Asking for help is the first important step',
        body: (
          <>
            <p>
              It takes courage to seek help for a drug problem. But remember:
              treatment works, there are many paths to help, and people recover
              every day.
            </p>
            <p>
              Like other chronic diseases, addiction can be managed
              successfully. It can take several attempts at treatment to find
              the right approach. Treatment helps people disrupt addiction's
              powerful effects on the brain and behavior and regain control of
              their lives.
            </p>
            <p>
              Our treatment locator lists facilities across the country. We have
              guidance about what to expect when looking for treatment,
              including <u>different kinds of treatment</u> and{' '}
              <u>understanding how to pay for treatment</u>.
            </p>
            <p>
              If treatment isn’t the next right step for you, you can still find
              someone to talk to:
            </p>
            <ul>
              <li>
                <strong>
                  Talking to a professional therapist or counselor.{' '}
                </strong>
                Your primary care doctor can recommend therapists in your care
                network, and NAMI has locations around the country with
                resources for finding a therapist.
                <a href="https://www.nami.org/local/">(nami.org/local)</a>
              </li>
              <li>
                <strong>Joining a support group of peers. </strong>
                People who have common life experiences have a unique ability to
                help each other. Peers can be very supportive since they have
                “been there” and serve as living examples that individuals can
                and do recover. There are peer groups for people in recovery as
                well as their families and loved ones, including:
              </li>
              <ul>
                <li>
                  Narcotics Anonymous <a href="https://na.org">(na.org)</a>, and
                  Nar-Anon{' '}
                  <a href="https://www.nar-anon.org/">(nar-anon.org)</a>
                </li>
                <li>
                  Alcoholics Anonymous{' '}
                  <a href="https://www.aa.org/">(aa.org)</a>, and Al-Anon{' '}
                  <a href="https://al-anon.org/">(al-anon.org)</a>
                </li>
                <li>
                  Faces and Voices of Recovery{' '}
                  <a href="https://facesandvoicesofrecovery.org/">
                    (facesandvoicesofrecovery.org)
                  </a>
                </li>
              </ul>
            </ul>
          </>
        )
      },
      {
        name: 'You cannot do someone else’s recovery for them',
        body: (
          <>
            <p>
              If you think your family member or friend might be addicted, you
              cannot fix the problem by yourself, or force them into treatment.
              If the person is initially not willing to be helped, learning more
              about drug addiction for your own knowledge, and see if there are
              resources or information that might convince them to seek help.
            </p>
            <p>
              Everyone acts differently when they start treatment. Some people
              are very happy to be getting treatment at last; others suffer a
              great deal while they adjust to a new life and attempt to live it
              without alcohol and drugs. They may be sad, angry, or confused. It
              is important for you to realize that these are normal reactions
              and to get support for yourself.
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
              family diseases. To help everyone recover and cope, family may be
              asked to take part in treatment. This may involve going to a
              family education program or to counseling for families or couples.
            </p>
            <p>As you and your family member recover, remember:</p>
            <ul>
              <li>
                You are participating in treatment for
                <strong> yourself</strong>, not just for the sake of the person
                who used substances.
              </li>
              <li>
                Your loved one’s recovery, sobriety, or abstinence does not
                depend on you.
              </li>
              <li>
                Your family’s recovery does not depend on the recovery of the
                person who used substances.
              </li>
              <li>
                You did not cause your family member’s substance use disorder.
                It is not your fault.
              </li>
            </ul>
            <p>
              You still may have hurt feelings and anger from the past that need
              to be resolved. You need support to understand and deal with these
              feelings, and you need to support your loved one’s efforts to get
              well.
            </p>
          </>
        )
      }
    ]
  },
  {
    name: 'Understanding mental health',
    id: 'understanding-mental-health',
    icon: <IconMentalHealth css={tw`w-24 h-24`} />,
    description:
      'About half of people with a substance use disorder also experience serious mental illness.',
    body: (
      <>
        <p>
          Mental health disorders involve changes in thinking, mood, and/or
          behavior. These can affect how we relate to others and make choices.
          Reaching a level that can be formally diagnosed often depends on a
          reduction in a person’s ability to function in their daily lives, at
          home, work, or school, as a result of the disorder.
        </p>
        <p>
          Having both a substance use and mental health disorder is called a{' '}
          <strong>co-occuring disorder</strong>. Co-occurrence happens in about
          half of people experiencing one of these disorders. Addressing both is
          critical for success in recovery, and{' '}
          <strong>integrated treatment</strong> programs can help.
        </p>
        <p>
          Mental health disorders are not something you can just snap out of or
          shake off, but asking for help is a critical first step. There are
          many treatment approaches for mental health disorders.
        </p>
      </>
    ),
    subTopics: [
      {
        name: 'Serious mental illness',
        body: (
          <>
            <p>
              Like addiction, mental health disorders are treatable medical
              conditions, not someone’s fault. Almost 1 in 5 adults in the USA
              will experience some form of mental health disorder, and 1 in
              every 22 is living with a <strong>serious mental illness</strong>,
              like schizophrenia, bipolar disorder, or major depressive
              episodes. When a serious mental illness like this affects someone
              under the age of 18, it’s called a{' '}
              <strong>serious emotional disturbance</strong>.
            </p>
            <p>
              A lot of stigma and judgement exists around serious mental
              illness. People may expect someone with serious mental illness to
              look visibly different, and they may tell someone they don’t "look
              ill" or that they should just "get over it" by using willpower.
            </p>
          </>
        )
      },
      {
        name: 'Know the warning signs',
        body: (
          <>
            <p>
              Many people don't seek treatment for mental health disorders or
              don’t know their symptoms could be connected to a mental health
              condition. There's no easy test to tell if actions or thoughts are
              typical for a person, symptoms of a physical illness, or signs of
              a mental health disorder.
            </p>
            <p>
              Each illness has its own symptoms, but common signs of mental
              health disorders in adults and adolescents can include the
              following:
              <ul>
                <li>Excessive worrying or fear</li>
                <li>Feeling excessively sad or low</li>
                <li>
                  Confused thinking or problems concentrating and learning
                </li>
                <li>
                  Extreme mood changes, including uncontrollable “highs” or
                  feelings of euphoria
                </li>
                <li>Prolonged or strong feelings of irritability or anger</li>
                <li>Avoiding friends and social activities</li>
                <li>Difficulties understanding or relating to other people</li>
                <li>
                  Changes in sleeping habits or feeling tired and low energy
                </li>
                <li>
                  Changes in eating habits such as increased hunger or lack of
                  appetite
                </li>
                <li>Changes in sex drive</li>
                <li>
                  Difficulty perceiving reality (delusions or hallucinations, in
                  which a person experiences and senses things that don't exist
                  in objective reality)
                </li>
                <li>
                  Inability to perceive changes in one’s own feelings, behavior
                  or personality (”lack of insight” or anosognosia)
                </li>
                <li>Abuse of substances like alcohol or drugs</li>
                <li>
                  Multiple physical ailments without obvious causes (such as
                  headaches, stomach aches, vague and ongoing “aches and pains”)
                </li>
                <li>Thinking about suicide</li>
                <li>
                  Inability to carry out daily activities or handle daily
                  problems and stress
                </li>
                <li>
                  An intense fear of weight gain or concern with appearance
                </li>
              </ul>
            </p>
            <p>
              Mental health disorders can also begin to develop in young
              children. Because they’re still learning how to identify and talk
              about their thoughts and emotions, the most obvious symptoms are
              behavioral. Symptoms in children may include the following:
              <ul>
                <li>Changes in school performance</li>
                <li>
                  Excessive worry or anxiety, for instance fighting to avoid bed
                  or school
                </li>
                <li>Hyperactive behavior</li>
                <li>Frequent nightmares</li>
                <li>Frequent disobedience or aggression</li>
                <li>Frequent temper tantrums</li>
              </ul>
            </p>
            <p>
              For many people, getting an accurate diagnosis is the first step
              in a treatment plan.{' '}
            </p>
          </>
        )
      }
    ]
  },
  {
    name: 'Treatment options',
    id: 'treatment-options',
    icon: <IconTreament css={tw`w-24 h-24`} />,
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
              <strong>This is a confidential call</strong>. Answering the
              questions honestly is important, and you won’t be reported to law
              enforcement for talking about using illegal drugs.
            </p>
            <p>
              If a facility can’t see you within 48 hours, try another one. A
              sign of quality care is being able to be seen quickly. Many
              programs offer walk in care, or interim care if only a waitlist is
              available.
            </p>
            <h3>Questions you may be asked</h3>
            <ol>
              <li>If you’re calling for yourself or someone else.</li>
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
              <li>When can I get an appointment?</li>
              <li>How much will treatment cost? Do you accept my insurance?</li>
              <li>What do I need to bring? What should I not bring?</li>
              <li>
                How do I get to the facility? Is there public transportation?
                Can you pick me up?
              </li>
              <li>
                Consider asking questions that are important for you and your
                situation:
                <ul>
                  <li>Is the facility smoke-free or is smoking allowed?</li>
                  <li>Are there childcare options available?</li>
                  <li>
                    What types of medications am I allowed to take while in
                    treatment?
                  </li>
                  <li>What kind of family contact is allowed, and when?</li>
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
            <h3>Detoxification/Detox</h3>
            <p>
              <em>Supervised withdrawal from substance use</em>
            </p>
            <p>
              A process that helps the body rid itself of substances while the
              symptoms of withdrawal are treated.{' '}
              <strong>Detoxification by itself is not treatment</strong>; it is
              a first step that can prepare a person for treatment.
            </p>
            <h3>Interim care</h3>
            <p>
              <em>When immediate admission to other care isn’t available</em>
            </p>
            <p>
              Many facilities have long waitlists, but can still help. Interim
              care provides daily medication and emergency counseling. This can
              be a helpful bridge from beginning recovery to admission to a
              regular outpatient, inpatient, or residential setting
            </p>
            <h3>Outpatient</h3>
            <p>
              <em>
                Treatment at a program site while a patient lives on their own
              </em>
            </p>
            <p>
              Outpatient treatment is best for people willing to attend regular
              appointments and counseling sessions. Since there is no overnight
              care, it’s important to have a stable living environment, reliable
              transportation, and supportive family or friends.
            </p>
            <p>
              Care frequency depends on the program, with some requiring daily
              attendance and others meeting one to three times per week.
              Outpatient care usually lasts from about 2 months to 1 year.
            </p>
            <h3>Hospital inpatient</h3>
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
            <h3>Residential</h3>
            <p>
              <em>Live-in care, lasting for one month to one year</em>
            </p>
            <p>
              A stable setting for long-term phased treatment. Each facility has
              specific rules and expectations for both residents and their
              families. Residential care usually lasts from a few months to a
              year.
            </p>
            <p>
              They’re best for people without stable living or work situations,
              and/or who have limited or no family support in treatment. They
              also help people with very serious disorders who have been unable
              to get and stay sober or drug free in other treatment.
            </p>
            <h3>Psychiatric Emergency Walk-in Services</h3>
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
            <h3>Telemedicine (including internet and mobile options)</h3>
            <p>
              <em>
                Care given over the phone or online to support treatment and
                recovery
              </em>
            </p>
            <p>
              Telemedicine can be a tremendous help to people who are unable to
              regularly get to a treatment facility. While it’s not the first
              step in treatment, telemedicine can be a key part of a treatment
              plan, especially for patients living far away from a facility.
            </p>
            <h3>Co-occurring mental health and substance use treatment</h3>
            <p>
              <em>
                Integrated care that addresses substance use and mental illness
              </em>
            </p>
            <p>
              Having both a substance use and mental health disorder is called a{' '}
              <strong>co-occuring disorder</strong>. About half of people who
              experience one will also experience the other. Addressing both is
              critical for success in recovery, and integrated treatment
              programs can help.
            </p>
            <p>
              Integrated care brings together different areas of expertise to
              treat the whole person, and ensure that treatment for one factor
              doesn’t interfere with treatment of others.
            </p>
            <h3>Mental health services</h3>
            <p>
              <em>Treatment specifically for mental illness</em>
            </p>
            <p>
              Mental illness can be hard to pinpoint, but getting a diagnosis
              and treatment can help return to stability. Mental health care
              facilities offer a range of behavioral health and therapy
              practices, but all of them can help you determine what would be
              the right fit for your situation.
            </p>
            <p>
              These facilities might not have care for substance use disorders
              or addiction. Be sure to ask when you call if you need this kind
              of care.
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
              Methadone{' '}
              <span css={tw`italic font-light lowercase`}>(METH-ah-dohn)</span>
            </h3>
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
              Buprenorphine
              <span css={tw`italic font-light lowercase`}>
                {' '}
                (byoo-preh-NOR-feen)
              </span>
            </h3>
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
              Buprenorphine is widely available in a formula that contains added
              naloxone (commonly known as Narcan), which discourages abusing or
              injecting it.
            </p>
            <h3>
              Naltrexone{' '}
              <span css={tw`italic font-light lowercase`}>(nal-TREX-ohn)</span>
            </h3>
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
              stop opioid use for 7-10 days prior to beginning treatment. It is
              a good option for those who are eager to eliminate all opioids.
              The injectable form is helpful for people who have a hard time
              keeping up with daily pills.
            </p>
            <p>
              Since it is approved for treating alcohol problems as well, people
              taking naltrexone may find it also helps them avoid drinking.
            </p>
          </>
        )
      }
    ]
  },
  {
    name: 'Paying for treatment',
    id: 'paying-for-treatment',
    icon: <IconPayment css={tw`w-24 h-24`} />,
    description: 'Learn more about the cost of treatment and payment options.',
    subTopics: [
      {
        name: 'Understanding the cost of treatment',
        body: (
          <>
            <p>
              Understanding the costs of and how to pay for treatment can be
              hard and confusing. Unfortunately, resources aren’t always well
              organized or easy to find. The best way to make sure you choose
              care you can afford is by asking questions, taking notes, and
              making sure you know what kind of support you’re eligible for.
            </p>
            <p>
              Don’t let money stop you from finding treatment. There are free
              and low-cost facilities across the country, and many others accept
              Medicaid or private insurance. Your state also has funding set
              aside to help people without insurance afford treatment.
            </p>
            <h3>Does insurance cover substance use treatment?</h3>
            <p>
              The Mental Health Parity and Addiction Equity Act (MHPAEA) of 2008
              requires health insurers and group health plans to provide the{' '}
              <strong>same level of benefits</strong> for mental and/or
              substance use treatment and services that they do for medical and
              surgical care. That means your insurance company can’t tell you
              “we don’t do substance abuse treatment” or “mental health isn’t
              covered” — if they do, they’re breaking the law.
            </p>
            <p>
              If you’ve been denied coverage for treatment, this{' '}
              <a href="https://www.hhs.gov/mental-health-and-addiction-insurance-help">
                Mental Health and Addiction Insurance Help
              </a>{' '}
              tool can help you find the right resources to solve issues with
              your insurance.
            </p>
          </>
        )
      },
      {
        name: 'If you have insurance',
        body: (
          <>
            <p>
              Call the number on the back of your card or on your insurer’s
              website and ask about coverage for substance abuse.
            </p>
            <p>
              You’ll likely have a <strong>deductible</strong> — a specific
              amount of money you’ll need to pay out-of-pocket before your
              benefits start covering costs. Find out how much that deductible
              is and how much you’ve already paid towards it for the year. Any
              medical expense, not just treatment, can count towards that total.
            </p>
            <p>
              Then, ask your insurer for{' '}
              <strong>a list of preferred facilities or providers</strong> in
              your area. Choosing from this list will help prevent unexpected
              costs down the line, because your insurance will be more willing
              to cover the services you receive.
            </p>
            <p>
              Just as with other kinds of medical care, you may have a{' '}
              <strong>co-pay</strong> — a small amount of money you need to pay
              upfront to the providers or facilities you visit. Find out how
              much that is, as well as how many appointments or days of
              treatment are covered per year.
            </p>
            <p>
              You can also ask your insurer if they have{' '}
              <strong>case managers</strong>. A case manager is a registered
              nurse, social worker, or other licensed healthcare provider who
              can work with you directly. Their services are usually covered by
              the cost you’re already paying to your insurance. They’ll help you
              evaluate your options and choose what makes the most medical and
              financial sense.
            </p>
            <p>
              It can take multiple calls to figure this information out, and
              these can be difficult conversations to have. If you have a
              trusted family member or friend who can help, there is a way your
              insurer can authorize them to make decisions on your behalf. Ask
              your insurer for more details about how to set this up.
            </p>
          </>
        )
      },
      {
        name: 'If you don’t have insurance',
        body: (
          <>
            <p>
              Some facilities offer free or low-cost care, sliding scale fees
              based on your income, or have payment assistance available.
            </p>
            <p>
              You’ll need an <strong>estimate of your annual income</strong> and
              a correct count of your family members to determine if you’re
              eligible for some services. You don’t have to know exactly how
              much you make — get as close as you can, and don’t worry if it’s
              not perfect. (For a list of what counts as income, visit{' '}
              <a href="https://www.healthcare.gov/income-and-household-information/income/">
                this page on healthcare.gov.
              </a>
            </p>
            <p>
              Additionally, every state has funding to provide treatment for
              people without insurance. Contact your{' '}
              <a href="https://findtreatment.samhsa.gov/locator/stateagencies#.XUCje5NKju0">
                <strong>state agency</strong>
              </a>{' '}
              for information on how the process works in your state.
            </p>
            <p>
              You may also be able to purchase insurance now and take advantage
              of those benefits as soon as you can (usually two weeks to one
              month after you sign up). You’ll be able to enroll in a new plan
              if you:
            </p>
            <ul>
              <li>
                Do it during an <strong> open enrollment period</strong>. For a
                limited period of time each year, federal- and state-run
                insurance exchanges allow anyone to sign up for or change their
                plans. In most states, enrollment for 2020 will be{' '}
                <strong>November 1 - December 15, 2019</strong>.
              </li>
              <li>
                Have a <strong>qualifying life event</strong>. For 60 days after
                a major change in your life — like having a baby, getting
                married or divorced, or getting U.S. citizenship — you’re
                eligible to sign up for new insurance.
                <a href="https://www.healthcare.gov/coverage-outside-open-enrollment/special-enrollment-period/">
                  {' '}
                  Learn more about qualifying events.
                </a>
              </li>
              <li>
                Are <strong>eligible for Medicaid</strong>. In most states, if
                you make less than $17,236 as an individual or $29,435 in a
                family of three, you’re eligible for free or low-cost health
                coverage. You can apply for Medicaid at any time —{' '}
                <strong>there’s no enrollment period</strong> — so contact your
                state agency for more details if you think you might be
                eligible.
              </li>
            </ul>
            <p>
              Some individual treatment facilities offer{' '}
              <strong>grants or scholarships</strong> to help offset the cost of
              attending. Not all of these will cover your whole stay, though,
              and many will revoke funding if you don’t complete their program —
              leaving you financially responsible for the time you spent there.
              Before accepting any grants or scholarships, make sure you ask
              questions about what (if any) strings are attached to that money.
            </p>
          </>
        )
      }
    ]
  }
];
