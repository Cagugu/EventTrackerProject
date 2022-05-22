import { BookNookService } from './services/book-nook.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewComponent } from './components/review/review.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { SingleBookComponent } from './components/single-book/single-book.component';
import { TableFilterPipe } from './pipes/table-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReviewComponent,
    BookshelfComponent,
    SingleBookComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    BookNookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
