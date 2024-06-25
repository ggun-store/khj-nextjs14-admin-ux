'use client'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AdminIcon } from "../../../../../public/icons/icons";
import { getAllChats } from "@/app/redux/silce/chat.slice";
import { fetchChatById } from "@/app/redux/service/chat.service";

function Chartting({ params }: any) {

    const dispatch = useDispatch()

    const allchatlist = useSelector(getAllChats);

    useEffect(() => {
        dispatch(fetchChatById(params.id))
    }, [params.id, dispatch]);


    return (
        <div className="w-full h-full flex flex-col justify-center ">
            <div className="absolute top-[55px] inset-x-0  m-auto w-[75%]">
                <div className=" m-auto overflow-y-auto p-2">
                    {allchatlist && allchatlist.map((i: any) =>
                        i.senderId == params.id ?
                            <div key={i.id} className="w-full flex justify-end ">
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-white ">
                                    {i.text}
                                </div>
                            </div>
                            :
                            <div key={i.id} className="flex w-full">
                                <div className="w-[50px] h-[40px]"> <AdminIcon color="#433E49" /></div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-pebble-400">
                                    {i.text}
                                </div>
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                            </div>
                    )}
                </div>
                <div className="fixed inset-x-0 top-0 w-[80%] m-auto bold bg-pebble-200 text-center h-[50px] text-white content-center text-[27px] rounded-b-lg">{params.id}님과의 대화</div>
                <div className="relative h-[50px] bottom-0 inset-x-0 m-auto w-full">
                    <input type="text" placeholder="enter the text" className="fixed bottom-0 w-[75%] border shadow-lg rounded-lg min-h-[50px] px-5" />
                </div>
            </div>
        </div>
    );
}

export default Chartting;