import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d8e4de',
    shadowColor: '#17352c',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 4,
  },
  cardPressed: {
    transform: [{ scale: 0.992 }],
    shadowOpacity: 0.05,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerText: {
    flex: 1,
    gap: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#15261f',
  },
  designation: {
    fontSize: 14,
    lineHeight: 19,
    color: '#426356',
    fontWeight: '600',
  },
  meta: {
    fontSize: 12,
    color: '#688377',
  },
  bio: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 21,
    color: '#314941',
  },
  tags: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  button: {
    marginTop: 18,
    minHeight: 44,
    borderRadius: 14,
    backgroundColor: '#1f7a53',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConnected: {
    backgroundColor: '#e9f3ee',
    borderWidth: 1,
    borderColor: '#bed4c8',
  },
  buttonPressed: {
    opacity: 0.92,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  buttonLabelConnected: {
    color: '#2c5a48',
  },
});
