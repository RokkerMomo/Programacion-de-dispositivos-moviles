import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface resultados{
  page:number;
  results:any[];
  total_pages:number;
  total_results:number;
}



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) {  }

  PeliculasPopulares(page = 1): Observable<resultados>{
    return this.http.get<resultados>(`${environment.url}/movie/popular?api_key=${environment.ApiKey}&language=es&page=${page}`);

  }

  buscarNombre(texto,page): Observable<resultados>{
    return this.http.get<resultados>(`https://api.themoviedb.org/3/search/movie?api_key=${environment.ApiKey}&query=${texto}&language=es&page=${page}&with_result=1`);

  }

  genero(page,genero): Observable<resultados>{
    return this.http.get<resultados>(`https://api.themoviedb.org/3/discover/movie?api_key=${environment.ApiKey}&language=es&page=${page}&with_genres=${genero}&results=1`);

  }

  DetallesPeliculas(id: string){
    return this.http.get(`${environment.url}/movie/${id}?api_key=${environment.ApiKey}&language=es`)
  }

  Trailer(id: string){
    return this.http.get(`${environment.url}/movie/${id}/videos?api_key=${environment.ApiKey}&language=es`)
  }

  reviews(id:string){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${environment.ApiKey}&language=en-US&page=1s`)
  }

  PedirToken(){
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${environment.ApiKey}`,)
  }

  request(datos){
    return this.http.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${environment.ApiKey}`, datos)
  }

  Validar(token){
    return this.http.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${environment.ApiKey}`, token)
  }
  
  cerrarsesion(id){
    return this.http.delete(`https://api.themoviedb.org/3/authentication/session?api_key=${environment.ApiKey}`,id)
  }

  perfildetalles(user){
    return this.http.get(`https://api.themoviedb.org/3/account?api_key=${environment.ApiKey}&session_id=${user}`)
  }

  verfavoritos(cuenta,idsesion):Observable<resultados>{
    return this.http.get<resultados>(`https://api.themoviedb.org/3/account/${cuenta}/favorite/movies?api_key=${environment.ApiKey}&session_id=${idsesion}`)
  }


  agregarfavorito(cuenta,idsesion,pelicula){
    return this.http.post(`https://api.themoviedb.org/3/account/${cuenta}/favorite?api_key=${environment.ApiKey}&session_id=${idsesion}`,pelicula)
  }


}
