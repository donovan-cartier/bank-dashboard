import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Client } from "../models/client.model";
import { Account } from "../models/account.model";
import { Transaction } from "../models/transaction.model";
import { MOCK_CLIENTS, MOCK_ACCOUNTS, MOCK_TRANSACTIONS } from '../mocks/bank.mock';
import { environment } from '../../environments/environment';

@Injectable({providedIn: "root"})
export class BankService {
    private http = inject(HttpClient);
    private apiUrl = "http://localhost:8080";

    getClients(): Observable<Client[]> {
        if(environment.useMock) {
            return of(MOCK_CLIENTS);
        }
        return this.http.get<Client[]>(`${this.apiUrl}/clients`);
    }

    getClientById(id: number): Observable<Client> {
        if (environment.useMock) {
            return of(MOCK_CLIENTS.find(c => c.id === id)!);
        }
        return this.http.get<Client>(`${this.apiUrl}/clients/${id}`);
    }

    getClientAccounts(clientId: number): Observable<Account[]> {
        if (environment.useMock) {
            return of(MOCK_ACCOUNTS.filter(a => a.client.id === clientId));
        }
        return this.http.get<Account[]>(`${this.apiUrl}/clients/${clientId}/accounts`);
    }

    getAccounts(): Observable<Account[]> {
        if (environment.useMock) {
            return of(MOCK_ACCOUNTS);
        }
        return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
    }

    getAccountById(id: number): Observable<Account> {
        if (environment.useMock) {
            return of(MOCK_ACCOUNTS.find(a => a.id === id)!);
        }
        return this.http.get<Account>(`${this.apiUrl}/accounts/${id}`);
    }

    getAccountTransactions(accountId: number): Observable<Transaction[]> {
        if (environment.useMock) {
            return of(MOCK_TRANSACTIONS.filter(t => t.account.id === accountId));
        }
        return this.http.get<Transaction[]>(`${this.apiUrl}/accounts/${accountId}/transactions`);
    }

    getTransactions(): Observable<Transaction[]> {
        if (environment.useMock) {
            return of(MOCK_TRANSACTIONS);
        }
        return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
    }

    getTransactionById(id: number): Observable<Transaction> {
        if (environment.useMock) {
            return of(MOCK_TRANSACTIONS.find(t => t.id === id)!);
        }
        return this.http.get<Transaction>(`${this.apiUrl}/transactions/${id}`);
    }

}