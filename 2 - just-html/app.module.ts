import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountSummaryComponent } from './components/account/account-summary/account-summary.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        AccountListComponent,
        AccountDetailComponent,
        AccountSummaryComponent,
        HeaderComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: AccountListComponent },
            { path: '**', redirectTo: 'account' }
        ])
    ]
})
export class AppModule {
}
