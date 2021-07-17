import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email!: string;
  pass!: string;

  constructor( public UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    
  }

  login() {
    const user = { email: this.email, password: this.pass };
    this.UsuarioService.getApiLogin(user).subscribe(data=>{
      console.log(data);
    });
  }
}
