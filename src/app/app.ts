import { Component, signal } from '@angular/core';
import { ClientList } from './components/client-list/client-list';
import { Client } from './models/client.model';
import { Header } from './components/header/header';
import { Dashboard } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [ClientList, Header, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bank-dashboard');
  selectedClient = signal<Client | null>(null);

  onClientSelected(client: Client) {
    console.log('Selected client:', client);
    this.selectedClient.set(client);
  }
}
