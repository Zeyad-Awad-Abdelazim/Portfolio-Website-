import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroComponent } from './Components/hero/hero.component';
import { BioComponent } from './Components/bio/bio.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, BioComponent, SkillsComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day4';
}
