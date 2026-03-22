import { Component, effect, EventEmitter, Inject, input, Input, OnChanges, Output, signal } from '@angular/core';
import { Client } from '../../models/client.model';
import { Account } from '../../models/account.model';
import { BankService } from '../../services/bank.service';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { sign } from 'crypto';

@Component({
  selector: 'app-account-list',
  imports: [HlmCardImports],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css',
})

export class AccountList{
  client = input<Client | null>(null);
  accounts = signal<Account[]>([]);

  @Output() accountSelected = new EventEmitter<Account>();
  selectedAccount: Account | null = null;

  constructor(private bankService: BankService) {
    effect(() => {
      console.log('Client changed:', this.client());
      const c = this.client();
      if (c) {
        console.log('Fetching accounts for client ID:', c.id);
        this.bankService.getClientAccounts(c.id).subscribe(accounts => {
          this.accounts.set(accounts);
        });
      }
    });
  }

  onAccountClick(account: Account) {
    this.selectedAccount = account;
    this.accountSelected.emit(account);
  }
}
