import { Component, OnInit } from '@angular/core';
import { faFolder, faFolderOpen, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lessonmanagerfolder',
  templateUrl: './lessonmanagerfolder.component.html',
  styleUrls: ['./lessonmanagerfolder.component.css']
})
export class LessonmanagerfolderComponent implements OnInit {
  faFolder = faFolder;
  faFolderOpen = faFolderOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
