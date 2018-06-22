import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";
import { TabSalFamilia, Faixa } from "./tab-sal-familia.model";
import * as _ from 'lodash';
import { promise } from "selenium-webdriver";

@Injectable()
export class TabSalFamiliaService {
  constructor(private hostService: HostService) { }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultGet("tabsalfamilia/getall", null, e => {
        let faixas: any[] = e.data.result;

        if (faixas.length > 0) {
          let data = _.groupBy(faixas, f => f.perInicial);
          let tabs: TabSalFamilia[] = [];

          for (var k in data) {
            let t: any[] = data[k];
            let primF = t[0];
            tabs.push(new TabSalFamilia(primF.perInicial, primF.perFinal, _.orderBy(t.map(f => f as Faixa), f => f.valInicial)));
          }

          resolve(_.orderBy(tabs, t => t.perInicial));
        }

        resolve([]);
      });
    });
  }

  delete(faixas: Faixa[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultPost("tabsalfamilia/delete", faixas.map(f => { return { id: f.id } }), e => {
        resolve();
      })
    });
  }

  salva(tab: TabSalFamilia): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultPost("tabsalfamilia/save", tab.faixas.map(f => { return { id: f.id, perInicial: tab.perInicial, perFinal: tab.perFinal, valInicial: f.valInicial, valFinal: f.valFinal, valor: f.valor } }), e => {
        resolve();
      })
    });
  }

}

