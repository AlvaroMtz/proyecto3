import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component'

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'signup', component: LoginFormComponent},
    { path: 'profile', component: ProfileComponent},
    { path: '**', redirectTo: '' }
];
