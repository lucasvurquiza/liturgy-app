import { useState } from "react";
import { IOneMistery } from "@utils/typesAndInterfaces";
import { ModalPrayer } from "./components/ModalPrayer";
import { Introduction } from "./components/Introduction";
import { SelectMistery } from "./components/SelectMistery";
import { Mistery } from "./components/Mistery";

interface IRosario {
  goBack: () => void;
}

export interface TModalPrayer {
  title: string;
  prayer: string;
  isTouch: boolean;
}

export function Rosario(props: IRosario) {
  const { goBack } = props
  const [modalVisible, setModalVisible] = useState(false)
  const [prayerItemModal, setPrayerItemModal] = useState<null | TModalPrayer>(null)
  const [misteryPressed, setMisteryPressed] = useState(false)
  const [misterySelected, setMisterySelected] = useState<null | IOneMistery[]>(null)
  const [moreMistery, setMoreMistery] = useState(0)
  const [isLoadingImage, setIsLoadingImage] = useState(false)

  function onTapShowModal(itemToShow: TModalPrayer) {
    setModalVisible(true)
    setPrayerItemModal(itemToShow)
  }

  function onTapCloseModal() {
    setModalVisible(false)
    setPrayerItemModal(null)
  }

  function onAddMoreMistery() {
    setIsLoadingImage(false)
    if (moreMistery <= 4) setMoreMistery(moreMistery + 1)
    else return
  }

  function onRemoveMoreMistery() {
    setIsLoadingImage(false)
    if (moreMistery > 0) setMoreMistery(moreMistery - 1)
    else setMisterySelected(null)
  }

  function onEndRosario() {
    setModalVisible(false)
    setPrayerItemModal(null)
    setMisteryPressed(false)
    setMisterySelected(null)
    setMoreMistery(0)
    setIsLoadingImage(false)
    goBack()
  }

  return (
    <>
      {!misterySelected ?
        !misteryPressed ? <>
          <Introduction
            goBack={goBack}
            onTapShowModal={onTapShowModal}
            setMisteryPressed={setMisteryPressed}
          />
          <ModalPrayer visible={modalVisible} close={onTapCloseModal} item={prayerItemModal} />
        </> : <SelectMistery setMisteryPressed={setMisteryPressed} setMisterySelected={setMisterySelected} />
        : <Mistery
          isLoadingImage={isLoadingImage}
          misterySelected={misterySelected}
          modalVisible={modalVisible}
          moreMistery={moreMistery}
          onAddMoreMistery={onAddMoreMistery}
          onEndRosario={onEndRosario}
          onRemoveMoreMistery={onRemoveMoreMistery}
          onTapCloseModal={onTapCloseModal}
          onTapShowModal={onTapShowModal}
          prayerItemModal={prayerItemModal}
          setIsLoadingImage={setIsLoadingImage}
        />
      }
    </>
  )
}