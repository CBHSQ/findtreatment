import React from "react";
import { shallow } from "enzyme";
import Results from "./Results";
import Card from "./Card";
import NoResults from "./NoResults";

describe("Results component", () => {
  window.scrollTo = jest.fn();

  it("shows a provider card when there are results", () => {
    const props = {
      query: { location: "" },
      handleInputChange: jest.fn()
    };
    const component = shallow(<Results {...props} />);
    component.setState({
      locations: [
        {
          _irow: 1,
          frid:
            "811a908f82269778a2fe2a8bc603afa08df868f3e2fa56aa62e214d03997dea1",
          name1: "Region Ten Community Services Board",
          name2: "Mohr Center",
          street1: "1014 East Market Street",
          city: "Charlottesville",
          street2: "",
          state: "VA",
          zip: "22902",
          phone: "434-979-8871",
          typeFacility: "SA",
          intake1: "434-972-1800",
          hotline1: null,
          website: "http://www.regionten.org",
          latitude: "38.0282239",
          longitude: "-78.4725231",
          miles: 0.24,
          services: [
            { f1: "Type of Care", f2: "TC", f3: "Substance use treatment" }
          ]
        }
      ]
    });
    expect(component.find(NoResults).length).toBe(0);
    expect(component.find(Card).length).toBe(1);
  });

  it("shows no results message with empty array", () => {
    const props = {
      query: { location: "mars" },
      handleInputChange: jest.fn()
    };
    const component = shallow(<Results {...props} />);
    expect(component.find(NoResults).length).toBe(1);
    expect(component.find(Card).length).toBe(0);
  });
});
