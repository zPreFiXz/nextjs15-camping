import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/utils/provinces";

const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        name={name}
        required
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((item, index) => {
            return (
              <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                <span className="flex items-center gap-4 capitalize">
                  {item.PROVINCE_NAME}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvinceInput;
