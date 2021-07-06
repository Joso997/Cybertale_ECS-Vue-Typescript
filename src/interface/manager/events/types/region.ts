import { Manager } from './regionTypes/types'

export enum RegionEnum {Form}

export class RegionType {
    public static RegionTypes: { [index: number]: Manager.Events.Type.RegionAbstract } = { [RegionEnum.Form]: new Manager.Events.Type.Form() }
    public static Init () : void{
      // this.RegionTypes
      // this.RegionTypes[RegionEnum.Form] = new Types.Form()
    }
}
