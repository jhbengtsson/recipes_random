import log from './Log';

// const importDynamic = new Function('modulePath', 'return import(modulePath)');

// const fetch = async (...args: any[]) => {
//     const module = await importDynamic('node-fetch');
//     return module.default(...args);
// };

class ServerAuth {
    static async GetAccessToken(): Promise<string> {
        log('OPENING FRIDGE: 🥶', 'VERBOSE');

        let html = '';

        await fetch('https://www.hellofresh.dk/recipes/most-popular-recipes', {
            method: 'GET',
            headers: { 'User-Agent': 'PostmanRuntime/' },
            redirect: 'follow',
        })
            .then((response) => response.text())
            .then((text) => {
                html = text;
            })
            .catch((error) => {
                log('Nothing in the fridge! 😥', 'ERROR')
            });

        log('CLOSING FRIDGE: 🥶', 'VERBOSE');
        log(html.length.toString(), 'VERBOSE');
        return this.SplitBody(html);
    }

    static SplitBody(html: string): string {
        const bodyStr = html.substring(0, 200000);
        log(bodyStr, "VERBOSE")
        const startQuery = '"access_token":"';
        const endQuery = '",';

        const startIndex = bodyStr.indexOf(startQuery);
        const endIndex = bodyStr.indexOf(
            endQuery,
            startIndex + startQuery.length
        );

        log(`START: ${startIndex} " END:${endIndex}`, 'VERBOSE');

        const token = bodyStr.substring(startIndex + startQuery.length, endIndex);
        log(`Secret sauce: ${token}`, 'VERBOSE');
        return token;
    }
}

export default ServerAuth;
