import ReactDOM from 'react-dom';
import { InfoWindow } from 'google-maps-react';

// Fix for https://github.com/fullstackreact/google-maps-react/issues/70

class InfoWindowEx extends InfoWindow {
  renderInfoWindow() {
    InfoWindow.prototype.renderInfoWindow.call(this);
    this.elem = document.createElement('div');
  }
  renderChildren() {
    return this.elem;
  }
  render() {
    const { children } = this.props;
    return this.elem ? ReactDOM.createPortal(children, this.elem) : null;
  }
}

export default InfoWindowEx;
