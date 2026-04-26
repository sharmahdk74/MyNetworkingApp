import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../ProfileBottomSheet.styles';

export function ProfileBottomSheetEmptyState() {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyTitle}>Select a profile</Text>
      <Text style={styles.emptyBody}>
        Tap a card to preview full details in the sheet.
      </Text>
    </View>
  );
}
