import React, { useContext, useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import Popup from "./popup";
import { BooksContext } from "./BooksContext";

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [wheelData, setWheelData] = useState([{ option: "test" }])

  const { books } = useContext(BooksContext)

  useEffect(() => {
    if (books.length > 0) {
      setWheelData(books)
    }
  }, [books]);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * wheelData.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleSpinFinish = (data) => {
    setPopupContent(data[prizeNumber].option)
    setIsPopupOpen(true)
  }

  return (
    <>
      <Popup isOpen={isPopupOpen} closePopup={() => setIsPopupOpen(false)} popupContent={popupContent} />

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={wheelData}
        outerBorderColor={["#f2f2f2"]}
        outerBorderWidth={[10]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["#dedede"]}
        radiusLineWidth={[1]}
        fontSize={15}
        textColors={["#ffffff"]}
        backgroundColors={[
          "#959BB5",
          "#0A1123",
          "#3A3E6C",
          "#8387C3",
          "#102B53",
          "#CEB5D4"
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          handleSpinFinish(wheelData)
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};
