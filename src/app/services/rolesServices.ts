import { plainToClass } from "class-transformer";
import { roles } from "../entities/roles";
import { rolesRepository } from "../repository/rolesRepository";


export class rolesServices {
    constructor(
        private rolesRepository: rolesRepository
    ) {}

    public async createRoles(rolesInput: any){
        const rolesData = plainToClass( roles, {
            role_name: rolesInput.role_name,
            status: true,
            desc: "KeyValue 123"
        });
        const savedDetails = await this.rolesRepository.createRoles(rolesData);
        return savedDetails;
    }
    public async updateRole(roleId: string, roleDetails: any) {
        const updatedRole = await this.rolesRepository.updateRoleDetails(roleId, roleDetails);
                              
        return updatedRole;

    }     
    public async getAllRoles() {
        return this.rolesRepository.getAllEmployees();
    }
    public async deleteRoles(roleID: string) {
        return this.rolesRepository.softDeleteroleById(roleID);
}
}