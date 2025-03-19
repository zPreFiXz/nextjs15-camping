import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

const CreateProfile = () => {
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
              name="laseName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
            />
            <FormInput
              name="username"
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
