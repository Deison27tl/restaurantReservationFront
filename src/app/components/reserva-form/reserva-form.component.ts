import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { Reserva } from '../model/Reserva';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {

  idArray: any[]=[];
  reserva: any
  reservas: Reserva[]=[];
  createForm!: FormGroup;

  constructor(public reservaService: ReservasService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      identificacion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fechaReserva: ['', Validators.required],
      tipoReserva: ['', Validators.required],
      cantidadPersonas: ['', [Validators.required, Validators.min(1)]],
      observaciones: ''
    });
  }

  getReservas() {
    this.reservaService.getReservas().subscribe((response) => {
    this.reservas = response;
      response.forEach((element) => {
        this.idArray.push(element.identificacion);
      });
      this.crearReserva()
    });
  }

  crearReserva() {
/*     const crearReserva = {
      nombres: 'Oscar',
      apellidos: 'Castillo',
      tipoDocumento: 'CC',
      identificacion: '45645',
      email: 'occ@example.com',
      fechaReserva: '2023-06-21',
      tipoReserva: 'Vacaciones',
      cantidadPersonas: 7,
      observaciones: 'Sin observaciones',
    }; */

    const formData = this.createForm.value;



    if (this.idArray.length === 0 || !this.idArray.includes(formData.identificacion)) {
      console.log("Se creará la reserva");
      this.reserva = this.reservaService.crearReserva(formData);
    } else {
      console.log("No se creará la reserva");
    }
  }


  onSubmit(): void {
    if (this.createForm.invalid) {
      return;
    }
     const formData = this.createForm.value;
    console.log(formData);
  }

}
