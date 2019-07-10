import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faExternalLinkAlt,
  faFlag,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import MapContainer from './MapContainer';
import Button from './Form/Button';

class Details extends Component {
  render() {
    const {
      name1,
      name2,
      street1,
      street2,
      city,
      state,
      zip,
      services,
      phone,
      website
    } = this.props.location.state;
    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full md:w-3/5 px-6 mb-6`}>
            <h1 css={tw`font-bold mb-6`}>
              {name1}
              {name2 && <span css={tw`block text-lg font-light`}>{name2}</span>}
            </h1>
            <div css={tw`border-l-4 border-blue-500 py-2 px-4 mb-6`}>
              <h2 css={tw`mb-2 font-semibold`}>Next steps:</h2>
              <div css={tw`lg:flex items-start`}>
                <div>
                  <Button primary>
                    <FontAwesomeIcon
                      icon={faPhone}
                      css={tw`fill-current w-4 h-4 mr-2`}
                    />
                    <a
                      href={`tel:${phone}`}
                      css={tw`text-white hover:text-white`}
                    >
                      <span css={tw`font-light`}>Schedule Appointment | </span>
                      {phone}
                    </a>
                  </Button>
                </div>
                {website !== 'http://' && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    css={tw`w-full lg:w-auto block hover:text-gray-900 text-gray-900 bg-gray-300 hover:bg-gray-400 font-semibold py-3 px-4 rounded ml-2`}
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      css={tw`text-gray-700 mr-2`}
                    />
                    Visit website
                  </a>
                )}
              </div>
            </div>
            <h2 css={tw`mb-2 font-semibold`}>Services</h2>
            {services.map(service => (
              <div css={tw`mb-4 pb-4 border-b`} key={service.f2}>
                <h3 css={tw`font-semibold text-sm`}>{service.f1}</h3>
                <ul
                  css={tw`text-sm leading-relaxed text-gray-700 list-disc list-inside`}
                >
                  {service.f3.split('; ').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div css={tw`relative w-full md:w-2/5 px-6 mb-6 `}>
            <div css={tw`border-b pb-6 mb-6`}>
              <h2 css={tw`mb-4`}>Location</h2>
              <div css={tw`relative h-64 w-full mb-2`}>
                <MapContainer
                  rows={[this.props.location.state]}
                  singleMarker={true}
                />
              </div>
              <div css={tw`text-gray-600`}>
                {street1}, {street2 && street2 + ','}
                <br />
                {city}, {state} {zip}
                <br />
                <a
                  css={tw`font-bold`}
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                    `${street1}, ${street2 &&
                      street2 + ','} ${city}, ${state} ${zip}`
                  )}`}
                >
                  Get driving directions
                </a>
              </div>
            </div>
            <Button secondary css={tw`w-full mb-3`}>
              <FontAwesomeIcon icon={faPrint} css={tw`mr-2`} />
              Print provider details
            </Button>
            <Button secondary>
              <FontAwesomeIcon icon={faFlag} css={tw`text-orange-600 mr-2`} />
              Report a problem with this listing
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
