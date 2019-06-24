import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {FormComponent} from './form/form.component';

import {ServiceService} from './service.service';




const appRoutes: Routes= [

    {path:'', component: AppComponent },
    {path: 'post', component:PostComponent},
    {path: 'user', component:UserComponent
    , children: [
      {
        path: ':id/:name', component: UserDetailComponent
      }
    ]},
    //{path: 'user-detail/:id/:name', component:UserDetailComponent}
    {path: 'form', component:FormComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    UserDetailComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
