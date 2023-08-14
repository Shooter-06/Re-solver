// export declare type SiteResolvedData = Data & { site?: PortalSites };

// export const siteResolver: Resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const service = inject(PortalSiteService);
//   const idParam = route.paramMap.get('id');
//   let id: number;

//   if (idParam) {
//     id = parseInt(idParam, 10);
//     if (isNaN(id) || !isFinite(id)) {
//       return of(undefined);
//     }
//   } else {
//     return undefined;
//   }

//   return service.get(id);
// };


// import { Injectable, Inject } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { PortalSites, PortalSiteService } from './path-to-your-service'; // Please update the import path

// type Data = any; // Define your Data type if required

// export declare type SiteResolvedData = Data & { site?: PortalSites };

// @Injectable({
//   providedIn: 'root',
// })
// export class SiteResolver implements Resolve<SiteResolvedData> {
//   constructor(@Inject(PortalSiteService) private service: PortalSiteService) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SiteResolvedData> | Promise<SiteResolvedData> | SiteResolvedData {
//     const idParam = route.paramMap.get('id');
//     let id: number;

//     if (idParam) {
//       id = parseInt(idParam, 10);
//       if (isNaN(id) || !isFinite(id)) {
//         return of(undefined);
//       }
//     } else {
//       return undefined;
//     }

//     return this.service.get(id);
//   }
// }


import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortalSiteService } from './portal-site.service'; // Import path should be adjusted based on your project structure
import { SiteResolvedData } from './site-resolved-data.model'; // Import path should be adjusted based on your project structure

@Injectable({
  providedIn: 'root',
})
export class SiteResolver implements Resolve<SiteResolvedData> {
  constructor(private service: PortalSiteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SiteResolvedData> {
    const idParam = route.paramMap.get('id');
    let id: number;

    if (idParam) {
      id = parseInt(idParam, 10);
      if (isNaN(id) || !isFinite(id)) {
        return of({ site: undefined });
      }
    } else {
      return of({ site: undefined });
    }

    return this.service.get(id).pipe(map(site => ({ site })));
  }
}
