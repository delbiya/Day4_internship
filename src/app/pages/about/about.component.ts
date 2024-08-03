import { Component } from '@angular/core';
import { ImagesComponent } from '../../units/images/images.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ImagesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
