import { Component, OnInit } from '@angular/core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lessonmanagerlesson',
  templateUrl: './lessonmanagerlesson.component.html',
  styleUrls: ['./lessonmanagerlesson.component.css']
})
export class LessonmanagerlessonComponent implements OnInit {
  faLayerGroup = faLayerGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
