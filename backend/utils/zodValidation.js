const zod = require('zod');

const registerSchema = zod.object({
    name: zod.string().min(1, "Name is required"),
    email: zod.string().email("Invalid email address"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
    bio: zod.string().max(160).optional(),
});

module.exports = { registerSchema };