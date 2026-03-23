import { Component, output, signal } from '@angular/core';
import { ClientList } from './components/client-list/client-list';
import { Client } from './models/client.model';
import { Header } from './components/header/header';
import { Dashboard } from './components/dashboard/dashboard';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [ClientList, Dashboard, HlmSidebarImports, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bank-dashboard');
  selectedClient = signal<Client | null>(null);

  onClientSelected(client: Client) {
    this.selectedClient.set(client);
  }
}
