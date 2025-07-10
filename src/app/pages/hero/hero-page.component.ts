import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(25);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
