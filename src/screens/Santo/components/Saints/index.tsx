import { Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ISaint } from "@utils/typesAndInterfaces";
import { Text } from "@components/Text";
import { COLORS } from "@utils/constants";
import { Container } from "./styles";

type TSaint = {
  saintDay: ISaint
}

export function Saints(saintDay: TSaint) {
  const { saintDay: saint } = saintDay;

  const [showMore, setShowMore] = useState(false);

  return (
    <View style={{
      marginBottom: 20,
    }}>
      <Text
        weight={600} 
        color={COLORS.BLACK} 
        size={20} 
        style={{ 
          backgroundColor: `${COLORS.YELLOW}60`, 
          marginBottom: 5, 
          padding: 5,
          borderRadius: 5
        }}>
          {saint.name}
        </Text>
      <Container> 
        <Text 
          weight={600} 
          color={COLORS.BLACK} 
          size={15}>
            {saint.summary}
        </Text>
        {saint.image && 
          <Image 
            source={{ uri: saint.image }} 
            style={{ 
              width: 150, 
              height: 150, 
              marginTop: 20,
              borderRadius: 5,
              marginBottom: 20,
            }} 
          />}
          {(saint?.text && !showMore) && <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => setShowMore(!showMore)}>
            <Text 
              weight={800} 
              color={COLORS.GRAY} 
              size={15}>
                Mostrar Mais
            </Text>
        </TouchableOpacity>}
          {showMore && <Text 
            weight={600} 
            color={COLORS.BLACK} 
            size={15}>
            {'\n' + saint.text}
        </Text>}
        {(saint?.text && showMore) && <TouchableOpacity onPress={() => setShowMore(!showMore)} style={{ marginBottom: 20 }}>
            <Text 
              weight={800} 
              color={COLORS.GRAY} 
              size={15}>
                Mostrar Menos
            </Text>
        </TouchableOpacity>}
      </Container>
    </View>
  )
}