import { Component } from '@angular/core';
import { Section1Component } from "../section1/section1.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [Section1Component],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
