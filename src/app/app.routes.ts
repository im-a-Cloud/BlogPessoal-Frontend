import { Routes,RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: "usuario", loadComponent:() => import('./componentes/lista-usuarios-componente/lista-usuarios-componente.component').then
        (m=> m.ListaUsuariosComponenteComponent)
        
    },
        {path: "login", loadComponent:()=> import('./componentes/login/login.component').then
            (m => m.LoginComponent)
    },
    {
        path: "cadastro", loadComponent:() => import('./componentes/cadastro/cadastro.component').then
        (m => m.CadastroComponent)
    }
];

