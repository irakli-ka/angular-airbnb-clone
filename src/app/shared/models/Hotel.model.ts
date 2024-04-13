import { Address } from './Address.model';
import { Image } from './Image.model';
import { Owner } from './Owner.model';
import { Room } from './Room.model';


export interface Hotel {
  allImages: string[];
  id?: number;
  name?: string;
  address?: Address;
  description?: string;
  rating?: number;
  rooms: Room[];
  images: Image[];
  checkInTime?: {
    ticks?: number;
    days?: number;
    hours?: number;
    milliseconds?: number;
    minutes?: number;
    seconds?: number;
    totalDays?: number;
    totalHours?: number;
    totalMilliseconds?: number;
    totalMinutes?: number;
    totalSeconds?: number;
  };
  checkOutTime?: {
    ticks?: number;
    days?: number;
    hours?: number;
    milliseconds?: number;
    minutes?: number;
    seconds?: number;
    totalDays?: number;
    totalHours?: number;
    totalMilliseconds?: number;
    totalMinutes?: number;
    totalSeconds?: number;
  };
  owner?: Owner;
}