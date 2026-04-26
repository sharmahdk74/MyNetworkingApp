import React from 'react';
import { Text, View } from 'react-native';

import type { NetworkingProfile } from '../../types/networking';
import { ProfileAvatar } from '../ProfileAvatar';
import { styles } from '../ProfileCard.styles';

type ProfileCardHeaderProps = {
  profile: NetworkingProfile;
};

export function ProfileCardHeader({ profile }: ProfileCardHeaderProps) {
  return (
    <View style={styles.header}>
      <ProfileAvatar
        name={profile.name}
        avatarUrl={profile.avatarUrl}
        size={58}
      />
      <View style={styles.headerText}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.designation}>{profile.designation}</Text>
        <Text style={styles.meta}>
          {profile.location} | {profile.mutualConnections} mutual connections
        </Text>
      </View>
    </View>
  );
}
