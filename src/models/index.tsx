export interface loginInfo {
    email: string;
    password: string;
}

export interface userInfo {
    id: null
    email: string;
    password: null;
    firstName: string;
    lastName: string;
    image: string;
    level: string;
    classroom: string;
    promotion: string;
}

export interface referenceSkill {
    id: number;
    name: string;
    shortname: string;
} 