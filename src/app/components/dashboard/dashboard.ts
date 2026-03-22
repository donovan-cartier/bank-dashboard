import { Component, effect, input, Input, signal } from '@angular/core';
import { Client } from '../../models/client.model';
import { HlmMuted, HlmH2, HlmP } from '@spartan-ng/helm/typography';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { AccountList } from '../account-list/account-list';
import { TransactionList } from "../transaction-list/transaction-list";
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-dashboard',
  imports: [HlmMuted, AccountList, HlmSeparatorImports, TransactionList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  client = input<Client | null>(null);
  selectedAccount = signal<Account | null>(null);

  constructor() {
    effect(() => {
      this.client();
      this.selectedAccount.set(null);
    });
  }

  onAccountSelected(account: Account) {
    this.selectedAccount.set(account);
  }
}
