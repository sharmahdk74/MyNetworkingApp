import React from 'react';

import { ProfileBottomSheet } from '../../components/ProfileBottomSheet';
import type { NetworkingProfile } from '../../types/networking';

type NetworkingFeedProfileSheetProps = {
  profile: NetworkingProfile | null;
  pendingConnections: Record<string, boolean>;
  initialSnapIndex: 0 | 1;
  onConnect: (profileId: string) => void;
  onDismiss: () => void;
};

export function NetworkingFeedProfileSheet({
  profile,
  pendingConnections,
  initialSnapIndex,
  onConnect,
  onDismiss,
}: NetworkingFeedProfileSheetProps) {
  return (
    <ProfileBottomSheet
      profile={profile}
      isConnected={profile ? Boolean(pendingConnections[profile.id]) : false}
      initialSnapIndex={initialSnapIndex}
      onConnect={onConnect}
      onDismiss={onDismiss}
    />
  );
}
