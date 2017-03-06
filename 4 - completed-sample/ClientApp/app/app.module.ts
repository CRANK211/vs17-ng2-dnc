import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component'
import { HeaderComponent } from './components/shared/header/header.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountSummaryComponent } from './components/account/account-summary/account-summary.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountActivityComponent } from './components/account/acccount-activity/account-activity.component';
import { AccountService } from './components/shared/account.service';
import { FormatAccountNumberPipe } from './components/shared/format-account-number.pipe';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        AccountListComponent,
        HeaderComponent,
        AccountSummaryComponent,
        AccountDetailComponent,
        AccountActivityComponent,
        FormatAccountNumberPipe
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: AccountListComponent },
            { path: 'detail/:id', component: AccountDetailComponent },
            { path: '**', redirectTo: 'account' }
        ])
    ],
    providers: [ AccountService ]
})
export class AppModule {
}
