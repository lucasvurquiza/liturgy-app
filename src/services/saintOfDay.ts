import { SAINT_URL } from "@utils/constants"
import { ISaint } from "@utils/typesAndInterfaces"
import axios from "axios"

export const getSaintsOfDay = async (month: number | string, day: number | string) => {
  try {
    const response = await axios.get(`${SAINT_URL}/pt/santo-do-dia/${month}/${day}.saints.js`)
    const saints: ISaint[] = response.data?.saints
    return saints
  } catch (error) {
    return null
  }
}

export const returnLinkToImage = (keyImage: string) => {
  return `${SAINT_URL}${keyImage}/_jcr_content/renditions/cq5dam.thumbnail.cropped.250.141.jpeg`;
};