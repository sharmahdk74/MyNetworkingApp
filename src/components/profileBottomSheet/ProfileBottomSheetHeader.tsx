import React from 'react';
import { Pressable, View } from 'react-native';

import { styles } from '../ProfileBottomSheet.styles';

type ProfileBottomSheetHeaderProps = {
  onDismiss: () => void;
};

export function ProfileBottomSheetHeader({
  onDismiss,
}: ProfileBottomSheetHeaderProps) {
  return (
    <View style={styles.topBar}>
      <View style={styles.handleIndicator} />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close profile details"
        hitSlop={10}
        onPress={onDismiss}
        style={({ pressed }) => [
          styles.closeButton,
          pressed && styles.buttonPressed,
        ]}>
        <View style={[styles.closeIconLine, styles.closeIconLineLeft]} />
        <View style={[styles.closeIconLine, styles.closeIconLineRight]} />
      </Pressable>
    </View>
  );
}
