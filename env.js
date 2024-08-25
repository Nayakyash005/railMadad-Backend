require("dotenv").config();
const {z} = require("zod");

const envSchema = z.object({
    DATABASE_URL: z.string().min(1),
});

const env = envSchema.safeParse(process.env);

if(!env.success) {
    console.log("error: missing env", env.error.formErrors.fieldErrors);
    process.exit(1);
}

module.exports = env.data;
