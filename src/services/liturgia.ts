import { LITURGIA_URL } from "@utils/constants"
import { ILiturgia } from "@utils/typesAndInterfaces"
import axios from "axios"

export const getLiturgiaOfDay = async () => {
  try {
    const response = await axios.get(LITURGIA_URL)
    const liturgia: ILiturgia = response.data
    return liturgia
  } catch (error) {
    return null
  }
}