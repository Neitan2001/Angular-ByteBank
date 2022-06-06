import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferenciaModel } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

constructor(private httpCliente: HttpClient) { }
  public listaTransferencias: TransferenciaModel[] = new Array();
  private url = 'http://localhost:3000/transferencias';

  todas(): Observable<TransferenciaModel[]> {
    return this.httpCliente.get<TransferenciaModel[]>(this.url);
  }

  adicionarTransferencia(transferencia: TransferenciaModel): Observable<TransferenciaModel> {
    return this.httpCliente.post<TransferenciaModel>(this.url, transferencia);
  }

}
