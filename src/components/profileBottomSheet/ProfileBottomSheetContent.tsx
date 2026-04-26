import React from 'react';
import { Alert, Text, View } from 'react-native';

import type { NetworkingProfile } from '../../types/networking';
import { ProfileAvatar } from '../ProfileAvatar';
import { ProfileBottomSheetActions } from './ProfileBottomSheetActions';
import { styles } from '../ProfileBottomSheet.styles';
import { TagPill } from '../TagPill';

type ProfileBottomSheetContentProps = {
  profile: NetworkingProfile;
  isConnected: boolean;
  onConnect: (profileId: string) => void;
};

export function ProfileBottomSheetContent({
  profile,
  isConnected,
  onConnect,
}: ProfileBottomSheetContentProps) {
  return (
    <>
      <View style={styles.profileHeader}>
        <ProfileAvatar
          name={profile.name}
          avatarUrl={profile.avatarUrl}
          size={84}
        />
        <View style={styles.profileText}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.designation}>{profile.designation}</Text>
          <Text style={styles.meta}>
            {profile.location} | {profile.mutualConnections} mutual connections
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.body}>{profile.about}</Text>

      <Text style={styles.sectionTitle}>Highlights</Text>
      <Text style={styles.body}>{profile.bio}</Text>

      <View style={styles.tags}>
        {profile.tags.map(tag => (
          <TagPill key={tag} label={tag} />
        ))}
      </View>

      <ProfileBottomSheetActions
        isConnected={isConnected}
        onConnect={() => onConnect(profile.id)}
        onMessage={() =>
          Alert.alert(
            'Message preview',
            `A real composer is out of scope here. You can still use this CTA in the demo for ${profile.name}.`,
          )
        }
      />
    </>
  );
}
