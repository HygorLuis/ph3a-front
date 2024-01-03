import { FormControl } from "@angular/forms";

export interface ParcelaForm {
  parcela: FormControl<string | number | null>;
  valor: FormControl<string | number | null>;
  dataVencimento: FormControl<string | Date | null>;
}
