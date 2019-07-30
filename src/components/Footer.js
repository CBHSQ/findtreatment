import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import { ReactComponent as LogoSAMHSA } from '../images/logo-samhsa.svg';
import { ReactComponent as LogoHHS } from '../images/logo-hhs.svg';

const StyledFooter = styled.div`
  ${tw`bg-gray-800 text-gray-200 text-xs print:hidden`}

  a {
    ${tw`text-white hover:text-white`}
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container" css={tw`py-6 lg:p-12`}>
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:flex-1 px-6 mb-6 lg:mb-0`}>
            <div css={tw`flex items-center mb-6 text-white`}>
              <OutboundLink
                to="https://www.samhsa.gov/"
                eventLabel="SAMHSA link from footer"
              >
                <LogoSAMHSA css={tw`fill-current mr-4`} />
              </OutboundLink>
              <OutboundLink
                to="https://www.hhs.gov/"
                eventLabel="HHS link from footer"
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
            <h4 css={tw`font-bold mb-1`}>Other types of treatment</h4>
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
            <h4 css={tw`font-bold mb-1`}>Providers</h4>
            <ul>
              <li>
                <OutboundLink
                  to="https://findtreatment.samhsa.gov/locator/link-AppIns#.XSywJNNKiuo"
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
            <h3 css={tw`mb-2`}>Contact SAMHSA</h3>
            <p css={tw`mb-4`}>
              5600 Fishers Ln
              <br />
              Rockville, MD 20857
              <br />
              1-877-SAMHSA-7
              <br />
              (1-877-726-4727)
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
