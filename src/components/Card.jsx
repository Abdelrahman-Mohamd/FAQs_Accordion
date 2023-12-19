import Accordion from "./Accordion";
import starIcon from "../assets/images/icon-star.svg";

function Card() {
  return (
    <>
      <div className="flex flex-col items-center absolute w-[100%] mt-[10rem] ">
        <div className="flex flex-col bg-white justify-center items-center md:w-[40%] sm:w-[10%]  px-[2rem] pb-[5rem] rounded-lg shadow-2xl">
          <div className="flex flex-row space-x-3 w-[100%] justify-start py-[2rem] font-[780] font-sans text-[2rem]">
            <img src={starIcon} alt="star" className="w-6" />
            <h1>FAQs</h1>
          </div>
          <Accordion />
        </div>
      </div>
    </>
  );
}
export default Card;
