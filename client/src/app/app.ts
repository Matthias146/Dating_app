import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('client');
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('Completed Http Request'),
    });
  }
}
