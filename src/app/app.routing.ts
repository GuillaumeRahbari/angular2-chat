import { Routes, RouterModule } from "@angular/router";

import { NameRoutes }  from "./name/index";

import {ModuleWithProviders} from "@angular/core";

export const appRoutes: Routes = [
    ...NameRoutes
];

export const appRoutingProviders: any[] = [ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);