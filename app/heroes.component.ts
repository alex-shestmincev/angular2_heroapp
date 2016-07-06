import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }
  title = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes: Hero[];
  onSelect(hero: Hero) { this.selectedHero = hero; }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes
    });
  }
  ngOnInit() {
    this.getHeroes();
  }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
