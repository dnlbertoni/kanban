import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorSchema } from 'src/app/core/models/errorschema';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email!: string;
  pass!: string;
  error!: ErrorSchema;

  constructor( public UsuarioService:UsuarioService, public router: Router) { }

  ngOnInit(): void {
    
  }

  login() {
    const user = { email: this.email, password: this.pass };
    this.UsuarioService.login(user).subscribe(data=>{
      this.UsuarioService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      this.error = error;
      console.log(this.error);
    });
  }
}
