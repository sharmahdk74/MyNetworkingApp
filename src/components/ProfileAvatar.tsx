import React, { useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './ProfileAvatar.styles';

type ProfileAvatarProps = {
  name: string;
  avatarUrl: string;
  size?: number;
};

export function ProfileAvatar({
  name,
  avatarUrl,
  size = 56,
}: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);

  const initials = useMemo(() => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase() ?? '')
      .join('');
  }, [name]);

  if (hasError || !avatarUrl) {
    return (
      <View
        style={[
          styles.fallback,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}>
        <Text style={[styles.initials, { fontSize: size * 0.34 }]}>{initials}</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri: avatarUrl }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
      accessibilityRole="image"
      accessibilityLabel={`${name} profile image`}
      onError={() => setHasError(true)}
    />
  );
}
