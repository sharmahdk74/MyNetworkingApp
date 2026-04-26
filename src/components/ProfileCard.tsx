import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import type { NetworkingProfile } from '../types/networking';
import { styles } from './ProfileCard.styles';
import { ProfileCardAction } from './profileCard/ProfileCardAction';
import { ProfileCardHeader } from './profileCard/ProfileCardHeader';
import { ProfileCardTags } from './profileCard/ProfileCardTags';

type ProfileCardProps = {
  profile: NetworkingProfile;
  index: number;
  isConnected: boolean;
  onPress: (profile: NetworkingProfile) => void;
  onConnectPress: (profile: NetworkingProfile) => void;
};

function ProfileCardComponent({
  profile,
  index,
  isConnected,
  onPress,
  onConnectPress,
}: ProfileCardProps) {
  return (
    <Animated.View entering={FadeInDown.delay(index * 55).duration(420)}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Open profile for ${profile.name}`}
        onPress={() => onPress(profile)}
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
        <ProfileCardHeader profile={profile} />

        <Text style={styles.bio} numberOfLines={2}>
          {profile.bio}
        </Text>

        <ProfileCardTags tags={profile.tags} />

        <ProfileCardAction
          profile={profile}
          isConnected={isConnected}
          onPress={onConnectPress}
        />
      </Pressable>
    </Animated.View>
  );
}

export const ProfileCard = memo(ProfileCardComponent);
