export class StatChangeEventArgs {
    public StatType:any/* interactableObjectType.InteractableObjectStatEnum */
    public Amount:any;

    public constructor (_statType: any/* InteractableObjectStatEnum */, _amount: any) {
      this.StatType = _statType
      this.Amount = _amount
    }
}

export type StatChangeDel = (e: StatChangeEventArgs) => void;
