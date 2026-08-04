(function (global) {

    console.log("GPT Global JS Loaded");

    const VERSION = "1.0.0";

    function hello(name) {
        console.log(`Hello ${name}`);

        return {
            success: true,
            message: `Hello ${name}`,
            version: VERSION
        };
    }

    async function trackPage(config) {

        console.log("Tracking Page");

        console.log(config);

        return {
            success: true,
            timestamp: new Date().toISOString(),
            config
        };
    }

    global.GPT = {

        version: VERSION,

        hello,

        trackPage

    };

})(typeof window !== "undefined" ? window : globalThis);
