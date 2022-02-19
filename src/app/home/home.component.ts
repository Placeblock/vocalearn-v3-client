import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  isHeaderSolid: boolean = false;
  isHeaderExpanded: boolean = false;


  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;

    if(verticalOffset > 50) {
      this.isHeaderSolid = true;
    }else {
      this.isHeaderSolid = false;
    }
  }

  scrollPageDown() {
    window.scroll(0, window.innerHeight);
  }

  toggleHeaderExpand() {
    this.isHeaderExpanded = !this.isHeaderExpanded;
  }

}
