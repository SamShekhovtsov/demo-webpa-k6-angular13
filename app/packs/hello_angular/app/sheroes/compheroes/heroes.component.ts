import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  template: require('./heroes.component.html'),
  //providers:  [ HeroService ]
  //styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { //{, AfterViewInit

  //selectedHero?: Hero;
  sub_title = "List of Sems Heroes"
  heroes: Hero[] = []
  heroService: HeroService = new HeroService()//new MessageService()

  //constructor(private heroService: HeroService, private messageService: MessageService) { }
  //constructor() { }

  ngOnInit() {
    this.getHeroes();
  }

  //ngAfterViewInit() {
    //this.getHeroes();
  //}

  //onSelect(hero: Hero): void {
    //this.selectedHero = hero;
    //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  //}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}