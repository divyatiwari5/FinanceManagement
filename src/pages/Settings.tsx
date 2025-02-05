import { useState } from "react";
import Tabs from "../components/shared/Tabs";
import { FaPencilAlt } from "react-icons/fa";
import ProfileForm from "../components/Settings/ProfileForm";

const TABS = [
  { label: "Edit Profile", value: "profile" },
  { label: "Preferences", value: "preferences" },
  { label: "Security", value: "security" },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "**********",
    dateOfBirth: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl bg-white mx-10 my-[30px] rounded-3xl">
      <div className=" rounded-lg p-6 shadow-sm">
        <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "profile" && (
          <div className="flex gap-8">
            <div className="shrink-0">
              <div className="relative w-24 h-24">
                <img
                  src="/assets/person1.png"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
                <button className="absolute bottom-0 right-0 h-[30px] w-[30px] shadow-md bg-primaryBlack rounded-3xl">
                  <FaPencilAlt color="#FFFFFF" size={15} className="m-auto"/>
                </button>
              </div>
            </div>

            <ProfileForm 
              formData={formData}
              onInputChange={handleInputChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
