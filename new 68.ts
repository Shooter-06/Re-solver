export declare type SiteResolvedData = Data & { site?: PortalSites };

export const siteResolver: Resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const service = inject(PortalSiteService);
  const idParam = route.paramMap.get('id');
  let id: number;

  if (idParam) {
    id = parseInt(idParam, 10);
    if (isNaN(id) || !isFinite(id)) {
      return of(undefined);
    }
  } else {
    return undefined;
  }

  return service.get(id);
};
