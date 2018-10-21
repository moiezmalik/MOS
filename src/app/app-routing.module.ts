import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import{AboutComponent} from './components/about/about.component';
import{ContactComponent} from './components/contact/contact.component';
import{ServicesComponent} from './components/services/services.component';
import{ProjectsComponent} from './components/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component: ProjectsComponent}



];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
