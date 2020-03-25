import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { MainService } from './service/main.service';
import { MenuModel } from './model/menu.model';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('vcref', { read: ViewContainerRef }) vcref: ViewContainerRef;

  public menuList: Array<MenuModel> = new Array<MenuModel>();

  constructor(
    private _mainService: MainService,
    private componentRes: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this._mainService.GetMenu().subscribe(response => {
      this.menuList = response;
    });
  }

  async openPage(item: MenuModel) {
    this.vcref.clear();
    const { PageComponent } = await import('../page/page.component');

    let refPage = this.vcref.createComponent(this.componentRes.resolveComponentFactory(PageComponent));
    (<PageComponent>refPage.instance).text = item.content;
  }

}