import { NextFunction,Response } from "express";
import APP_CONSTANTS from "../constants";
import { AddressService } from "../services/AddressService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class AddressController extends AbstractController{
    constructor(
        private addrService: AddressService
    ) {
        super(`${APP_CONSTANTS.apiPrefix}/address`);
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.post(
            `${this.path}`,
            this.createAddress
        )

        this.router.get(
            `${this.path}`,
            this.getAddressById
        )
        
    }

    private createAddress = async (
        request : RequestWithUser,
        response : Response,
        next : NextFunction
    ) => {
        try{
            const data = await this.addrService.createAddress(request.body);
            response.send(
                this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
            );
        }catch(err){
            // console.log(err)
            next(err) ;
        }
    }

    private getAddressById = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
        const data = await this.addrService.getAddressById(request.body);
        response.send(
          this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
        );
    }

}

