import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './TagPill.styles';

type TagPillProps = {
  label: string;
  compact?: boolean;
};

export function TagPill({ label, compact = false }: TagPillProps) {
  return (
    <View style={[styles.pill, compact && styles.pillCompact]}>
      <Text style={[styles.label, compact && styles.labelCompact]}>{label}</Text>
    </View>
  );
}
