import { createLandmarkAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import MapLandmark from "@/components/map/MapLandmark";

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
          <TextAreaInput name="description" LabelText="Description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              type="number"
              label="price"
              placeholder="Price"
            />
            <ProvinceInput />
          </div>

          <MapLandmark />
          <SubmitButton text="Create Landmark" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
