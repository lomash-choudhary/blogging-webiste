import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";

const serverHealthController = asyncHandler(async(req:Request, res:Response) => {
    res.status(200).json(
        {
            message: "Server is running fine for the user"
        }
    )
})  

export{
    serverHealthController
}