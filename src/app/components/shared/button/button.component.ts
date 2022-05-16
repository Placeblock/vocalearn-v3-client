import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  host: {'class': 'd-cont d-cont-p d-cont-s d-cont-h'}
})
export class ButtonComponent implements OnInit {
  @Input() label = "";

  constructor() { }

  ngOnInit(): void {
  }

}
