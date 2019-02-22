import {RouterModule,Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes:Routes = [
    {path:'',component:LoginComponent,pathMatch:'full'},
    {path:'result',component:ResultPageComponent}
    
]

export const ROUTING  = RouterModule.forRoot(routes);
