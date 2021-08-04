import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): {
    window.scroll(0,0)
}

confirmSenha(event: any){



}

tipoUser(event: any){


}
CadastrarComponent(){
  this.user.tipo = this.tipoUsuario

  if (this.user.senha != this.confirmarSenha) {
    alert('As senhas estão incorretas.')
  }else{
    this.authService.cadastrar(this.user).subscribe((resp: User) => 
    this.user = resp
    alert('Usuario cadastrado com sucesso!')
    )}
}
}