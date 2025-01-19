import { Component } from '@angular/core';
import { TopoComponent } from "../topo/topo.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  
}
