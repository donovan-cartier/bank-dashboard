import { Component, EventEmitter, OnInit, output, Output } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { Client } from '../../models/client.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch, lucideUser } from '@ng-icons/lucide';

import { HlmH2 } from '@spartan-ng/helm/typography';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';


@Component({
  selector: 'app-client-list',
  imports: [CommonModule, HlmH2, HlmButtonImports, HlmInputGroupImports, NgIcon],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css',
  providers: [provideIcons({ lucideSearch, lucideUser })],

})
export class ClientList{
  clientSelected = output<Client>();
  
  clients$: Observable<Client[]>;
  
  constructor(private bankService: BankService) {
    this.clients$ = this.bankService.getClients();
  }

  onClientClick(client: Client) {
    this.clientSelected.emit(client);
  }

}
