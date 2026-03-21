import { Client } from "./client.model";

export interface Account {
    id: number;
    iban: string;
    type: string;
    balance: number;
    client: Client;
}