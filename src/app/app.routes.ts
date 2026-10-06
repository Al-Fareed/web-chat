import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Profile } from './pages/users/profile/profile';
import { Settings } from './pages/users/settings/settings';
import { Feed } from './pages/feed/feed';
import { Chat } from './pages/chat/chat';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path:'login', component:Login, canActivate:[AuthGuard], data:{requiresAuth:false}},
    {path:'signup', component:Signup, canActivate:[AuthGuard], data:{requiresAuth:false}},
    {path:'feed', component:Feed, canActivate:[AuthGuard], data:{requiresAuth:true}},
    {path:'chat', component:Chat, canActivate:[AuthGuard], data:{requiresAuth:true}},
    {path:'account/profile', component:Profile, canActivate:[AuthGuard], data:{requiresAuth:true}},
    {path:'account/settings', component:Settings, canActivate:[AuthGuard], data:{requiresAuth:true}},
    {path:'**', redirectTo:'feed'}
];
