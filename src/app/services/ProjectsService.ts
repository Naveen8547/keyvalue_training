import { plainToClass } from "class-transformer";
import { projects } from "../entities/projects";
import { ProjectsRepository } from "../repository/ProjectsRepository";

export class ProjectsService {
    constructor(
        private projectsRepository: ProjectsRepository
    ) {}

    public async createProject(projectInput: any){
        const projectData = plainToClass( projects, {
            pro_name: projectInput.name,
            status: true,
            desc: "KeyValue 123"
        });
        const savedDetails = await this.projectsRepository.createProject(projectData);
        return savedDetails;
    }
}