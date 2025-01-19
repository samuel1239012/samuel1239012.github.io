import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Se você estiver usando rotas
import { TopoComponent } from './topo/topo.component';
import { AppComponent } from './app.component';  // AppComponent permanece como o bootstrap

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // Não é necessário importar componentes standalone aqui
  ],
  providers: [],
  bootstrap: [AppComponent]  // AppComponent ainda é o bootstrap
})
export class AppModule {}
