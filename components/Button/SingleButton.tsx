import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { SingleButtonProps } from "~/types";

export default function SingleButton({ title, onPress }: SingleButtonProps) {
    return (
        <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
            <Text style={buttonStyles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
    // Universal shadow (iOS & Android)
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4, // Android shadow
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
