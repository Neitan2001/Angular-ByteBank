import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaModel } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  public transferencias: TransferenciaModel[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: TransferenciaModel[]) => {
      this.transferencias = transferencias;
    })
  }

}
