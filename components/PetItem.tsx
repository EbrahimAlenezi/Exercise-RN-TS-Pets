import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface PetItemProps {
  pet: {
    id: number;
    name: string;
    description: string;
    type: string;
    image: string;
    image2: string;
  };
  onAdopt: (id: number) => void;
}

const PetItem = ({ pet, onAdopt }: PetItemProps) => {
  const [isOriginal, setIsOriginal] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.petInfo}>
        <Image
          source={{ uri: isOriginal ? pet.image : pet.image2 }}
          style={styles.image}
        />
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.description}>{pet.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.petButton}
          onPress={() => setIsOriginal(!isOriginal)}
        >
          <Text style={styles.buttonText}>Pet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.adoptButton}
          onPress={() => onAdopt(pet.id)}
        >
          <Text style={styles.buttonText}>Adopt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PetItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9e3be",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  petInfo: {
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "purple",
  },
  description: {
    fontSize: 16,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  petButton: {
    backgroundColor: "#4ade80",
    padding: 10,
    borderRadius: 10,
    width: "45%",
  },
  adoptButton: {
    backgroundColor: "#f43f5e",
    padding: 10,
    borderRadius: 10,
    width: "45%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
