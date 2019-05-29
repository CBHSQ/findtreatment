import React, { Component } from "react";
import "styled-components/macro";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import * as API from "../utils/api";
import MapContainer from "./MapContainer";

class Details extends Component {
  state = {
    provider: {
      services: []
    }
  };

  componentDidMount() {
    const id = this.props.match.params.providerId;

    API.getDetails(id).then(provider => {
      this.setState({
        provider: provider[0]
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full md:w-3/5 px-6 mb-6 `}>
            <h1 css={tw`font-bold mb-2`}>
              {this.state.provider.name1}
              {this.state.provider.name2 && (
                <span css={tw`block text-lg font-light`}>
                  {this.state.provider.name2}
                </span>
              )}
            </h1>
            <div css={tw`text-gray-600 mb-4`}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                css={tw`text-gray-400 mr-1`}
              />
              {this.state.provider.street1},{" "}
              {this.state.provider.street2
                ? this.state.provider.street2 + ", "
                : ""}
              {this.state.provider.city}, {this.state.provider.state}{" "}
              {this.state.provider.zip}
            </div>
            <h2 css={tw`mb-2`}>Services</h2>
            {this.state.provider.services.map(service => (
              <div css={tw`mb-3 pb-3 border-b`} key={service.f2}>
                <h4 css={tw`font-light uppercase`}>{service.f1}</h4>
                <ul css={tw`text-sm leading-relaxed text-gray-700`}>
                  {service.f3.split("; ").map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <h2 css={tw`mb-4`}>Location</h2>
            <div css={tw`relative h-64 w-full mb-6`}>
              <MapContainer />
            </div>
          </div>
          <div css={tw`relative w-full md:w-2/5 px-6 mb-6 `}>
            <button
              css={tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-4 rounded inline-flex items-center mb-6`}
            >
              <FontAwesomeIcon
                icon={faPhone}
                css={tw`fill-current w-4 h-4 mr-2`}
              />
              <a href={`tel:${this.state.provider.phone}`}>
                <span css={tw`font-light`}>Schedule Appointment | </span>
                {this.state.provider.phone}
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
