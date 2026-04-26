import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './NetworkingFeedScreen.styles';
import { CollapsedHeader } from './networkingFeed/CollapsedHeader';
import { NetworkingFeedList } from './networkingFeed/NetworkingFeedList';
import { NetworkingFeedProfileSheet } from './networkingFeed/NetworkingFeedProfileSheet';
import { useNetworkingFeedScreen } from './networkingFeed/hooks/useNetworkingFeedScreen';

export function NetworkingFeedScreen() {
  const insets = useSafeAreaInsets();
  const {
    collapsedHeaderStyle,
    expandedHeaderStyle,
    handleBottomSheetDismiss,
    handleConnect,
    isLoading,
    onScroll,
    openProfile,
    openProfileFromConnect,
    pendingConnections,
    profiles,
    selectedProfile,
    sheetSnapIndex,
  } = useNetworkingFeedScreen();

  return (
    <View style={styles.safeArea}>
      {/* Sticky compact title that fades in once the large title scrolls away. */}
      <CollapsedHeader
        insetTop={insets.top}
        animatedStyle={collapsedHeaderStyle}
      />

      <NetworkingFeedList
        insetTop={insets.top}
        expandedHeaderStyle={expandedHeaderStyle}
        isLoading={isLoading}
        profiles={profiles}
        pendingConnections={pendingConnections}
        onScroll={onScroll}
        onProfilePress={openProfile}
        onProfileConnectPress={openProfileFromConnect}
      />

      <NetworkingFeedProfileSheet
        profile={selectedProfile}
        pendingConnections={pendingConnections}
        initialSnapIndex={sheetSnapIndex}
        onConnect={handleConnect}
        onDismiss={handleBottomSheetDismiss}
      />
    </View>
  );
}
