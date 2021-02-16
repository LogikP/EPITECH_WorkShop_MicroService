import {Request, Response} from "express";
import {UserService} from "../service/user.service";

export class UserController {

    ////exercice numéro 1////
        //// return a json containing text: Hello World ////
    public static async HelloWorld(req: Request, res: Response): Promise<void> {

    }

    //exercice numéro 2 ///
        /// go to the ../service/user.service.ts file
        /// call the service fetchWeatherfunction and return the result
    public static async fetchData(req: Request, res: Response): Promise<void> {

    }

}