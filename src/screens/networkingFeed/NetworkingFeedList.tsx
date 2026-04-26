import React from 'react';
import { Platform, View } from 'react-native';
import Animated, {
  type AnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import { FeedSkeleton } from '../../components/FeedSkeleton';
import { ProfileCard } from '../../components/ProfileCard';
import type { NetworkingProfile } from '../../types/networking';
import { styles } from '../NetworkingFeedScreen.styles';
import { ExpandedHeader } from './ExpandedHeader';
import { ItemSeparator } from './ItemSeparator';

type NetworkingFeedListProps = {
  insetTop: number;
  expandedHeaderStyle: AnimatedStyle<object>;
  isLoading: boolean;
  profiles: NetworkingProfile[];
  pendingConnections: Record<string, boolean>;
  onScroll: ReturnType<typeof useAnimatedScrollHandler>;
  onProfilePress: (profile: NetworkingProfile) => void;
  onProfileConnectPress: (profile: NetworkingProfile) => void;
};

export function NetworkingFeedList({
  insetTop,
  expandedHeaderStyle,
  isLoading,
  profiles,
  pendingConnections,
  onScroll,
  onProfilePress,
  onProfileConnectPress,
}: NetworkingFeedListProps) {
  return (
    <Animated.FlatList
      contentContainerStyle={styles.contentContainer}
      data={isLoading ? [] : profiles}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <ProfileCard
          profile={item}
          index={index}
          isConnected={Boolean(pendingConnections[item.id])}
          onPress={onProfilePress}
          onConnectPress={onProfileConnectPress}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <ExpandedHeader
          insetTop={insetTop}
          animatedStyle={expandedHeaderStyle}
        />
      }
      ListEmptyComponent={isLoading ? <FeedSkeleton /> : null}
      ListFooterComponent={<View style={styles.footerSpacing} />}
      showsVerticalScrollIndicator={false}
      initialNumToRender={8}
      maxToRenderPerBatch={6}
      windowSize={7}
      removeClippedSubviews={Platform.OS === 'android'}
      style={styles.list}
      scrollEnabled={!isLoading}
      testID="network-feed-list"
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
}
