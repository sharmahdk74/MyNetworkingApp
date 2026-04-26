import { StyleSheet } from 'react-native';

export const EXPANDED_HEADER_HEIGHT = 120;
export const COLLAPSED_HEADER_HEIGHT = 56;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef3f0',
  },
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingBottom: 28,
    paddingTop: 0,
  },
  collapsedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    justifyContent: 'center',
    paddingHorizontal: 18,
    backgroundColor: 'rgba(238, 243, 240, 0.96)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d6dfd9',
  },
  collapsedTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    color: '#16251f',
  },
  expandedHeader: {
    height: EXPANDED_HEADER_HEIGHT,
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  expandedTitle: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
    color: '#13221c',
  },
  separator: {
    height: 14,
  },
  footerSpacing: {
    height: 34,
  },
});
