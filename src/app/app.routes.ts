import { Routes } from '@angular/router';
import { IndustriesComponent } from './pages/industries/industries.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent} from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
        {path:'about',component:AboutComponent},
        {path:'industries',component:IndustriesComponent},
        {path:'contact',component:ContactComponent},
        {path:"",component:HomeComponent},

];