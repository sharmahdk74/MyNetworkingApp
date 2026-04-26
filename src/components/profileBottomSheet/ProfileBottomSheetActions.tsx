import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from '../ProfileBottomSheet.styles';

type ProfileBottomSheetActionsProps = {
  isConnected: boolean;
  onConnect: () => void;
  onMessage: () => void;
};

export function ProfileBottomSheetActions({
  isConnected,
  onConnect,
  onMessage,
}: ProfileBottomSheetActionsProps) {
  return (
    <View style={styles.actions}>
      <Pressable
        accessibilityRole="button"
        onPress={onConnect}
        style={({ pressed }) => [
          styles.primaryButton,
          isConnected && styles.primaryButtonConnected,
          pressed && styles.buttonPressed,
        ]}>
        <Text
          style={[
            styles.primaryButtonLabel,
            isConnected && styles.primaryButtonLabelConnected,
          ]}>
          {isConnected ? 'Pending' : 'Connect'}
        </Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        onPress={onMessage}
        style={({ pressed }) => [
          styles.secondaryButton,
          pressed && styles.buttonPressed,
        ]}>
        <Text style={styles.secondaryButtonLabel}>Send Message</Text>
      </Pressable>
    </View>
  );
}
