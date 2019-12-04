import Restaurant, {RestaurantDto} from "./Restaurant";

export default class DataFetcher {
	private readonly URL = 'https://www.hvr.co.il/static/foodcard_branches.json';

	public async get(): Promise<Restaurant[]> {
		const data = await this.getData();
		return data.map(this.format);
	}

	private async getData(): Promise<RestaurantDto[]> {
		const res = await fetch(this.URL);
		return await res.json();
	}

	private format(dto: RestaurantDto): Restaurant {
		return new Restaurant(dto.img, dto.name, dto.desc, dto.area, dto.city, dto.address,
			dto.phone, dto.category, dto.type, dto.hours15, dto.hours6, dto.hours7, dto.kosher,
			dto.handicap, dto.website, parseFloat(dto.latitude), parseFloat(dto.longitude));
	}
}