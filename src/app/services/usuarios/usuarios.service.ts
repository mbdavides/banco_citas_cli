import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    protected http: HttpClient
  ) { }

  getUsuarios(): Observable<any> {
    let route = [environment.apiUrl, 'usuarios'].join('/');
    //http://localhost:3000/usuarios
    return this.http.get(route);
  }

  getUsuariosByEmail(usr: any): Observable<any> {
    let route = [environment.apiUrl, 'usuarios/auth'].join('/');
    //http://localhost:3000/usuarios/auth
    return this.http.post(route, usr);
  }

  getUsuariosById(id: any): Observable<any> {
    let route = [environment.apiUrl, 'usuarios', id].join('/');
    //http://localhost:3000/usuarios/:id
    return this.http.get(route);
  }

  addUsuarios(usr: any): Observable<any> {
    let route = [environment.apiUrl, 'usuarios'].join('/');
    //http://localhost:3000/usuarios
    return this.http.post(route, usr);
  }

  editUsuarios(usr: any, id: any): Observable<any> {
    let route = [environment.apiUrl, 'usuarios', id].join('/');
    //http://localhost:3000/usuarios/:id
    return this.http.put(route, usr);
  }

  deleteUsuarios(id: any): Observable<any> {
    let route = [environment.apiUrl, 'usuarios', id].join('/');
    //http://localhost:3000/usuarios/:id
    return this.http.delete(route);
  }
}
