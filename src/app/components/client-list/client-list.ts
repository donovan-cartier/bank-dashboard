import { Component, EventEmitter, OnInit, output, Output } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { Client } from '../../models/client.model';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
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
export class ClientList {
  clientSelected = output<Client>();
  selectedClient: Client | null = null;

  filteredClients$: Observable<Client[]>;

  private searchTerm = new BehaviorSubject<string>('');

  constructor(private bankService: BankService) {
    this.filteredClients$ = combineLatest([this.bankService.getClients(), this.searchTerm]).pipe(
      map(([clients, term]) =>
        clients.filter((c) =>
          `${c.firstName} ${c.lastName}`.toLowerCase().includes(term.toLowerCase()),
        ),
      ),
    );
  }

  onClientClick(client: Client) {
    this.selectedClient = client;
    this.clientSelected.emit(client);
  }

  search($event: Event) {
    const term = ($event.target as HTMLInputElement).value;
    this.searchTerm.next(term);
  }
}
