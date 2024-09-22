import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis({
    host: `${process.env.REDIS_URL}`,
    port: `${process.env.REDIS_PORT}`,
    password: `${process.env.REDIS_PASSWORD}`
});


redis.on("connect", () => {
    console.log("redis connected");
})