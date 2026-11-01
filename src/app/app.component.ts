import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourFirstProject';
  userName = 'shraddha';


  skills: string[] = ["HTML", "CSS", "JavaScript", "Angular", "Node"];
  names: string[] = ["Aarav", "Isha", "Rohan", "Neha", "Kunal"];
  courses: string[] = ["Angular", "React", "Java", "Python"];
  cities: string[] = ["Pune", "Delhi", "Jaipur", "Indore"];
  colors: string[] = ["Red", "Green", "Black", "White"];
  flowers: string[] = ["Rose", "Lotus", "Lily", "Tulip"];
  mobiles: string[] = ["Samsung", "Apple", "Vivo", "OnePlus"];
  laptops: string[] = ["Dell", "HP", "Lenovo", "Acer"];
  animals: string[] = ["Tiger", "Lion", "Horse", "Rabbit"];
  birds: string[] = ["Parrot", "Crow", "Eagle", "Peacock"];
  countries: string[] = ["India", "Japan", "France", "Germany"];
  languages: string[] = ["English", "Hindi", "Marathi", "French"];
  hobbies: string[] = ["Reading", "Dancing", "Singing", "Painting"];
  subjects: string[] = ["Maths", "Science", "History", "Geography"];
  products: string[] = ["Shampoo", "Soap", "Cream", "Perfume"];
  brands: string[] = ["Nike", "Puma", "Adidas", "Reebok"];
  vehicles: string[] = ["Car", "Bike", "Bus", "Truck"];
  snacks: string[] = ["Chips", "Biscuits", "Popcorn", "Sandwich"];
  drinks: string[] = ["Coffee", "Tea", "Juice", "Milk"];
  games: string[] = ["Chess", "Cricket", "Football", "Hockey"];
  seasons: string[] = ["Summer", "Winter", "Rainy", "Spring"];
  relations: string[] = ["Mother", "Father", "Sister", "Brother"];
  employees: string[] = ["Amit", "Pooja", "Rahul", "Priya"];
  days: string[] = ["Monday", "Tuesday", "Friday", "Sunday"];
  months: string[] = ["January", "March", "July", "December"];

}
