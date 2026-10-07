import { Component } from '@angular/core';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
