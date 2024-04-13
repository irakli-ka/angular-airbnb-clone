import { Component, Input, OnInit, input } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{



  @Input() images: string[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  
  

  selectedIndex = 0;


  ngOnInit(): void {
  }

  // Function to change the selected image on dot click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
// function to change the current image to the previous image
  onPrevClick(): void {
    this.selectedIndex = this.selectedIndex === 0 ? this.images.length - 1 : this.selectedIndex - 1;
  }
// function to change the current image to the next image
  onNextClick(): void {
    this.selectedIndex = this.selectedIndex === this.images.length - 1 ? 0 : this.selectedIndex + 1;
  }

}
