import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-pg',
  templateUrl: './not-found-pg.component.html',
  styleUrl: './not-found-pg.component.css'
})
export class NotFoundPgComponent {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('404 Page Not Found');
  }

}
