import { Component } from '@angular/core';
//skills
import { Skill } from '../shared/models/skill';
import { SkillService } from '../shared/skill.service'

@Component({
  moduleId: module.id,
  templateUrl: 'skills.html'
})
export class SkillsComponent {
  title: string;
  skills: Skill[];
  // Injection of SkillService
  constructor(private skillService: SkillService) { }
  ngOnInit() {
    this.title= "My Skills";
    this.skills = this.skillService.getSkills();
  }
}
