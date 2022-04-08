import { getConnection, Repository } from "typeorm";
import { projects } from "../entities/projects";

export class ProjectsRepository extends Repository<projects> {
    Repository: any;
    public async createProject( projectDetails: projects){
        const projectsConnection = getConnection().getRepository(projects);
        return projectsConnection.save(projectDetails);
    }
}