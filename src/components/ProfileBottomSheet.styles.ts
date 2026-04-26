import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(15, 24, 20, 0.32)',
  },
  backdropHitArea: {
    flex: 1,
  },
  sheetBackground: {
    backgroundColor: '#f9fcfa',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  sheetContainer: {
    overflow: 'hidden',
  },
  topBar: {
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handleIndicator: {
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 4,
    width: 54,
    height: 5,
    borderRadius: 999,
    backgroundColor: '#b7c8be',
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#edf4f0',
    borderWidth: 1,
    borderColor: '#d2e0d8',
  },
  closeIconLine: {
    position: 'absolute',
    width: 12,
    height: 2,
    borderRadius: 999,
    backgroundColor: '#305244',
  },
  closeIconLineLeft: {
    transform: [{ rotate: '45deg' }],
  },
  closeIconLineRight: {
    transform: [{ rotate: '-45deg' }],
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 8,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileText: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#11201b',
  },
  designation: {
    fontSize: 15,
    lineHeight: 21,
    color: '#3b5b4f',
    fontWeight: '600',
  },
  meta: {
    fontSize: 13,
    color: '#6a8479',
  },
  sectionTitle: {
    marginTop: 22,
    marginBottom: 8,
    fontSize: 13,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    color: '#4f6d61',
    fontWeight: '700',
  },
  body: {
    fontSize: 15,
    lineHeight: 23,
    color: '#273c34',
  },
  tags: {
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actions: {
    marginTop: 26,
    gap: 12,
  },
  primaryButton: {
    minHeight: 48,
    borderRadius: 16,
    backgroundColor: '#1f7a53',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonConnected: {
    backgroundColor: '#e9f3ee',
    borderWidth: 1,
    borderColor: '#bed4c8',
  },
  primaryButtonLabel: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  primaryButtonLabelConnected: {
    color: '#2c5a48',
  },
  secondaryButton: {
    minHeight: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#d3e1d9',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonLabel: {
    color: '#244639',
    fontWeight: '700',
    fontSize: 15,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  emptyState: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#173129',
  },
  emptyBody: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    color: '#5a7569',
  },
});
