import { Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @ViewChild('nav') el!:ElementRef
  
  @HostListener('window:scroll') onScroll() {
    if (scrollY>30) {
      this.el.nativeElement.style.paddingBlock='20px';
      // this.el.nativeElement.style.position='fixed';
      this.el.nativeElement.classList.add('position-fixed');
    }
    else{

      this.el.nativeElement.style.paddingBlock='10px';
      // this.el.nativeElement.classList.remove('position-fixed');
    }
    
  }

}
