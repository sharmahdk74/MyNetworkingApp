import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 14,
    paddingTop: 12,
  },
  card: {
    borderRadius: 24,
    backgroundColor: '#ffffff',
    padding: 18,
    borderWidth: 1,
    borderColor: '#dde7e2',
  },
  row: {
    flexDirection: 'row',
    gap: 14,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#e6ede9',
  },
  content: {
    flex: 1,
    gap: 10,
    paddingTop: 4,
  },
  line: {
    height: 10,
    borderRadius: 999,
    backgroundColor: '#e8efeb',
  },
  lineWide: {
    width: '86%',
  },
  lineMedium: {
    width: '62%',
  },
  lineShort: {
    width: '74%',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  tag: {
    width: 64,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#e8efeb',
  },
  tagShort: {
    width: 52,
  },
  button: {
    marginTop: 18,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#d6e7dd',
  },
});
