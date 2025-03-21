import { createLandmarkAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

const CreateProfile = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Landmark
      </h1>
      <div className="border p-8 rounded">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              type="text"
              label="Landmark Name"
              placeholder="Landmark Name"
            />

            <CategoryInput />
          </div>
          <SubmitButton text="Create Landmark" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
