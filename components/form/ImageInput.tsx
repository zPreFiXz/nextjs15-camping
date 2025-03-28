import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = () => {
  const name = "image";
  return (
    <div className="capitalize">
      <Label>{name}</Label>
      <Input id={name} name={name} type="file" required accept="image/*" />
    </div>
  );
};
export default ImageInput;
