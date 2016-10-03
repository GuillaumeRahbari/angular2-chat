import { Routes, RouterModule } from "@angular/router";

import { HomeRoutes }  from "./home/index";

import {ModuleWithProviders} from "@angular/core";

export const appRoutes: Routes = [
    ...HomeRoutes
];

export const appRoutingProviders: any[] = [ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
