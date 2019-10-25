import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import OutboundLink from './OutboundLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as LogoSAMHSA } from '../images/logo-samhsa.svg';
import { ReactComponent as LogoHHS } from '../images/logo-hhs.svg';

const StyledFooter = styled.div`
  a {
    ${tw`text-gray-lighter hover:text-gray-lighter`}
  }
`;

const Footer = () => {
  return (
    <footer css={tw`print:hidden`} role="contentinfo">
      <StyledFooter css={tw`bg-gray-darker text-gray-lighter text-xs`}>
        <div className="container" css={tw`py-6 lg:p-12`}>
          <div css={tw`flex flex-wrap justify-between -mx-4`}>
            <div css={tw`w-full lg:w-1/2 px-4 mb-6 lg:mb-0`}>
              <div
                css={tw`flex flex-wrap lg:flex-no-wrap items-center text-white`}
              >
                <OutboundLink
                  to="https://www.samhsa.gov/"
                  eventLabel="SAMHSA link from footer"
                  aria-label="Link to the SAMHSA homepage"
                >
                  <LogoSAMHSA css={tw`fill-current mr-4 w-32`} />
                </OutboundLink>
                <OutboundLink
                  to="https://www.hhs.gov/"
                  eventLabel="HHS link from footer"
                  aria-label="Link to the HHS homepage"
                >
                  <LogoHHS css={tw`fill-current w-16`} />
                </OutboundLink>
                <p css={tw`mt-4 lg:mt-0 lg:ml-4 leading-relaxed`}>
                  SAMHSA's mission is to reduce the impact of substance abuse
                  and mental illness on America's communities.
                </p>
              </div>
            </div>
            <div css={tw`w-full lg:w-auto px-4 mb-6 lg:mb-0`}>
              <p css={tw`font-bold mb-1`}>Other treatment resources</p>
              <ul css={tw`mb-6`}>
                <li>
                  <OutboundLink
                    to="https://findtreatment.samhsa.gov"
                    eventLabel="Link back to findtreatment.samhsa.gov from footer"
                  >
                    Behavioral Health Treatment Services Locator
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://www.samhsa.gov/medication-assisted-treatment/practitioner-program-data/treatment-practitioner-locator"
                    eventLabel="Buprenorphine practitioners link from footer"
                  >
                    Buprenorphine practitioners
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://dpt2.samhsa.gov/treatment/directory.aspx"
                    eventLabel="Opioid treatment programs link from footer"
                  >
                    Opioid treatment programs
                  </OutboundLink>
                </li>
              </ul>
              <p css={tw`font-bold mb-1`}>Provider resources</p>
              <ul>
                <li>
                  <OutboundLink
                    to="https://findtreatment.samhsa.gov/locator/link-App"
                    eventLabel="List your facility link from footer"
                  >
                    List your facility
                  </OutboundLink>
                </li>
              </ul>
            </div>
            <div css={tw`w-full lg:w-auto px-4 mb-6 lg:mb-0`}>
              <ul css={tw`mb-2`}>
                <li>
                  <OutboundLink
                    to="https://forms.gle/8Zf4sCUcgn8Cmoqb6"
                    eventLabel="Submit feedback link from footer"
                  >
                    Submit feedback
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://www.samhsa.gov/about-us"
                    eventLabel="About SAMHSA link from footer"
                  >
                    About us
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://www.samhsa.gov/about-us/contact-us"
                    eventLabel="Contact us/SAMHSA link from footer"
                  >
                    Contact us
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://www.samhsa.gov/privacy"
                    eventLabel="Privacy policy link from footer"
                  >
                    Privacy policy
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://www.usa.gov/"
                    eventLabel="USA.gov link from footer"
                  >
                    USA.gov
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://www.samhsa.gov/foia"
                    eventLabel="FOIA link from footer"
                  >
                    FOIA
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    to="https://www.samhsa.gov/accessibility"
                    eventLabel="Accessibility link from footer"
                  >
                    Accessibility
                  </OutboundLink>
                </li>
              </ul>
              <ul>
                <li>
                  <OutboundLink
                    to="https://github.com/18F/samhsa-prototype"
                    eventLabel="View code on Github"
                    css={tw`flex items-center`}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      css={tw`text-white fill-current w-4 h-4 mr-1`}
                    />
                    Github
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </StyledFooter>
      <div css={tw`bg-gold`}>
        <div className="container" css={tw`py-2 text-center font-bold`}>
          <p css={tw`lg:hidden mb-4`}>
            For help finding treatment, call{' '}
            <OutboundLink
              eventLabel="Helpline link from mobile footer"
              to="tel:1-800-663-4357"
              css={tw`underline whitespace-no-wrap`}
            >
              1-800-662-HELP (4357)
            </OutboundLink>
            .
          </p>
          <p>
            If you are feeling suicidal or in emotional distress, call the{' '}
            <OutboundLink
              to="https://suicidepreventionlifeline.org"
              eventLabel="Suicide prevention link from footer"
              css={tw`underline`}
            >
              Suicide Prevention Lifeline
            </OutboundLink>{' '}
            at{' '}
            <OutboundLink
              eventLabel="Suicide prevention hotline link from footer"
              to="tel:1-800-273-8255"
              css={tw`underline whitespace-no-wrap`}
            >
              1-800-273-8255
            </OutboundLink>{' '}
            | In emergencies, dial 911.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
