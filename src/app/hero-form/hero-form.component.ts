import { Component, OnInit } from '@angular/core';
import { HeroClass } from '../hero-class';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers: any[] = [];

  constructor(private heroService: HeroService) { }

  model = new HeroClass(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }  

  ngOnInit(): void {
    this.getPowers(); 
  }
  updateModel(powers: string[]):void {
    this.powers = powers;
    this.model.power = this.powers[0];
  }
  newHero() {
    this.model = new HeroClass(42, '', '');
  }
  getPowers(): void {
    this.heroService.getPowers()
        .subscribe(powers => this.updateModel(powers));
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
