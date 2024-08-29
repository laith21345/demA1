import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'About',pathMatch:'full'},
    {path:'About',component:AboutComponent,title:'About'},
    {path:'Portfolio',component:PortfolioComponent,title:'Portfolio'},
    {path:'Contact',component:ContactComponent,title:'Contact'},
    {path:'**',component:NotFoundComponent,title:'NotFound'},
];
