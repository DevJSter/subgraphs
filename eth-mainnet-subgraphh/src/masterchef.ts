import { BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
  EmergencyWithdraw as EmergencyWithdrawEvent,
  Referral as ReferralEvent,
  ReferralPaid as ReferralPaidEvent
} from "../generated/MasterChef/MasterChef"
import {
  Deposit,
  Withdraw,
  EmergencyWithdraw,
  Referral,
  ReferralPaid
} from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.user = event.params.user
  entity.pid = event.params.pid
  entity.amount = event.params.amount
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.user = event.params.user
  entity.pid = event.params.pid
  entity.amount = event.params.amount
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {
  let entity = new EmergencyWithdraw(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.user = event.params.user
  entity.pid = event.params.pid
  entity.amount = event.params.amount
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleReferral(event: ReferralEvent): void {
  let entity = new Referral(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.referrer = event.params.referrer
  entity.farmer = event.params.farmer
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleReferralPaid(event: ReferralPaidEvent): void {
  let entity = new ReferralPaid(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.user = event.params.user
  entity.userTo = event.params.userTo
  entity.reward = event.params.reward
  entity.timestamp = event.block.timestamp
  entity.save()
}