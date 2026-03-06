import { Intent } from './bkashResponse.interface'

export interface ICreatePayment {
  amount: number
  orderID: string
  intent: Intent
  merchantAssociationInfo?: string
  callBack: string
}
