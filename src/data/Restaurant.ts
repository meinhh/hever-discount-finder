export default class Restaurant {
	public constructor(public readonly imgUrl: string,
	public readonly name: string,
	public readonly description: string,
	public readonly area: string,
	public readonly city: string,
	public readonly address: string,
	public readonly phone: string,
	public readonly category: string,
	public readonly type: string,
	public readonly workDaysOpeningHours: string,
	public readonly fridayOpeningHours: string,
	public readonly saturdayOpeningHours: string,
	public readonly kosher: string,
	public readonly handicapAccessible: string,
	public readonly website: string,
	public readonly latitude: number,
	public readonly longitude: number) {}
}

export interface RestaurantDto {
	img: string;
	name: string;
	desc: string;
	area: string;
	city: string;
	address: string;
	phone: string;
	category: string;
	type: string;
	hours15: string;
	hours6: string;
	hours7: string;
	kosher: string;
	handicap: string;
	website: string;
	latitude: string;
	longitude: string;
}