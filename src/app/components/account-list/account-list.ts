import { Component, effect, EventEmitter, Inject, input, Input, OnChanges, output, Output, signal } from '@angular/core';
import { Client } from '../../models/client.model';
import { Account } from '../../models/account.model';
import { BankService } from '../../services/bank.service';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
  selector: 'app-account-list',
  imports: [HlmCardImports],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css',
})

export class AccountList{
  client = input<Client | null>(null);
  accounts = signal<Account[]>([]);

  accountSelected = output<Account>();
  selectedAccount: Account | null = null;

  constructor(private bankService: BankService) {
    effect(() => {
      const c = this.client();
      if (c) {
        this.selectedAccount = null;
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
