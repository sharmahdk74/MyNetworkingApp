/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { NetworkingFeedScreen } from '../src/screens/NetworkingFeedScreen';

jest.useFakeTimers();

jest.mock('../src/components/ProfileBottomSheet', () => {
  const React = require('react');
  const { View } = require('react-native');

  let latestProps = null;

  function ProfileBottomSheetMock(props) {
    latestProps = props;

    return React.createElement(View, { testID: 'profile-bottom-sheet' });
  }

  return {
    __esModule: true,
    ProfileBottomSheet: ProfileBottomSheetMock,
    __mock: {
      getLatestProps: () => latestProps,
      reset: () => {
        latestProps = null;
      },
    },
  };
});

const {
  __mock: bottomSheetMock,
} = jest.requireMock('../src/components/ProfileBottomSheet') as {
  __mock: {
    getLatestProps: () => {
      initialSnapIndex: number;
      profile: { name: string } | null;
      onDismiss: () => void;
    } | null;
    reset: () => void;
  };
};

describe('NetworkingFeedScreen', () => {
  beforeEach(() => {
    bottomSheetMock.reset();
  });

  test('opens the profile sheet in preview mode from the card body', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer;

    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<NetworkingFeedScreen />);
    });

    await ReactTestRenderer.act(() => {
      jest.advanceTimersByTime(300);
    });

    const cardButton = renderer!.root.findByProps({
      accessibilityLabel: 'Open profile for Aarav Mehta',
    }) as ReactTestRenderer.ReactTestInstance;

    await ReactTestRenderer.act(() => {
      cardButton.props.onPress();
    });

    expect(bottomSheetMock.getLatestProps()).toMatchObject({
      initialSnapIndex: 0,
      profile: { name: 'Aarav Mehta' },
    });
  });

  test('opens the profile sheet in connect mode from the connect CTA', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer;

    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<NetworkingFeedScreen />);
    });

    await ReactTestRenderer.act(() => {
      jest.advanceTimersByTime(300);
    });

    const connectButton = renderer!.root.findByProps({
      accessibilityLabel: 'Connect with Aarav Mehta',
    }) as ReactTestRenderer.ReactTestInstance;

    await ReactTestRenderer.act(() => {
      connectButton.props.onPress({ stopPropagation: jest.fn() });
    });

    expect(bottomSheetMock.getLatestProps()).toMatchObject({
      initialSnapIndex: 1,
      profile: { name: 'Aarav Mehta' },
    });
  });

  test('clears the selected profile when the sheet dismisses', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer;

    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<NetworkingFeedScreen />);
    });

    await ReactTestRenderer.act(() => {
      jest.advanceTimersByTime(300);
    });

    const cardButton = renderer!.root.findByProps({
      accessibilityLabel: 'Open profile for Aarav Mehta',
    }) as ReactTestRenderer.ReactTestInstance;

    await ReactTestRenderer.act(() => {
      cardButton.props.onPress();
    });

    const latestProps = bottomSheetMock.getLatestProps();

    expect(latestProps).not.toBeNull();

    await ReactTestRenderer.act(() => {
      latestProps!.onDismiss();
    });

    expect(bottomSheetMock.getLatestProps()).toMatchObject({
      profile: null,
    });
  });
});
