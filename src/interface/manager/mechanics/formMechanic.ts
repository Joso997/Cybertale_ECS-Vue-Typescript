import { ObjectTemplate } from '../containerClasses/objectTemplate'
import { ObjectType, ObjectTypeEnum } from '../events/types/objectType'
import { SubObjectTypeEnum } from '../events/types/subObjectType'
import { MechanicAbstract } from './mechanicAbstract'
import { Manager as Stat } from '../events/types/statTypes/types'
import http from '@/http-common'
import { StatType, StatTypeEnum } from '../events/types/statType'
import router from '@/router'

export namespace Manager.Mechanic{

  export class FormMechanic extends MechanicAbstract {
    private id = -1;
    private inEdit = false;

    public async InitGet (_id = -1): Promise<ObjectTemplate[]> {
      this.id = _id
      if (this.id === -1) {
        this.id = (await http.get('http://blog.test/api/entity/' + this.id)).data
        console.log(this.id)
        const response = await http.get('http://blog.test/api/form')
        return (this.ObjectTemplates = response.data.map((_object: any) => {
          return new ObjectTemplate(_object.Region, _object.ObjectEnum, _object.SubObjectEnum, _object.ActionEnum, this.reStructure(_object.Stats, { [StatTypeEnum.Id]: StatType.StatTypes[StatTypeEnum.Id]().CreateStat().InitData(String(this.id)) }))
        }))
      }
      const response = await http.get('http://blog.test/api/entity/' + this.id)
      this.inEdit = true
      return (this.ObjectTemplates = response.data.map((_object: any) => {
        return new ObjectTemplate(_object.Region, _object.ObjectEnum, _object.SubObjectEnum, _object.ActionEnum, this.reStructure(_object.Stats))
      }))
    }

    private forEachElement (data: any) : ObjectTemplate[] {
      let _temp: ObjectTemplate[] = []
      data.forEach((_list: any) => {
        _temp = _temp.concat(_list.map((_object: any) => {
          return new ObjectTemplate(_object.Region, _object.ObjectEnum, _object.SubObjectEnum, _object.ActionEnum, this.reStructure(_object.Stats))
        }))
      })
      return _temp
    }

    private reStructure (stats: any, append: any = null): any {
      let temp = {}
      stats.forEach((_stat : any, _index: number) => { temp = Object.assign(temp, { [_index]: StatType.StatTypes[_index]().CreateStat().InitData(_stat.Data != null ? _stat.Data : '') }) })
      if (append !== null) { temp = Object.assign(temp, append) }
      return temp
    }

    public InitSet (_objectTemplates: ObjectTemplate[]): ObjectTemplate[] {
      this.ObjectTemplates = _objectTemplates
      return this.ObjectTemplates
    }

    protected SubscribeConditions (): void {
      ObjectType.ObjectTypes[ObjectTypeEnum.Button].SubscribeLogic(this.Button.bind(this))
    }

    public UnsubscribeConditions () {
      ObjectType.ObjectTypes[ObjectTypeEnum.Button].NullifyLogic()
    }

    protected Button (_subObjectType: SubObjectTypeEnum): void {
      switch (_subObjectType) {
        case SubObjectTypeEnum.Middle:
          if (this.inEdit) {
            http.patch('http://blog.test/api/entity/' + this.id, this.ObjectTemplates/* .filter((object) => { return object.ObjectEnum === ObjectTypeEnum.Field }) */)
              .then(response => (router.push({ name: 'Show', params: { id: response.data.id } })))
          } else {
            http.post('http://blog.test/api/entity', this.ObjectTemplates/* .filter((object) => { return object.ObjectEnum === ObjectTypeEnum.Field }) */)
              .then(response => (router.push({ name: 'Show', params: { id: response.data.id } })))
          }
          break
        default:
          break
      }
    }
  }

}
