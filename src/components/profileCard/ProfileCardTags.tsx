import React from 'react';
import { View } from 'react-native';

import { TagPill } from '../TagPill';
import { styles } from '../ProfileCard.styles';

type ProfileCardTagsProps = {
  tags: string[];
};

export function ProfileCardTags({ tags }: ProfileCardTagsProps) {
  return (
    <View style={styles.tags}>
      {tags.map(tag => (
        <TagPill key={tag} label={tag} compact />
      ))}
    </View>
  );
}
