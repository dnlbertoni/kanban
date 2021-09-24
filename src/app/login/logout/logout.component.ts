import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  username !: string;
  error !: string;

  constructor(public usuario:UsuarioService, public router: Router) { }

  ngOnInit(): void {
    const user = { username: this.username };
    this.usuario.logout(user).subscribe(data=>{
      this.usuario.delToken();
      this.router.navigateByUrl('/');
    },
    error => {
      this.error = error;
      console.log(this.error);
    });
  }

}
