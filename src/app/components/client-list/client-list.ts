import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { Client } from '../../models/client.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HlmH2 } from '@spartan-ng/helm/typography';

import { HlmButtonImports } from '@spartan-ng/helm/button';


@Component({
  selector: 'app-client-list',
  imports: [CommonModule, HlmH2, HlmButtonImports],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css',
})
export class ClientList{
  @Output() clientSelected = new EventEmitter<Client>();
  
  clients$: Observable<Client[]>;
  
  constructor(private bankService: BankService) {
    this.clients$ = this.bankService.getClients();
  }

  onClientClick(client: Client) {
    this.clientSelected.emit(client);
  }

}
