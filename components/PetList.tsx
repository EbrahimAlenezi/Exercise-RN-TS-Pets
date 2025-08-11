import React, { useState } from "react";
import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import petsData, { Pet } from "@/data/pets";
import PetItem from "./PetItem";

export default function PetList() {
  const [petList, setPetList] = useState<Pet[]>(petsData);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"all" | "cat" | "dog">("all");

  const handleAdopt = (id: number) => {
    const updated = petList.filter((p) => p.id !== id);
    setPetList(updated);
  };

  const filtered = petList
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    .filter((p) => (type === "all" ? true : p.type === type));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Search by name..."
        value={query}
        onChangeText={setQuery}
        style={styles.search}
      />

      <View style={styles.filters}>
        <FilterBtn
          label="All"
          active={type === "all"}
          onPress={() => setType("all")}
        />
        <FilterBtn
          label="Cats"
          active={type === "cat"}
          onPress={() => setType("cat")}
        />
        <FilterBtn
          label="Dogs"
          active={type === "dog"}
          onPress={() => setType("dog")}
        />
      </View>

      {filtered.map((pet) => (
        <PetItem key={pet.id} pet={pet} onAdopt={handleAdopt} />
      ))}
    </ScrollView>
  );
}

function FilterBtn({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.filterBtn, active && styles.filterBtnActive]}
    >
      <Text style={styles.filterText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20, gap: 12 },
  search: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  filters: { flexDirection: "row", gap: 10 },
  filterBtn: {
    backgroundColor: "#ececec",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  filterBtnActive: { backgroundColor: "#ddd" },
  filterText: { fontWeight: "600" },
});
