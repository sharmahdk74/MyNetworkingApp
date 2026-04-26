import React from 'react';
import { Text } from 'react-native';
import Animated, { type AnimatedStyle } from 'react-native-reanimated';

import {
  COLLAPSED_HEADER_HEIGHT,
  styles,
} from '../NetworkingFeedScreen.styles';

type CollapsedHeaderProps = {
  insetTop: number;
  animatedStyle: AnimatedStyle<object>;
};

export function CollapsedHeader({
  insetTop,
  animatedStyle,
}: CollapsedHeaderProps) {
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.collapsedHeader,
        { paddingTop: insetTop, height: insetTop + COLLAPSED_HEADER_HEIGHT },
        animatedStyle,
      ]}>
      <Text style={styles.collapsedTitle}>Networking Feed</Text>
    </Animated.View>
  );
}
