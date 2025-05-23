import Credentials from "next-auth/providers/credentials"

import bcrypt from "bcryptjs"
import { LoginSchema } from "@/lib/schema/auth";
import { getUserByEmail } from "@/lib/user/fetch";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validate credentials
        const validatedFields = await LoginSchema.validate(credentials);

        // Return user data if credentials are valid
        if (validatedFields) {
          const { email, password } = validatedFields;

          const user = await getUserByEmail(email).then(res => {
            if (res.error) return null;
            return res;
          });
          if (!user) return null;

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (isPasswordValid) return user;
        }

        // Return null if user data could not be validated
        return null;
      }
    })
  ]
}