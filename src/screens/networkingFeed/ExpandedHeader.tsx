import React from 'react';
import { Text } from 'react-native';
import Animated, { type AnimatedStyle } from 'react-native-reanimated';

import { styles } from '../NetworkingFeedScreen.styles';

type ExpandedHeaderProps = {
  insetTop: number;
  animatedStyle: AnimatedStyle<object>;
};

export function ExpandedHeader({
  insetTop,
  animatedStyle,
}: ExpandedHeaderProps) {
  return (
    <Animated.View
      style={[styles.expandedHeader, { paddingTop: insetTop }, animatedStyle]}>
      <Text style={styles.expandedTitle}>Networking Feed</Text>
    </Animated.View>
  );
}
