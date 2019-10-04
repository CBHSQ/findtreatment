import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer } from './MapContainer';

const defaultProps = {
  latitude: '79.7833853960037',
  longitude: '27.2689918940887',
  name1: 'facility1'
};

describe('MapContainer component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MapContainer {...defaultProps} />);
  });

  describe('initial state', () => {
    it('does not render an InfoWindow without user input', () => {
      const infoWindow = component.find('InfoWindow');

      expect(infoWindow.prop('visible')).toBe(false);
    });
  });

  describe('event handlers', () => {
    describe('Marker component', () => {
      it('displays an info window on click', () => {
        const firstMarker = component.find('Marker').first();

        firstMarker.simulate('click', firstMarker.props(), {}, {});

        const infoWindow = component.find('InfoWindow');

        expect(infoWindow.prop('visible')).toBe(true);
        expect(infoWindow.find('.infowindow__heading').text()).toBe(
          firstMarker.prop('name')
        );
      });
    });

    describe('Map component', () => {
      it('clears the active info window on click', () => {
        const firstMarker = component.find('Marker').first();

        firstMarker.simulate('click', firstMarker.props(), {}, {});

        const infoWindow = component.find('InfoWindow');

        expect(infoWindow.prop('visible')).toBe(true);

        component.find('.map-wrapper').simulate('click');

        expect(component.find('InfoWindow').prop('visible')).toBe(false);
      });
    });
  });
});
