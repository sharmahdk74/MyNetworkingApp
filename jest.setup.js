/* eslint-env jest */

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const { FlatList, View } = require('react-native');
  const enteringAnimation = {
    delay: () => enteringAnimation,
    duration: () => enteringAnimation,
  };
  const animated = {
    FlatList,
    View,
    createAnimatedComponent: Component => Component,
  };

  return {
    __esModule: true,
    default: animated,
    FlatList,
    View,
    createAnimatedComponent: Component => Component,
    FadeInDown: enteringAnimation,
    interpolate: value => value,
    useAnimatedScrollHandler: handler => handler,
    useSharedValue: value => ({ value }),
    useAnimatedStyle: callback => callback(),
    withTiming: value => value,
  };
});

jest.mock('react-native/src/private/animated/NativeAnimatedHelper');

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    __esModule: true,
    SafeAreaProvider: ({ children }) =>
      React.createElement(React.Fragment, null, children),
    SafeAreaView: ({ children, ...props }) =>
      React.createElement(View, props, children),
    useSafeAreaInsets: () => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }),
  };
});

jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');

  const BottomSheetModal = React.forwardRef(function BottomSheetModalMock(
    props,
    _ref,
  ) {
    return React.createElement(View, null, props.children);
  });

  return {
    __esModule: true,
    BottomSheetModal,
    BottomSheetModalProvider: ({ children }) =>
      React.createElement(View, null, children),
    BottomSheetBackdrop: () => null,
  };
});
