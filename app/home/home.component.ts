import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//projects
import { Project } from '../shared/models/project';
import { ProjectService } from '../shared/project.service'
//skills
import { Skill } from '../shared/models/skill';
import { SkillService } from '../shared/skill.service'
//roles
import { Role } from '../shared/models/role';
import { RoleService } from '../shared/role.service'
//diplomas
import { Diploma } from '../shared/models/diploma';
import { DiplomaService } from '../shared/diploma.service'

@Component({
  moduleId: module.id,
  templateUrl: 'home.html'
})
export class HomeComponent
{
  introContent: any;
  homeTitles: any;
  projects: Project[];
  skills: Skill[];
  roles: Role[];
  diplomas: Diploma[];
  // Injections of services
  constructor(private projectService: ProjectService,
              private skillService: SkillService,
              private roleService: RoleService,
              private diplomaService: DiplomaService) { }
  ngOnInit() {
    this.introContent = {
      "title": "A Front-End Architect at your service",
      "image": "app/shared/images/photo.png",
      "alt": "My photo would have appeared if you activated Javascript on this browser :-("
    };
    this.homeTitles = [
      "Overview",
      "Some of my works",
      "My Top 10 technologies",
      "Milestones"
    ];
    this.projects = this.projectService.getProjects();
    this.skills = this.skillService.getSkills();
    this.roles = this.roleService.getRoles();
    this.diplomas = this.diplomaService.getDiplomas();
  }
}
