import { CadastroComponent } from './cadastro/cadastro.component';
import { InfoalunoComponent } from './infoaluno/infoaluno.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const Rotas: Routes = [
    {path:'infoaluno', component: InfoalunoComponent},
    {path:'cadastro', component: CadastroComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(Rotas);