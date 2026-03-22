import { Component, signal } from '@angular/core';
import { ClientList } from './components/client-list/client-list';
import { Client } from './models/client.model';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [ClientList, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bank-dashboard');

  onClientSelected(client: Client) {
    console.log('Selected client:', client);
  }
}
