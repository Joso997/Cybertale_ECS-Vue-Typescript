import { Manager } from './actionTypes/types'

export enum ActionTypeEnum {None, Click}

export class ActionType {
 public static ActionTypes: { [index: number]: Manager.Events.Type.MethodTypeAbstract } = {
   [ActionTypeEnum.None]: new Manager.Events.Type.None(),
   [ActionTypeEnum.Click]: new Manager.Events.Type.Click()
 }

 public static Init () : void{
   // ObjectType.ObjectTypes[ObjectTypeEnum.Field] = new Types.Object.Field()
 }
}
