import { useContext } from "react";
import { LicenseTypeContext } from "../../../ThemeContext/LicenseTypeContext";

export function LicenseOptions() {
  const { licenseType, setLicenseType } = useContext(LicenseTypeContext);

  return (
    <div>
      <div className="grid grid-cols-8 gap-2 pt-6">
        <button
          className={`btn btn-success ${
            licenseType === "cha(lpg)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("cha(lpg)")}
        >
          চ ফরম (এলপিজি)
        </button>
        
        <button
          className={`btn btn-success ${
            licenseType === "jha(pet)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("jha(pet)")}
        >
          ঝ ফরম (পেট্রোলিয়াম)
        </button>
        <button
          className={`btn btn-success ${
            licenseType === "neo(pet)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("neo(pet)")}
        >
          ঞ ফরম (পেট্রোলিয়াম)
        </button>
        <button
          className={`btn btn-success ${
            licenseType === "ta(pet)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("ta(pet)")}
        >
          ট ফরম (পেট্রোলিয়াম)
        </button>
        <button
          className={`btn btn-success ${
            licenseType === "dha(pet)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("dha(pet)")}
        >
          ঢ ফরম (পেট্রোলিয়াম)
        </button>
        <button
          className={`btn btn-success ${
            licenseType === "da(pet)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("da(pet)")}
        >
          ড ফরম (পেট্রোলিয়াম)
        </button>
        <button
          className={`btn btn-success ${
            licenseType === "spcl(pet)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("spcl(pet)")}
        >
          বিশেষ ফরম (পেট্রোলিয়াম)
        </button>
        <button
          className={`btn btn-success ${
            licenseType === "uma(lpg)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("uma(lpg)")}
        >
          ঙ ফরম (এলপিজি)
        </button>
        <button
          className={`btn btn-success ${
            licenseType === "neo(lpg)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("neo(lpg)")}
        >
          ঞ ফরম (এলপিজি)
        </button> 
        <button
          className={`btn btn-success ${
            licenseType === "cha(gas)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("cha(gas)")}
        >
          চ ফরম (গ্যাস)
        </button> 
        <button
          className={`btn btn-success ${
            licenseType === "gha(gas)" ? "bg-gray-300" : ""
          }`}
          onClick={() => setLicenseType("gha(gas)")}
        >
          ঘ ফরম (গ্যাস)
        </button> 
      </div>
    </div>
  );
}

export const mask = [
  { lType: "cha(lpg)", mask: "999-২(চ)-9999" },
  { lType: "uma(lpg)", mask: "999-২(ঙ)-9999" },
  { lType: "neo(lpg)", mask: "999-২(ঞ)-9999" },
  { lType: "jha(pet)", mask: "999-৩(ঝ)-9999" },
  { lType: "neo(pet)", mask: "999-৩(ঞ)-9999" },
  { lType: "ta(pet)", mask: "999-৩(ট)-9999" },
  { lType: "dha(pet)", mask: "999-৩(ঢ)-9999" },
  { lType: "da(pet)", mask: "999-৩(ড)-9999" },
  { lType: "spcl(pet)", mask: "999-৩(বিশেষ)-9999" },
  { lType: "gha(gas)", mask: "999-২(ঘ)-9999" },
  { lType: "cha(gas)", mask: "999-২(চ)-9999" },
 ];
