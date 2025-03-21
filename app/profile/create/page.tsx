import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
            />
            <FormInput
              name="userName"
              type="text"
              label="Username"
              placeholder="Username"
            />
          </div>
          <SubmitButton text="Create Profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
