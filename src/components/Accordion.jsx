import { useState } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import questionsAndAnswers from "../assets/questions/Data";

function Accordion() {
  const [isClicked, setIsClicked] = useState({});

  const handleClick = (id) => {
    setIsClicked((prevIsClicked) => ({
      ...prevIsClicked,
      [id]: !prevIsClicked[id],
    }));
  };

  const childrenLength = questionsAndAnswers.faq.length;

  return (
    <>
      {questionsAndAnswers.faq.map((item, index) => (
        <div className="flex flex-col w-full" key={item.id}>
          <div className="flex flex-row justify-between font-sans font-semibold">
            <h1>{item.question}</h1>
            <button onClick={() => handleClick(item.id)}>
              <img
                src={isClicked[item.id] ? minusIcon : plusIcon}
                alt={isClicked[item.id] ? "minus" : "plus"}
                className="w-6 h-6"
              />
            </button>
          </div>
          <div className="flex flex-col items-start">
            {isClicked[item.id] && (
              <p className="text-[#7e7e7e]">{item.answer}</p>
            )}
          </div>
          {index !== childrenLength - 1 && <hr className="my-[1rem]" />}
        </div>
      ))}
    </>
  );
}

export default Accordion;
