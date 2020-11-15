import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => {
        console.log(result);
        return result.matches;
      }),
      shareReplay()
    );
  @ViewChild('drawer') sidenav: any;

  menuItems = [
    { name: 'home', icon: 'home' },
    { name: 'about', icon: 'info' },
    { name: 'projects', icon: 'code' },
    { name: 'contact', icon: 'share' },
  ];
  constructor(private breakpointObserver: BreakpointObserver) {}
  toogleSidenav(): void {
    this.sidenav.toggle();
  }
}
