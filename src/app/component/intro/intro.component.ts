import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  username = '';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  async submit() {
    localStorage.setItem('username', this.username);
    await this.router.navigate(['/play']);
  }

}
