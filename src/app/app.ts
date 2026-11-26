import { Component } from '@angular/core';
import { TrPipe } from './core/i18n/tr.pipe';
import { UI } from './core/i18n/ui';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { ExperienceSection } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero, About, Skills, ExperienceSection, Projects, Contact, TrPipe],
  templateUrl: './app.html',
})
export class App {
  protected readonly ui = UI;
}
