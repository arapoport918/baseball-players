import { Component } from '@angular/core';
import { PLAYERS } from '../mock-players';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {

    roster = PLAYERS;
    selectedPlayer? : Player;
    
    onSelect(player : Player): void {
      this.selectedPlayer = player;
    }
}
