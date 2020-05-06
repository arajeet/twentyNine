import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  constructor() {}
}
const cardPoint = { A: 1, J: 3, Nine: 2, Ten: 1, K: 0, Q: 0 };

const cardset: (string | number)[] = [7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const shapes = { Hearts: 'H', Clubs: 'C', Spades: 'S', Diamond: 'D' };

