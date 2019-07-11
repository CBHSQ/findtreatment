import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer } from './MapContainer';

const locations = [
  {
    latitude: '79.7833853960037',
    longitude: '27.2689918940887',
    name1: 'facility1',
    frid: 'abcd1'
  },
  {
    latitude: '27.6489242445678',
    longitude: '-9.4354017404834',
    name1: 'facility2',
    frid: 'abcd2'
  },
  {
    latitude: '-51.9591500423849',
    longitude: '19.2025181371719',
    name1: 'facility3',
    frid: 'abcd3'
  },
  {
    latitude: '83.5859301500022',
    longitude: '31.8948447704315',
    name1: 'facility4',
    frid: 'abcd4'
  },
  {
    latitude: '-56.1149036698043',
    longitude: '42.5037826504558',
    name1: 'facility5',
    frid: 'abcd5'
  }
];
const defaultProps = {
  rows: locations
};

describe('MapContainer component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MapContainer {...defaultProps} />);
  });

  describe('initial state', () => {
    it('does not render an InfoWindow without user input', () => {
      const infoWindow = component.find('DOMInfoWindow');

      expect(infoWindow.prop('visible')).toBe(false);
    });

    it('renders a marker for each row recieved as a prop', () => {
      const markers = component.find('Marker');

      expect(markers.length).toBe(locations.length);
    });
  });

  describe('event handlers', () => {
    describe('Marker component', () => {
      it('displays an info window on click', () => {
        const firstMarker = component.find('Marker').first();

        firstMarker.simulate('click', firstMarker.props(), {}, {});

        const DOMInfoWindow = component.find('DOMInfoWindow');
        const InfoWindowText = component.find('InfoWindowText').dive();

        expect(DOMInfoWindow.prop('visible')).toBe(true);
        expect(InfoWindowText.find('.infowindow__heading').text()).toBe(
          firstMarker.prop('name')
        );
      });
    });

    describe('Map component', () => {
      it('clears the active info window on click', () => {
        const firstMarker = component.find('Marker').first();

        firstMarker.simulate('click', firstMarker.props(), {}, {});

        const infoWindow = component.find('DOMInfoWindow');

        expect(infoWindow.prop('visible')).toBe(true);

        component.find('Map').simulate('click');

        expect(component.find('DOMInfoWindow').prop('visible')).toBe(false);
      });

      it('adjusts the bounds when dragged', () => {
        const map = component.find('Map');
        const googleMap = new window.google.maps.Map();

        map.prop('onReady')({}, googleMap);

        expect(googleMap.fitBoundsCalls).toBe(1);
      });
    });
  });
});
