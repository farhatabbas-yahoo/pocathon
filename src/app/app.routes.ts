import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from "./app.component";
import { GamesComponent } from "./activities/games/games.component";
import { HobbiesComponent } from "./activities/hobbies/hobbies.component";
import { AccountDetailsComponent } from "./bank-account/account-details/account-details.component";
import { CreateUserComponent } from "./user/create-user/create-user.component";
import { DeleteUserComponent } from "./user/delete-user/delete-user.component";
import { UpdateUserComponent } from "./user/update-user/update-user.component";

const routes:Routes = [
		{
			path: 'app-root',
			component: AppComponent
		},
		{
			path:'app-games',
			component: GamesComponent
		},
		{
			path:'app-hobbies',
			component: HobbiesComponent
		},
		{
			path:'app-create-user',
			component: CreateUserComponent
		},
		{
			path:'app-update-user',
			component: UpdateUserComponent
		},
		{
			path:'app-delete-user',
			component: DeleteUserComponent
		},
		{
			path:'app-account-details',
			component: AccountDetailsComponent
		},
		{
			path:'',
			redirectTo:'/app-root',
			pathMatch:'full'
		}

];

export const initializedRoutes = RouterModule.forRoot(routes);


