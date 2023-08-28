import { Component } from '@angular/core';
import { GetPokemonsService } from './services/get-pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private getPokemonService: GetPokemonsService
  ) { }


  isNavMobileActive: boolean = false
  listPokemons: any;

  ngOnInit(): void {
    this.getPokemonService.getAllPokemons()
      .subscribe((data: any) => {
        this.listPokemons = data.results;
      })
  }

  toggleNavMobile() {
    this.isNavMobileActive = !this.isNavMobileActive;
    console.log(this.isNavMobileActive);
  }
}


