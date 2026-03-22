import { Component, Input, OnChanges } from '@angular/core';
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
export class TransactionList implements OnChanges {
  @Input() account: Account | null = null;

  transactions: Transaction[] = [];

  constructor(private bankService: BankService) {}

  ngOnChanges() {

    if (this.account) {
      this.bankService.getAccountTransactions(this.account.id).subscribe(transactions => {
        this.transactions = transactions;
      });
    }
  }

}
