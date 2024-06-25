import { createAsyncThunk } from "@reduxjs/toolkit";
import { allBoardsAPI } from "../api/board.api";
import { IBoard } from "../model/board.model";

export const fetchAllBoards: any = createAsyncThunk(
    'boards/fetchAllBoards',
    async () =>  await allBoardsAPI()
)