import { Image } from './Image.model';

export interface Room {
    roomIs: number;
    roomType: string;
    pricePerNight: number;
    maxOccupancy: number;
    amenities: string[];
    roomImages: Image[];
}
