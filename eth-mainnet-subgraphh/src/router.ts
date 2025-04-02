import { PairCreated as RouterPairCreated } from "../generated/Router/Router"
import { PairCreated } from "../generated/schema"

export function handleRouterPairCreated(event: RouterPairCreated): void {
  let entity = new PairCreated(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.pair = event.params.pair
  entity.timestamp = event.block.timestamp
  entity.save()
}