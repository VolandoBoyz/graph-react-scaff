import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../src/components/Loading';

test('Loading renders as expected', () => {
  const component = renderer.create(
    <Loading />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
