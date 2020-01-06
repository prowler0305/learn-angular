import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{ course.title }}</h2>
    <!-- Below is example of Property Binding of text content which is easier using string interpolation (i.e. {})-->
    <!-- <h2 [textContent]="title"></h2>-->
    <img [src]="imageUrl"/>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <!--    Example of Attribute Binding-->
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <p>Below button uses [class.active] which shows use of Class Binding. Looks at the class attribute isActive from CoursesComponent.
      If its set to "true" then property is added to the button element, if false it's removed.<br>
      <button class="btn btn-primary" [class.active]="isActive">Save</button>
    </p>
    <p>Example of Style Binding. Sets background of button to blue if isActive = true else white if isActive False.<br>
      <button class="text-white" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    </p>
    <p>Example of Event Binding.</p>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>

    <div class="container mt-1 p-0">
      <h3>Event Filtering and Template Variables</h3>
      <input #email (keyup.enter)="onKeyUp(email.value)"/>
    </div>

    <div class="container mt-1 p-0">
      <h3>Two-way Binding</h3>
      <input [(ngModel)]="twoWayEmail" (keyup.enter)="onKeyUpTwoWay()" />
    </div>
    <div class="container mt-1 p-0">
      <h3>Built-In Pipes</h3>
      Title: {{ course.title | uppercase }} <br/>
      Students: {{ course.students | number }} <br/>
      Rating: {{ course.rating | number: '1.1-1'}} <br/> <!-- '1.2-2' means 1 number to left of the decimal minimum of 2 - maximum of 2 digits after. Putting 1-1 makes it round the value to get the single digit after. -->
      Price: {{ course.price | currency:'':true:'3.2-2' }} <br/>
      Release Date: {{ course.releaseDate | date:'shortDate' }} <br/> <!-- angular.io and search for datepipe to see all date format pipes available -->
    </div>
    <div class="container mt-1 p-0">
      <h3>Custom Pipes</h3>
      {{ text | summary:10 }}
    </div>
  `
})
export class CoursesComponent {
  course = {
      title: 'The Complete Angular Course',
      rating: 4.9745,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2016, 3, 1)
    };
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  courses;
  isActive = true;
  twoWayEmail = 'me@example.com';
  text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  onSave($event) {
    $event.stopPropagation(); // Stops the propagation of Event Handling from Bubbling up the chain. So the onDivClicked event handler will not be called.
    console.log('Button was clicked', $event);
  }
  onDivClicked() {
    console.log('Div was Clicked.');
  }
  onKeyUp(email) {
    console.log('ENTER was pressed.');
    console.log(email);
  }
  onKeyUpTwoWay() {
    console.log(this.twoWayEmail);
  }
}
