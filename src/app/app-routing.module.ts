import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule),
  },
  {
    path: 'project-editor',
    loadChildren: () =>
      import('./project-editor/project-editor.module').then(m => m.ProjectEditorModule),
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },
  { path: 'projects/new', loadChildren: () => import('./project-creator/project-creator.module').then(m => m.ProjectCreatorModule) },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
