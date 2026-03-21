import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/client.model";
import { Account } from "../models/account.model";
import { Transaction } from "../models/transaction.model";

@Injectable({providedIn: "root"})
export class BankService {
    private http = inject(HttpClient);
    private apiUrl = "http://localhost:8080";

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(`${this.apiUrl}/clients`);
    }

    getClientById(id: number): Observable<Client> {
        return this.http.get<Client>(`${this.apiUrl}/clients/${id}`);
    }

    getClientAccounts(clientId: number): Observable<Account[]> {
        return this.http.get<Account[]>(`${this.apiUrl}/clients/${clientId}/accounts`);
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
    }
    
    getAccountById(id: number): Observable<Account> {
        return this.http.get<Account>(`${this.apiUrl}/accounts/${id}`);
    }

    getAccountTransactions(accountId: number): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(`${this.apiUrl}/accounts/${accountId}/transactions`);
    }

    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
    }

    getTransactionById(id: number): Observable<Transaction> {
        return this.http.get<Transaction>(`${this.apiUrl}/transactions/${id}`);
    }

}