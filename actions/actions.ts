"use server";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  const firstName = formData.get("firstName") as string;

  return { message: "Create Profile Successfully!!!" };
};
