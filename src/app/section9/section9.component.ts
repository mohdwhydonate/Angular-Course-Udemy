import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-section9',
  templateUrl: './section9.component.html',
  styleUrls: ['./section9.component.css'],
  providers: [AccountsService, LoggingService],
})
export class Section9Component implements OnInit {
  account: { name: string; status: string }[] = [];
  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.account = this.accountService.accounts;
  }
}
