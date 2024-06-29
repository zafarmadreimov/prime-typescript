import { FC } from "react";
import { quotes } from "../assets";
import { feedbacks } from "../util/constants";

interface Props {
    content:string;
    name:string;
    title:string;
    idx:number;
    image:string;
}

const FeedbackCard:FC <Props>= ({ content, name, title, idx,image }) => {
    return (
        <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer feedback-card
        ${idx !== feedbacks.length-1 ? "mr-0":"md-mr-0 sm:mr-0 mr-0"}`}>
            <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain"/>
            <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>

            <div className="flex flex-row">
                <div className="w-[55px] h-[55px] flex justify-center items-center bg-slate-400 rounded-full bg-dark-gradient ">
                   <img src={image} alt={title} className="rounded-full"/>
                </div>
                <div className="flex flex-col ml-4">
                    <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
                    <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">{title}</p>
                </div>
            </div>
        </div> 
    )
}

export default FeedbackCard;
