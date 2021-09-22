import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreatorComponent } from './project-creator.component';

const routes: Routes = [{ path: '', component: ProjectCreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectCreatorRoutingModule {}
