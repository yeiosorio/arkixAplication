import { RouterModule, Routes } from '@angular/router';
// importing component...
import { DashboardComponent } from './dashboard/dashboard.component';


const app_routes: Routes = [
    { path: '', component: DashboardComponent },

];

export const app_routing = RouterModule.forRoot(app_routes);
