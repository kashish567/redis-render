const Redis = require("ioredis");
    const dotenv = require("dotenv");

    dotenv.config();

    const { REDIS_URL } = process.env;

    const renderRedis = new Redis(REDIS_URL);

    renderRedis.set("animal", "cat");

    renderRedis.get("animal").then((result) => {
    console.log(result); 
    });