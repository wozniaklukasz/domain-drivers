import { AvailableResourceCapability } from './availableResourceCapability';

export class SimulatedCapabilities {
  constructor(public readonly capabilities: AvailableResourceCapability[]) {}

  public add = (
    ...newCapabilities: AvailableResourceCapability[]
  ): SimulatedCapabilities => {
    const newAvailabilities = [...this.capabilities, ...newCapabilities];
    return new SimulatedCapabilities(newAvailabilities);
  };
}
