import { Component, OnInit } from '@angular/core';
import { Team } from '../../../core/models/team.model';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.scss']
})
export class MyGroupComponent implements OnInit {

public team:Team = {
  id:'Team1',
  name:'Crazy Techs',
  image: 'assets/images/home/carousel/technologies/javascript.svg',
  language: 'JavaScript',
  members:[
      {
        id:'JuanSecu',
        image:'assets/images/home/carousel/bezael.jpg',
        nickName:'JuanSecu',
        level:'Novato',
        rank: 'Integrante'
      },
      {
        id:'JuanJo',
        image:'assets/images/home/carousel/bezael.jpg',
        nickName:'JuanJo',
        level:'Medio',
        rank: 'Integrante'
      },
      {
        id:'LuisLiraC',
        image:'assets/images/home/carousel/bezael.jpg',
        nickName:'LuisLiraC',
        level:'Avanzado',
        rank: 'Lider'
      },
      {
        id:'JCruz',
        image:'assets/images/home/carousel/bezael.jpg',
        nickName:'JCruz',
        level:'Novato',
        rank: 'Integrante'
      },
      {
        id:'Fede',
        image:'assets/images/home/carousel/bezael.jpg',
        nickName:'Fede',
        level:'Apenas aprendiendo',
        rank: 'Integrante'
      }
    ]

}

  constructor() { }

  ngOnInit(): void {
  }

}
