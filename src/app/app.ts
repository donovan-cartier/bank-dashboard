import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientList } from './components/client-list/client-list';
import { Client } from './models/client.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bank-dashboard');

  onClientSelected(client: Client) {
    console.log('Selected client:', client);
  }
}
