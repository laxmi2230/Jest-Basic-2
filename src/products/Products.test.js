import render from 'dom-serializer';
import React from 'react';
import renderer from 'react-test-renderer';

import Products from './Products';

it("renders when there are no items", () => {
    const tree = renderer.create(<Products />).toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders when there is one item", () => {
    const tree = renderer.create(<Products items={["Mango"]} />).toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders when there are multiple items", () => {
    const tree = renderer.create(<Products items={['Earth', 'mango', 'Moon', 'Saturn']} />).toJSON();
    expect(tree).toMatchSnapshot();
})