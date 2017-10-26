import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {CardListComponent} from './card-list/card-list.component';
import {CardContentDirective, CardDirective} from './card-list/card.component';
import {FragmentDirective} from './shared/fragment.directive';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    CardDirective,
    CardListComponent,
    CardContentDirective,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    FragmentDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    DataTableModule,
    DialogModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
