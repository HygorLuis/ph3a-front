export enum TipoCalculo {
  Linear = 1,
  Capitalizado = 2
}

export const TipoCalculoLabel = new Map<number, string>([
  [TipoCalculo.Linear, 'Linear'],
  [TipoCalculo.Capitalizado, 'Capitalizado']
]);
