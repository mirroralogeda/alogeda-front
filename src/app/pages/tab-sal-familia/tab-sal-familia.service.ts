import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";
import { TabSalFamilia, Faixa } from "./tab-sal-familia.model";
import { groupBy, orderBy } from 'lodash';

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
            tabs.push(new TabSalFamilia(primF.id, primF.perInicial, primF.perFinal, t.map(f => f as Faixa)));
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

}

