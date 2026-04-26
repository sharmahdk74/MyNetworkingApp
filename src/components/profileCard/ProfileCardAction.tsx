import React from 'react';
import { Pressable, Text } from 'react-native';

import type { NetworkingProfile } from '../../types/networking';
import { styles } from '../ProfileCard.styles';

type ProfileCardActionProps = {
  profile: NetworkingProfile;
  isConnected: boolean;
  onPress: (profile: NetworkingProfile) => void;
};

export function ProfileCardAction({
  profile,
  isConnected,
  onPress,
}: ProfileCardActionProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Connect with ${profile.name}`}
      onPress={event => {
        event.stopPropagation();
        onPress(profile);
      }}
      style={({ pressed }) => [
        styles.button,
        isConnected && styles.buttonConnected,
        pressed && styles.buttonPressed,
      ]}>
      <Text style={[styles.buttonLabel, isConnected && styles.buttonLabelConnected]}>
        {isConnected ? 'Pending' : 'Connect'}
      </Text>
    </Pressable>
  );
}
