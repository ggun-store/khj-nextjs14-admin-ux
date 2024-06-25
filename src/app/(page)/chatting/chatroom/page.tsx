
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BaseBox } from "@/app/component/box/boxFormat";
import { useDispatch, useSelector } from "react-redux";
import { getAllChats } from "@/app/redux/silce/chat.slice";
import { fetchAllChats } from "@/app/redux/service/chat.service";


function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const dispatch = useDispatch();
    const allchatlist = useSelector(getAllChats);
    
    useEffect(() => {
        dispatch(fetchAllChats())
    }, [dispatch])

    return (
        <div className="w-full h-full">
            <button className="fixed right-3 bottom-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/chatroom.png" width="50" height="50" alt="채팅빙 목록" />
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-0 right-0">{allchatlist.length}</span>
            </button>

            {isOpen == true ?
                <div className="absolute bottom-[5%] right-[70px] w-full h-auto border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                        {allchatlist.map((i: any) =>
                        <button key={i.id} className="flex-col py-1 w-full text-left" onClick={()=>router.push(`/chatting/${i.senderId}`)}>
                            <BaseBox color="white hover:bg-pebble-400 flex-col" content={
                                <div className="">
                                    <div className="flex ">
                                        <div className="text-sm w-2/3 truncate">{i.senderName}와의 대화</div>
                                        <div className="text-gray-400 text-xs w-1/3">{i.modDate}</div>
                                    </div>
                                </div>
                            } />
                        </button>
                        )}
                </div>

                : <div></div>}
        </div >
    )
}
export default ChatRoom;