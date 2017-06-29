import React from 'react';
import renderer from 'react-test-renderer';
import Fire from '../../../../src/routes/fire/components/Fire';

test('Fire', () => {
  let fire = 0;
  const component = renderer.create(
    <Fire
      fire={fire}
      incrementFire={() => { fire += 1; }}
      decreaseFire={() => { fire -= 1; }}
      fetchFire={() => '🔥'}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
