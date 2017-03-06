
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'account-summary',
    templateUrl: './account-summary.component.html',
    styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent {
    constructor(private router: Router) {
    }

    navigateToDetail() {
        this.router.navigate(['detail', '123456']);
    }
}
    