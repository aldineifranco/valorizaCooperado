import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ganhos',
  templateUrl: './card-ganhos.component.html',
  styleUrls: ['./card-ganhos.component.scss'],
})
export class CardGanhosComponent implements OnInit {
  public valorConsulta: number = 90;
  public textoConsulta: string = 'valor consulta - renda ampla';
  public percentualIU: string = '6% - IU';
  public textoIU: string = 'bônus sinistralidade';
  public percentuaIQA: string = '6% - IQA';
  public textoIQA: string = 'bônus máximo dos indicadores gerais';
  public percentuaIndicadoresIndividuais: string = '18% - I.I';
  public textoIndicadoresIndividuais: string = 'bônus indicadores individuais';

  public colorValorTotal: boolean = true;
  public iconeSomar: boolean = true;
  public iconeNaoSomar: boolean = true;

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
    colorValorTotal?: boolean;
    iconeSomar?: boolean;
    iconeNaoSomar?: boolean;
  }> = [
    {
      titulo: 'Valor consulta + bônus total',
      valorConsulta: this.valorConsulta,
      textoConsulta: this.textoConsulta,
      percentualIU: this.percentualIU,
      textoIU: this.textoIU,
      percentuaIQA: this.percentuaIQA,
      textoIQA: this.textoIQA,
      percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
      textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,

      valorTotal: 117,
      colorValorTotal: this.colorValorTotal,
      iconeSomar: this.iconeSomar,
    },

    {
      titulo:
        'Valor consulta + bônus máximo dos indicadores gerais e bônus dos indicadores individuais',
      valorConsulta: this.valorConsulta,
      textoConsulta: this.textoConsulta,
      percentualIU: this.percentualIU,
      textoIU: this.textoIU,
      percentuaIQA: this.percentuaIQA,
      textoIQA: this.textoIQA,
      percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
      textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,

      valorTotal: 111.6,
      iconeNaoSomar: this.iconeNaoSomar,
    },

    {
      titulo:
        'Valor consulta + bônus máximo dos indicadores gerais e bônus dos indicadores individuais',
      valorConsulta: this.valorConsulta,
      textoConsulta: this.textoConsulta,
      percentualIU: this.percentualIU,
      textoIU: this.textoIU,
      percentuaIQA: this.percentuaIQA,
      textoIQA: this.textoIQA,
      percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
      textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,

      valorTotal: 111.6,
      iconeSomar: this.iconeSomar,
    },

    {
      titulo:
        'Valor consulta com bônus do IU e com bônus máximo dos indicadores gerais',
      valorConsulta: this.valorConsulta,
      textoConsulta: this.textoConsulta,
      percentualIU: this.percentualIU,
      textoIU: this.textoIU,
      percentuaIQA: this.percentuaIQA,
      textoIQA: this.textoIQA,
      percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
      textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,

      valorTotal: 100.80,
      iconeSomar: this.iconeSomar,
      },
    
      {
        titulo:
          'Valor consulta com bônus do IU e com bônus máximo dos indicadores gerais',
        valorConsulta: this.valorConsulta,
        textoConsulta: this.textoConsulta,
        percentualIU: this.percentualIU,
        textoIU: this.textoIU,
        percentuaIQA: this.percentuaIQA,
        textoIQA: this.textoIQA,
        percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
        textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,
  
        valorTotal: 95.40,
        iconeSomar: this.iconeSomar,
      },

      {
        titulo:
          'Valor consulta + bônus IQA (indicadores gerais)',
        valorConsulta: this.valorConsulta,
        textoConsulta: this.textoConsulta,
        percentualIU: this.percentualIU,
        textoIU: this.textoIU,
        percentuaIQA: this.percentuaIQA,
        textoIQA: this.textoIQA,
        percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
        textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,
  
        valorTotal: 95.40,
        iconeSomar: this.iconeSomar,
      },

      {
        titulo:
          'Valor consulta + bônus IQA (indicadores individuais)',
        valorConsulta: this.valorConsulta,
        textoConsulta: this.textoConsulta,
        percentualIU: this.percentualIU,
        textoIU: this.textoIU,
        percentuaIQA: this.percentuaIQA,
        textoIQA: this.textoIQA,
        percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
        textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,
  
        valorTotal: 106.2,
        iconeSomar: this.iconeSomar,
      },

      {
        titulo:
          'Valor consulta sem bônus',
        valorConsulta: this.valorConsulta,
        textoConsulta: this.textoConsulta,
        percentualIU: this.percentualIU,
        textoIU: this.textoIU,
        percentuaIQA: this.percentuaIQA,
        textoIQA: this.textoIQA,
        percentuaIndicadoresIndividuais: this.percentuaIndicadoresIndividuais,
        textoIndicadoresIndividuais: this.textoIndicadoresIndividuais,
  
        valorTotal: 90,
        iconeSomar: this.iconeSomar,
      },
  ];

  constructor() {}

  ngOnInit(): void {}
}
