/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { ProfileCard } from '../src/components/ProfileCard';
import type { NetworkingProfile } from '../src/types/networking';

const profile: NetworkingProfile = {
  id: '1',
  name: 'Aarav Mehta',
  designation: 'AI Product Lead at Nova Systems',
  bio: 'Building practical AI workflows for enterprise teams.',
  about: 'Leads applied AI initiatives and mentors early-stage builders.',
  tags: ['AI', 'Product', 'Mentor'],
  location: 'Bengaluru, India',
  mutualConnections: 18,
  avatarUrl: 'https://i.pravatar.cc/300?img=12',
};

test('connect button routes through the profile sheet flow', async () => {
  const onPress = jest.fn();
  const onConnectPress = jest.fn();
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(
      <ProfileCard
        profile={profile}
        index={0}
        isConnected={false}
        onPress={onPress}
        onConnectPress={onConnectPress}
      />,
    );
  });

  const connectButton = renderer!.root.findByProps({
    accessibilityLabel: 'Connect with Aarav Mehta',
  }) as ReactTestRenderer.ReactTestInstance;

  const stopPropagation = jest.fn();

  await ReactTestRenderer.act(() => {
    connectButton.props.onPress({ stopPropagation });
  });

  expect(stopPropagation).toHaveBeenCalledTimes(1);
  expect(onConnectPress).toHaveBeenCalledWith(profile);
  expect(onPress).not.toHaveBeenCalled();
});
