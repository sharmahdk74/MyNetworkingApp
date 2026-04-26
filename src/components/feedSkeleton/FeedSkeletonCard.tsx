import React from 'react';
import { View } from 'react-native';

import { styles } from '../FeedSkeleton.styles';

export function FeedSkeletonCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatar} />
        <View style={styles.content}>
          <View style={[styles.line, styles.lineWide]} />
          <View style={[styles.line, styles.lineMedium]} />
          <View style={[styles.line, styles.lineShort]} />
        </View>
      </View>
      <View style={styles.tagRow}>
        <View style={styles.tag} />
        <View style={styles.tag} />
        <View style={[styles.tag, styles.tagShort]} />
      </View>
      <View style={styles.button} />
    </View>
  );
}
