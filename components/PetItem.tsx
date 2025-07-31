import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface PetItemProps {
  pet: {
    id: number;
    name: string;
    description: string;
    type: string;
    image: string;
    image2: string;
  };
}

const PetItem = ({ pet }: PetItemProps) => {
  const [isState, setState] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.petInfo}>
        <Image
          source={{ uri: isState ? pet.image : pet.image2 }}
          style={styles.image}
        />
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.description}>{pet.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.petButton}
          onPress={() => setState(!isState)}
        >
          <Text style={styles.buttonText}>Pet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.adoptButton}>
          <Text style={styles.buttonText}>Adopt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PetItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f9e3be",
    padding: 20,
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  petInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "purple",
  },
  description: {
    fontSize: 16,
    fontWeight: "light",
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  petButton: {
    backgroundColor: "#4ade80",
    padding: 10,
    borderRadius: 10,
    width: "50%",
    marginBottom: 10,
  },
  adoptButton: {
    backgroundColor: "#f43f5e",
    padding: 10,
    borderRadius: 10,
    width: "50%",
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
