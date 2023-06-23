import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Reserva } from '../model/Reserva';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reserva: any;
  loginForm: FormGroup;

  constructor(public reservaService: ReservasService,private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  ngOnInit(): void {
  }

  LoginAdministrador() {
    if (this.loginForm?.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.reservaService.login(email, password).subscribe(
        (response: Reserva) => {
          console.log('Usuario autenticado:', response);
          
          this.router.navigate(['/reservas']);
        },
        (error) => {
          console.error('Error de autenticación:', error);
        }
      );
    }
  }




}
