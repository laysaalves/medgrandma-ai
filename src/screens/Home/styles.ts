import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  description: {
    color: "#2E9D4C",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    fontSize: 14,
    flex: 1,
    textAlignVertical: "center"
  },
  content: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#06CCAB",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    marginTop: -42,
    paddingTop: 12
  },
  identification: {
    flex: 1,
    gap: 12
  },
  image: {
    flex: 1
  },
});