import { Position } from "../enum/position.enum";

export class TemperatureSensorData{
  sensorId!: string
  roomId!: number;
  notedDate!: Date;
  temperature!: number
  devicePosition!: Position
}