import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log('ngOnInit protegida');
    this.auth.userProfile$.subscribe( perfil => {
      console.log(perfil);
    } );
  }

}
