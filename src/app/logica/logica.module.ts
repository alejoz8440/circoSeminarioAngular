import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoClienteComponent } from './tipo-cliente/tipo-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DulceriaComponent } from './dulceria/dulceria.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EspectaculoComponent } from './espectaculo/espectaculo.component';
import { TaquillaComponent } from './taquilla/taquilla.component';

@NgModule({
  declarations: [TipoClienteComponent, ClienteComponent, DulceriaComponent, EmpleadoComponent, EspectaculoComponent, TaquillaComponent],
  imports: [
    CommonModule
  ]
})
export class LogicaModule { }
