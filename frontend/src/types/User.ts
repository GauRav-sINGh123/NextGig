export interface Profile {
    resume: string;
    resumeName: string;
    skills: string[];
    company: string | null;
    profilePhoto: string;
    currentCompany: string;
    education: string;
    _id: string;
    collegeEndDate: string;
    currentRole: string;
}

export interface User {
    _id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
    profile: Profile;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
