import * as z from "zod";
export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(2, "Name must be at least 2 characters long")
      .max(20, "Name must be at most 20 characters long"),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    rePassword: z.string().nonempty("Please confirm your password"),
    phone: z
      .string()
      .nonempty("Phone number is required")
      .regex(/^(2|\+2)?01[0251][0-9]{8}$/, "Phone number must be 10 digits"),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    error: "Passwords do not match",
  });
