import { ObjectTemplate } from '@/interface/manager/containerClasses/objectTemplate'
import { LogicDelegate } from '../objectTypes/types'
import { StatTypeEnum } from '../statType'
import { SubObjectTypeEnum } from '../subObjectType'
import http from '@/http-common'
import router from '@/router'
import { RegionEnum } from '../region'
import { ObjectType } from '../objectType'

export namespace Manager.Events.Type{

    export abstract class MethodTypeAbstract {
      // public abstract Enact():void;
      public abstract Act(_object:ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean;
    }

    export class None extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        return true
      }

      public Enact (): void {
        throw new Error('Method not implemented.')
      }
    }

    export class Insert extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response))
        return true
      }

      public async Enact (_data : any): Promise<any> {
        return await _data.charAt(0).toUpperCase() + _data.slice(1)
      }
    }

    export class Click extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        if (_object.Region === RegionEnum.TableColumn) {
          const _id = _object.Stats[StatTypeEnum.Id].Data
          switch (_object.SubObjectEnum) {
            case SubObjectTypeEnum.Left:// Izbriši
              http.delete('http://blog.test/api/entity/' + _id)
                .then(response => (router.go(0)))
              break
            case SubObjectTypeEnum.Middle: // Uredi
              router.push({ name: 'Edit', params: { id: _id } })
              break
            case SubObjectTypeEnum.Right: // Pregledaj
              router.push({ name: 'Show', params: { id: _id } })
              break
            default:
              break
          }
        } else {
          _invokeLogic(_object.SubObjectEnum)
        }
        return true
      }

      public Enact (): void {
        throw new Error('Method not implemented.')
      }
    }
}
