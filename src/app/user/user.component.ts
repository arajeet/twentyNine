import { Component, OnInit } from '@angular/core';
import { ShufflecardsService } from 'src/app/shufflecards.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  cardlist;
  name: any = '2H';  
  constructor(private shuffle : ShufflecardsService) { }

  ngOnInit() {

    this.cardlist = this.shuffle.getCardsForPlayer1()
  }

}
