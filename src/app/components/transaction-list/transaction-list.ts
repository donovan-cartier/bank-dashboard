import { Component, effect, input, Input, OnChanges, signal } from '@angular/core';
import { Account } from '../../models/account.model';
import { Transaction } from '../../models/transaction.model';
import { BankService } from '../../services/bank.service';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  imports: [HlmTableImports, DatePipe],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css',
})
export class TransactionList {
  account = input<Account | null>(null);

  transactions = signal<Transaction[]>([]);

  constructor(private bankService: BankService) {
    effect(() => {
      console.log('Account changed:', this.account());
      const a = this.account();
      if (a) {
        console.log('Fetching transactions for account ID:', a.id);
        this.bankService.getAccountTransactions(a.id).subscribe(transactions => {
          this.transactions.set(transactions);
        });
      }
    });
  }

}
