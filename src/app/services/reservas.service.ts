import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reserva } from '../components/model/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private baseUrl = environment.serviceURL;


  constructor(private http: HttpClient) { }


  login(email: string, password: string )  {

    const body = new HttpParams().set('correoElectronico', email).set('password', password);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<Reserva>(this.baseUrl + "restaurante/login" , body.toString(), { headers })
    }

    getReservas() {
      return this.http.get<Reserva[]>(this.baseUrl + "restaurante/reserva");
    }

    crearReserva(reservaForm: Reserva) {

      const crearReservaJson = JSON.stringify(reservaForm);

      console.log(crearReservaJson);

      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http.post(this.baseUrl + "restaurante/crearReserva", crearReservaJson, { headers }).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }

    filtrarReservaId(identificacion: string) {
      const url = `${this.baseUrl}restaurante/filtrarId?id=${identificacion}`;
      return this.http.get<Reserva[]>(url);

    }


    actualizarRestaurante(id: string, reserva: Reserva) {

      const url = `${this.baseUrl}restaurante/actulizar?id=${id}`;

      this.http.put(url, reserva).subscribe(response => {
            console.log('La solicitud PUT se realizó con éxito:', response);
          },
          error => {
            console.error('Ocurrió un error al realizar la solicitud PUT:', error);
          }
        );
    }

}
