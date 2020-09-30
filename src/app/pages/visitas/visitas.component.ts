import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.cargando = true;

    this.heroesService.getHeroes()
      .subscribe( resp => {
        this.heroes = resp;
        this.cargando = false;
    });
  
  }

  borrarHeroe( heroe: HeroeModel, i: number ) {   
    
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea eliminar a ${ heroe.nombre }?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {

        this.heroes.splice(i, 1);
        this.heroesService.borrarHeroe( heroe.id ).subscribe();

      }

    })

  }

}