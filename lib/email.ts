"use server";

import { z } from "zod";
import { formSchema } from "./schema";

export const send = async (data: z.infer<typeof formSchema>) => {
  console.log(data);
};
