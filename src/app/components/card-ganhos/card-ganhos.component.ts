import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ganhos',
  templateUrl: './card-ganhos.component.html',
  styleUrls: ['./card-ganhos.component.scss'],
})
export class CardGanhosComponent implements OnInit {
  public textoConsulta: string = 'valor consulta - renda ampla';
  public percentualIU: string = '6% - IU';
  public textoIU: string = 'bônus sinistralidade';
  public percentuaIQA: string = '6% - IQA';
  public textoIQA: string = 'bônus máximo dos indicadores gerais';
  public percentuaIndicadoresIndividuais: string = '18% - I.I';
  public textoIndicadoresIndividuais: string = 'bônus indicadores individuais';

  public cardGanhos: Array<{
    titulo: string;
    valorConsulta: number;
    textoConsulta: string;
    percentualIU: string;
    textoIU: string;
    percentuaIQA: string;
    textoIQA: string;
    percentuaIndicadoresIndividuais: string;
    textoIndicadoresIndividuais: string;
    valorTotal: number;
  }> = [
    {
      titulo: 'Valor consulta + bônus total',
      valorConsulta: 90,
      textoConsulta: this.textoConsulta,
      percentualIU: this.percentualIU,
      textoIU: this.textoIU,
      percentuaIQA: this.percentuaIQA,
      textoIQA: this.textoIQA,
      percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
      textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,
      valorTotal: 117,
    },
    {
      titulo:
        'Valor consulta + bônus máximo dos indicadores gerais e bônus dos indicadores individuais',
      valorConsulta: 90,
      textoConsulta: this.textoConsulta,
      percentualIU: this.percentualIU,
      textoIU: this.textoIU,
      percentuaIQA: this.percentuaIQA,
      textoIQA: this.textoIQA,
      percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
      textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,
      valorTotal: 111.60,
    },
    {
      titulo: 'Valor consulta + bônus total',
      valorConsulta: 90,
      textoConsulta: this.textoConsulta,
      percentualIU: this.percentualIU,
      textoIU: this.textoIU,
      percentuaIQA: this.percentuaIQA,
      textoIQA: this.textoIQA,
      percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
      textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,
      valorTotal: 111.60,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
