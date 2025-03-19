import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CreateProfile = () => {
  const createProfileAction = async (formData: FormData) => {
    "use server";
    const firstName = formData.get("firstName") as string;
    console.log(firstName);
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded max-w-lg">
        <form action={createProfileAction}>
          <div className="mb-2">
            <Label htmlFor="firstName">Firstname</Label>
            <Input name="firstName" type="text" />
          </div>
          <Button type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
