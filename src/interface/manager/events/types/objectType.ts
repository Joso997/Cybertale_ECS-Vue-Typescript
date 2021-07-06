import { Manager } from './objectTypes/types'

export enum ObjectTypeEnum {
  List, Field, SubmitButton
}

export class ObjectType {
 public static ObjectTypes: { [index: number]: Manager.Events.Type.ObjectTypeAbstract } =
 {
   [ObjectTypeEnum.Field]: new Manager.Events.Type.Field(),
   [ObjectTypeEnum.SubmitButton]: new Manager.Events.Type.SubmitButton()
 }
}
