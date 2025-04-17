import { Component, inject } from '@angular/core';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  templateUrl: './dragonballball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
