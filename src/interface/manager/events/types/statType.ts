import { Manager } from './statTypes/types'

export enum StatTypeEnum {Title, Value}

export class StatType {
 public static StatTypes: { [index: number]: Manager.Events.Type.CreateStatDel } =
 {
   [StatTypeEnum.Title]: new Manager.Events.Type.Title().CreateStat,
   [StatTypeEnum.Value]: new Manager.Events.Type.Value().CreateStat
 }

 public static Init () : void{
   // ObjectType.ObjectTypes[ObjectTypeEnum.Field] = new Types.Object.Field()
 }
}
