import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateUserComponent, UpdateUserComponent, DeleteUserComponent]
})
export class UserModule { }
