import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-ball.component.html',
  imports: [
    //NgClass
  ],
})
export class DragonBallComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 3, name: 'Piccolo', power: 6000 },
  ]);

  /*   powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  }); */
}
