import { Component } from '@angular/core';
import { HlmH1 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'app-header',
  imports: [HlmH1],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
