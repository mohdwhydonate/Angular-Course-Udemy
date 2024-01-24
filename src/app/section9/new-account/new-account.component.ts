import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private loggingservice: LoggingService,
    private accountserve: AccountsService
  ) {
    this.accountserve.statusUpdated.subscribe((status: string) =>
      alert('New Staus:' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountserve.addAccount(accountName, accountStatus);
    // this.loggingservice.logStatusChange(accountStatus);
  }
}
