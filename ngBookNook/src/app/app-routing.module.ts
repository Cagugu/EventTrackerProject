import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/review/review.component';
import { SingleBookComponent } from './components/single-book/single-book.component';

const routes: Routes = [
  { path: 'mybookshelf', component: BookshelfComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'singleBook/:id', component: SingleBookComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
