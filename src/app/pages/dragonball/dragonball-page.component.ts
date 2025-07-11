import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 1000,
    },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) return;

    const newCharacter: Character = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((current) => [...current, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
