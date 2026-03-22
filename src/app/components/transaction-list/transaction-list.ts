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
      const a = this.account();
      if (a) {
        this.bankService.getAccountTransactions(a.id).subscribe(transactions => {
          this.transactions.set(transactions);
        });
      }
    });
  }

}
