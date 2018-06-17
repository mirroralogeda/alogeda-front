import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";
import { TabSalFamilia, Faixa } from "./tab-sal-familia.model";
import { groupBy, orderBy } from 'lodash';
import { promise } from "selenium-webdriver";

@Injectable()
export class TabSalFamiliaService {
  constructor(private hostService: HostService) { }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultGet("tabsalfamilia/getall", null, e => {
        let faixas: any[] = e.data.result;

        if (faixas.length > 0) {
          let data = groupBy(faixas, f => f.perInicial);
          let tabs: TabSalFamilia[] = [];

          for (var k in data) {
            let t: any[] = data[k];
            let primF = t[0];
            tabs.push(new TabSalFamilia(primF.perInicial, primF.perFinal, orderBy(t.map(f => f as Faixa), f => f.valInicial)));
          }

          resolve(tabs);
        }

        resolve([]);
      });
    });
  }

  getVigente(tabs: TabSalFamilia[]): TabSalFamilia {
    return orderBy(tabs, t => t.perInicial).slice(-1)[0];
  }

  delete(faixa: Faixa): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultPost("tabsalfamilia/delete", { "id": faixa.id }, () => {
        resolve();
      })
    });
  }

  salva(tab: TabSalFamilia): Promise<any> {
    return Promise.all(tab.faixas.map(f => this.salvaFaixa(tab.perInicial, tab.perFinal, f)));
  }

  salvaFaixa(perInicial: Date, perFinal: Date, faixa: Faixa): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultPost("tabsalfamilia/save", { id: faixa.id, perInicial: perInicial, perFinal: perFinal, valInicial: faixa.valInicial, valFinal: faixa.valFinal, valor: faixa.valor }, e => {
        resolve();
      });
    });
  }

}

