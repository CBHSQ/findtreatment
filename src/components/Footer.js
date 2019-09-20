import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
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
          <div css={tw`flex flex-wrap -mx-6`}>
            <div css={tw`w-full lg:flex-1 px-6 mb-6 lg:mb-0`}>
              <div css={tw`flex items-center mb-6 text-white`}>
                <OutboundLink
                  to="https://www.samhsa.gov/"
                  eventLabel="SAMHSA link from footer"
                  aria-label="Link to the SAMHSA homepage"
                >
                  <LogoSAMHSA css={tw`fill-current mr-4`} />
                </OutboundLink>
                <OutboundLink
                  to="https://www.hhs.gov/"
                  eventLabel="HHS link from footer"
                  aria-label="Link to the HHS homepage"
                >
                  <LogoHHS css={tw`fill-current`} />
                </OutboundLink>
              </div>
              <p css={tw`leading-relaxed`}>
                SAMHSA's mission is to reduce the impact of substance abuse and
                mental illness on America's communities.
              </p>
            </div>
            <div css={tw`w-full lg:flex-1 px-6 mb-6 lg:mb-0`}>
              <p css={tw`font-bold mb-1`}>Other resources</p>
              <ul css={tw`mb-6`}>
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
              <p css={tw`font-bold mb-1`}>Providers</p>
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
            <div css={tw`w-full lg:flex-1 px-6 mb-6 lg:mb-0`}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
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
                <li>
                  <OutboundLink
                    to="https://forms.gle/8Zf4sCUcgn8Cmoqb6"
                    eventLabel="Submit feedback link from footer"
                  >
                    Submit feedback
                  </OutboundLink>
                </li>
              </ul>
            </div>
            <div css={tw`w-full lg:flex-1 px-6`}>
              <p css={tw`font-bold mb-1`}>Contact SAMHSA</p>
              <p css={tw`mb-4`}>
                5600 Fishers Ln
                <br />
                Rockville, MD 20857
                <br />
                <a href="tel:1-877-726-4727">1-877-SAMHSA-7</a>
                <br />
                <a href="tel:1-877-726-4727">(1-877-726-4727)</a>
              </p>
            </div>
          </div>
        </div>
      </StyledFooter>
      <div css={tw`bg-gold`}>
        <div className="container" css={tw`py-2 text-center font-bold`}>
          If you are feeling suicidal or in emotional distress, call the{' '}
          <OutboundLink
            to="https://suicidepreventionlifeline.org"
            eventLabel="Suicide prevention link from footer"
            css={tw`underline`}
          >
            Suicide Prevention Lifeline
          </OutboundLink>{' '}
          at <a href="tel:1-800-273-8255">1-800-273-8255</a> | In emergencies,
          dial 911.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
