'use server'

import { IBoard } from "../model/board.model"
import { instance } from "@/app/common/config/axios-config"


export const allBoardsAPI = async () => {
    try {
        const response:IBoard[] = await instance().get('/boards/list',{})
        console.log("AllBoardsAPI : "+ response)
        return response
    } catch (error) {
        console.log("AllBoardsAPI EERR!!!"+ error)
        return error
    }
}
