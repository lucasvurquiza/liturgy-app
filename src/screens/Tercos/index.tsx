import { View } from "react-native";
import { Button } from "./components/Button";
import { useState } from "react";
import { Text } from "@components/Text";
import { Rosario } from "./components/Rosario";

export function Tercos() {
  const [selectedTerco, setSelectedTerco] = useState<string | null>(null);

  return (
    <View>
      {!selectedTerco ? <>
        <Button 
          onSelect={() => setSelectedTerco("rosario")} 
          label='Terço do Rosário' />
        <Button 
          onSelect={() => setSelectedTerco("misericordia")} 
          label='Terço da Misericórdia' />
      </>
      : <Rosario goBack={() => setSelectedTerco(null)} />}
    </View>
  )
}