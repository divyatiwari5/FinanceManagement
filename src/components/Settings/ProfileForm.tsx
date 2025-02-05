import Input from "../shared/Input";

interface ProfileFormData {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

interface ProfileFormProps {
  formData: ProfileFormData;
  onInputChange: (field: string, value: string) => void;
  onSave?: () => void;
}

const ProfileForm = ({ formData, onInputChange, onSave }: ProfileFormProps) => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 ">
      <Input
          label="Your Name"
          value={formData.name}
          onChange={(value) => onInputChange("name", value)}
        />
        <Input
          label="User Name"
          value={formData.username}
          onChange={(value) => onInputChange("username", value)}
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) => onInputChange("email", value)}
        />
        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={(value) => onInputChange("password", value)}
        />
        <Input label="Date of Birth" value={formData.dateOfBirth} disabled />
        <Input
          label="Present Address"
          value={formData.presentAddress}
          onChange={(value) => onInputChange("presentAddress", value)}
        />
        <Input
          label="Permanent Address"
          value={formData.permanentAddress}
          onChange={(value) => onInputChange("permanentAddress", value)}
        />
        <Input
          label="City"
          value={formData.city}
          onChange={(value) => onInputChange("city", value)}
        />
        <Input
          label="Postal Code"
          value={formData.postalCode}
          onChange={(value) => onInputChange("postalCode", value)}
        />
        <Input
          label="Country"
          value={formData.country}
          onChange={(value) => onInputChange("country", value)}
        />
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={onSave}
          className="h-[50px] bg-black text-white rounded-2xl w-full md:w-[190px]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
