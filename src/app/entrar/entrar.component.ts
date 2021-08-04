import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): {

    window.scroll(0,0)
}
entrar(){
  this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) =>
    this.userLogin = resp
  this.router.navigate(['/inicio'])
  ), erro => {
    if (erro.status == 500) {

    }
  }
}

