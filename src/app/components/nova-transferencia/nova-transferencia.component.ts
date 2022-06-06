import { TransferenciaModel } from './../../models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valorErro = new EventEmitter<string>();

  public valor: number;
  public destino: string;

  constructor(private service: TransferenciaService){}

  transferir() {
    console.log('Solicitada nova transferencia');
    if(this.valorValido()) {
      const data = new Date()
      const valorEmitir: TransferenciaModel = { valor: this.valor, destino: this.destino, data};
      this.service.adicionarTransferencia(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
      }, error => {
        console.log(error);
      });
    }
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }

  valorValido() {
    const valido = this.valor > 0;

    if(!valido) {
      this.valorErro.emit("Erro ao inserir o valor!");
    }
    return valido;
  }
}
