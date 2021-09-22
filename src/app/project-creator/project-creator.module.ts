import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCreatorRoutingModule } from './project-creator-routing.module';
import { ProjectCreatorComponent } from './project-creator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectCreatorComponent],
  imports: [CommonModule, ProjectCreatorRoutingModule, ReactiveFormsModule],
})
export class ProjectCreatorModule {}
