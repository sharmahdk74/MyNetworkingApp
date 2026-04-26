import { useEffect, useState } from 'react';
import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import networkProfiles from '../../../mockData/networkProfiles.json';
import type { NetworkingProfile } from '../../../types/networking';
import {
  COLLAPSED_HEADER_HEIGHT,
  EXPANDED_HEADER_HEIGHT,
} from '../../NetworkingFeedScreen.styles';

const profiles = networkProfiles as NetworkingProfile[];
type ProfileSheetSnapIndex = 0 | 1;

const HEADER_SCROLL_DISTANCE =
  EXPANDED_HEADER_HEIGHT - COLLAPSED_HEADER_HEIGHT;

export function useNetworkingFeedScreen() {
  const [selectedProfile, setSelectedProfile] =
    useState<NetworkingProfile | null>(null);
  const [sheetSnapIndex, setSheetSnapIndex] = useState<ProfileSheetSnapIndex>(0);
  const [pendingConnections, setPendingConnections] = useState<
    Record<string, boolean>
  >({});
  const [isLoading, setIsLoading] = useState(true);
  const scrollY = useSharedValue(0);

  useEffect(() => {
    // A short delay lets the skeleton show briefly so the loading state feels intentional.
    const timer = setTimeout(() => setIsLoading(false), 250);

    return () => clearTimeout(timer);
  }, []);

  const openProfileSheet = (
    profile: NetworkingProfile,
    snapIndex: ProfileSheetSnapIndex,
  ) => {
    setSheetSnapIndex(snapIndex);
    setSelectedProfile(profile);
  };

  const openProfile = (profile: NetworkingProfile) => {
    openProfileSheet(profile, 0);
  };

  const openProfileFromConnect = (profile: NetworkingProfile) => {
    openProfileSheet(profile, 1);
  };

  const handleConnect = (profileId: string) => {
    setPendingConnections(current => ({
      ...current,
      [profileId]: true,
    }));
  };

  const handleBottomSheetDismiss = () => {
    setSelectedProfile(null);
  };

  const onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  // The large title fades and shrinks away as the compact sticky header takes over.
  const expandedHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [0, HEADER_SCROLL_DISTANCE * 0.6, HEADER_SCROLL_DISTANCE],
      [1, 0.35, 0],
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, HEADER_SCROLL_DISTANCE],
          [0, -28],
        ),
      },
      {
        scale: interpolate(
          scrollY.value,
          [-60, 0, HEADER_SCROLL_DISTANCE],
          [1.04, 1, 0.88],
        ),
      },
    ],
  }));

  // This compact header stays hidden until the expanded title has nearly collapsed.
  const collapsedHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [HEADER_SCROLL_DISTANCE * 0.45, HEADER_SCROLL_DISTANCE],
      [0, 1],
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [HEADER_SCROLL_DISTANCE * 0.45, HEADER_SCROLL_DISTANCE],
          [10, 0],
        ),
      },
    ],
  }));

  return {
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
  };
}
