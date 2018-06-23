import { Injectable } from "@angular/core";
import { HostService } from "../../host.service";
import { TabIrrf, Faixa } from "./tab-irrf.model";
import * as _ from 'lodash';
import { promise } from "selenium-webdriver";

@Injectable()
export class TabIrrfService {
  constructor(private hostService: HostService) { }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultGet("tabirrf/getall", null, e => {
        let faixas: any[] = e.data.result;

        if (faixas.length > 0) {
          let data = _.groupBy(faixas, f => f.perInicial);
          let tabs: TabIrrf[] = [];

          for (var k in data) {
            let t: any[] = data[k];
            let primF = t[0];
            tabs.push(new TabIrrf(primF.perInicial, primF.perFinal, _.orderBy(t.map(f => f as Faixa), f => f.valInicial)));
          }

          resolve(_.orderBy(tabs, t => t.perInicial));
        }

        resolve([]);
      });
    });
  }

  delete(faixas: Faixa[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultPost("tabirrf/delete", faixas.map(f => { return { id: f.id } }), e => {
        resolve();
      })
    });
  }

  salva(tab: TabIrrf): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hostService.defaultPost("tabirrf/save", tab.faixas.map(f => { return { id: f.id, perInicial: tab.perInicial, perFinal: tab.perFinal, valInicial: f.valInicial, valFinal: f.valFinal, percentual: f.percentual, deducao: f.deducao } }), e => {
        resolve();
      })
    });
  }

}

