import React from 'react';
import { View } from 'react-native';

import { styles } from './FeedSkeleton.styles';
import { FeedSkeletonCard } from './feedSkeleton/FeedSkeletonCard';

export function FeedSkeleton() {
  return (
    <View style={styles.container} testID="feed-skeleton">
      {Array.from({ length: 4 }).map((_, index) => (
        <FeedSkeletonCard key={`skeleton-${index}`} />
      ))}
    </View>
  );
}
