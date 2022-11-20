class UrlUtil {
    static Generate(take: number, skip: number): string {
        const url = `https://www.hellofresh.dk/gw/recipes/recipes/search?country=DK&locale=da-DK&product=classic-box&take=${take}skip=${skip}`;
        return url;
    }
}

export default UrlUtil;
