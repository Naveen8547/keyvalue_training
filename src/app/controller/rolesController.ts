import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import { rolesServices } from "../services/rolesServices";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class rolesController extends AbstractController{
    constructor(private roleService: rolesServices) {
        super(`${APP_CONSTANTS.apiPrefix}/roles`);
        this.initializeRoutes();
      }    
      protected initializeRoutes = (): void => {
          this.router.post(
              `${this.path}`,
              this.createRoles
          );
          this.router.put(
            `${this.path}/:roleId`,
            this.asyncRouteHandler(this.updateRoles)
          );
          this.router.get(
            `${this.path}`,
            this.asyncRouteHandler(this.getAllRoles)
          );
          this.router.delete(
            `${this.path}/:roleId`,
            this.asyncRouteHandler(this.deleteRoles)
          ); 
      }
      public  createRoles= async (
          request: RequestWithUser,
          response: Response,
          next: NextFunction
        ) => {
            console.log(request.body)
          const data = await this.roleService.createRoles(request.body);
          response.send(
              this.fmt.formatResponse(data,Date.now() - request.startTime, "OK")
          );
        }
        private updateRoles = async (
            request: RequestWithUser,
            response: Response,
            next: NextFunction
          ) => {
              const data = await this.roleService.updateRole(request.params.roleId, request.body);
              response.status(201).send(
                this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
              );
          }
          private getAllRoles = async (
            request: RequestWithUser,
            response: Response,
            next: NextFunction
          ) => {
            const data = await this.roleService.getAllRoles();
            response.send(
              this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
            );
          }
          private deleteRoles = async (
            request: RequestWithUser,
            response: Response,
            next: NextFunction
          ) => {
              const data = await this.roleService.deleteRoles(request.params.roleId);
              response.status(201).send(
                this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
              );
          }
    
    }
        export default rolesController;