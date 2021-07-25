import { StatTypeEnum } from '../events/types/statType'

export class StatChangeEventArgs {
    public StatType:StatTypeEnum
    public Amount:any;

    public constructor (_statType: StatTypeEnum, _amount: any) {
      this.StatType = _statType
      this.Amount = _amount.target.value
    }
}

export type StatChangeDel = (e: StatChangeEventArgs) => void;
