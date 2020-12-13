import {Component, OnInit} from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string; }[] = [];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    console.log('asap');
    console.log(this.accountsService.accounts);
    this.accounts = this.accountsService.accounts;
  }
}
