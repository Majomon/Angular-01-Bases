import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-ball.component.html',
  styles: `
  button{
    padding: 5px;
    margin: 5px 10px;
    width:75px;
  }
  `,
})
export class DragonBallComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 6000 },
  ]);
}
