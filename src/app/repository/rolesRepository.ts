import { getConnection, Repository } from "typeorm";
import { roles } from "../entities/roles";

export class rolesRepository extends Repository<roles> {
    Repository: any;
    public async createRoles( rolesDetails: roles){
        const rolesConnection = getConnection().getRepository(roles);
        return rolesConnection.save(rolesDetails);
    }
    public async updateRoleDetails(roles_id: string, roleDetails: any) {
        const roleRepo = getConnection().getRepository(roles);
        console.log(roleDetails)
        console.log(roles_id)
        const updateRoles = await roleRepo.update({ role_id: roles_id, deletedAt: null }, {
            role_name: roleDetails.role_name ? roleDetails.role_name : undefined
        });
        return updateRoles;
}
    public async getAllEmployees() {
        const roleRepo = getConnection().getRepository(roles);
        return roleRepo.findAndCount();
    }
    public async softDeleteroleById(id: string) {
        const roleRepo = getConnection().getRepository(roles);
        return roleRepo.softDelete({
            role_id:id
        });
    }
}
