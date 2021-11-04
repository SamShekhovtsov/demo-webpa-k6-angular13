import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
//import { MessageService } from '../message.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  template: '<h2>{{sub_title}}</h2><ul class="heroes"><li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)"><span class="badge">{{hero.id}}</span> {{hero.name}} </li></ul>'//require('./heroes.component.html'),
  //providers:  [ HeroService ]
  //styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { //{, AfterViewInit

  selectedHero?: Hero;
  sub_title = "List of Sems Heroes"
  heroes: Hero[] = []
  //heroService: HeroService = new HeroService()//new MessageService()
  constructor(private heroesService: HeroesService) {}
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
    this.heroesService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {}
}