import { useContext } from "react";
import { UserContext } from "../../Contexts/user/UserContext";
import ProfileCard from "../../components/UI/temp.jsx";
import PersonalInfoCard from "./PersonalInfoCard";
import "./Profile.css";

export default function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div className="profile-page">
            <ProfileCard variant="presentation" user={user} />
            <PersonalInfoCard />
        </div>
    );
}