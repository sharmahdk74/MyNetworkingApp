import React, { useMemo } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { NetworkingProfile } from '../types/networking';
import { styles } from './ProfileBottomSheet.styles';
import { ProfileBottomSheetContent } from './profileBottomSheet/ProfileBottomSheetContent';
import { ProfileBottomSheetEmptyState } from './profileBottomSheet/ProfileBottomSheetEmptyState';
import { ProfileBottomSheetHeader } from './profileBottomSheet/ProfileBottomSheetHeader';

type ProfileBottomSheetProps = {
  profile: NetworkingProfile | null;
  isConnected: boolean;
  initialSnapIndex: number;
  onConnect: (profileId: string) => void;
  onDismiss: () => void;
};

const SNAP_RATIOS = [0.42, 0.76] as const;

export function ProfileBottomSheet({
  profile,
  isConnected,
  initialSnapIndex,
  onConnect,
  onDismiss,
}: ProfileBottomSheetProps) {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const snapRatio =
    SNAP_RATIOS[initialSnapIndex] ?? SNAP_RATIOS[SNAP_RATIOS.length - 1];
  const sheetHeight = useMemo(() => {
    const maxHeight = Math.max(320, height - insets.top - 24);
    const targetHeight = Math.round(height * snapRatio);

    return Math.min(maxHeight, targetHeight);
  }, [height, insets.top, snapRatio]);

  return (
    <Modal
      animationType="slide"
      onRequestClose={onDismiss}
      presentationStyle="overFullScreen"
      statusBarTranslucent
      transparent
      visible={profile !== null}>
      <View style={styles.modalRoot}>
        <View pointerEvents="none" style={styles.backdrop} />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Dismiss profile details"
          onPress={onDismiss}
          style={styles.backdropHitArea}
        />

        <View
          style={[
            styles.sheetBackground,
            styles.sheetContainer,
            {
              height: sheetHeight,
              paddingBottom: 20 + insets.bottom,
            },
          ]}>
          <ProfileBottomSheetHeader onDismiss={onDismiss} />

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}>
            {profile ? (
              <ProfileBottomSheetContent
                profile={profile}
                isConnected={isConnected}
                onConnect={onConnect}
              />
            ) : (
              <ProfileBottomSheetEmptyState />
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
