import JobPageData from "../interfaces/JobPageData";
import ObjectExtended from "../utils/ObjectExtended";
import cheerio from "cheerio";

class ScrapeJobPageData {
	readonly #html: string;

	constructor(html: string) {
		this.#html = html;
	}

	extract(): JobPageData {
		let extract = this.extractDataV1();
		if(ObjectExtended.isEmpty(extract)) extract = this.#fillNoData();
		return this.#sanitizeNaN(extract);
	}

	extractDataV1(): JobPageData {
		const query = "";
		return this.#execScrapeQuery(query);
	}

	#execScrapeQuery(query: string): JobPageData {
		const $ = cheerio.load(this.#html);
		return {} as JobPageData;
	}

	#fillNoData(): JobPageData {
		const providers = "No Data";
		return {providers};
	}

	#sanitizeNaN(pageData: JobPageData): JobPageData {
		let {providers} = {...pageData};
		if(String(providers) === "NaN") providers = "No Data";
		return {providers};
	}
}

export default ScrapeJobPageData;