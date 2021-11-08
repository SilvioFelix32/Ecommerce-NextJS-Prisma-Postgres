import React, { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const testi = [
  {
    speech:
      "Desenvolvimento é a minha nova vida.",
    name: "Silvio",
    occupation: "Desenvolvedor JavaScipt",
  },
  {
    speech:
      "Esse Site foi feito usando React e TypeScipt",
    name: "ReactJs",
    occupation: "DevTool",
  },
  {
    speech:
      "Esse é um site de Tecnologias",
    name: "Anônimo",
    occupation: "SFTech",
  },
];
// animate__fadeIn
// animate__lightSpeedInRight
export const TestiSlider: FC = () => {
  const [arrIndex, setArrIndex] = useState(0);
  const [animate, setAnimate] = useState("animate__lightSpeedInRight");

  const handleNext = useCallback(() => {
    if (arrIndex === testi.length - 1) {
      setArrIndex(0);
    } else {
      setArrIndex((prevState) => prevState + 1);
      setAnimate("animate__lightSpeedInRight");
    }
  }, [arrIndex]);

  const handlePrev = () => {
    if (arrIndex === 0) {
      setArrIndex(testi.length - 1);
    } else {
      setArrIndex((prevState) => prevState - 1);
      setAnimate("animate__lightSpeedInLeft");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [handleNext]);
  return (
    <div
      className=""
      style={{ width: "700px" }}
    >
      <div className="">
        {testi.map((ti, index) => {
          return (
            index === arrIndex && (
              <div
                key={ti.name}
                className={` ${animate}`}
                style={{ width: "700px" }}
              >
                <div className="">
                  <span>{ti.speech}</span>
                  <h5>{ti.name}</h5>
                  <span>({ti.occupation})</span>
                </div>
              </div>
            )
          );
        })}
      </div>
      <span
        className="handleprev"
        onClick={handlePrev}
      >
        < AiOutlineArrowLeft/>
      </span>
      <span
        className="handlenext"
        onClick={handleNext}
      >
        <AiOutlineArrowRight />
      </span>
    </div>
  );
};

