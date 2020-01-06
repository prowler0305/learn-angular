import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SummaryPipe} from './summary.pipe';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {CoursesComponent} from './courses.component';
import {CoursesService} from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorsService} from './authors.service';
import {FormsModule} from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(farStar, fasStar);
  }
}
