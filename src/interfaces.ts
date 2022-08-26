interface iUser {
    id:number;
    name: string;
    username: string;
    email: string;
    address:iAdress;
    phone:string;
    website:string;
    company:iCompany
}

interface iAdress{
    street:string;
    suite: string;
    city:string;
    zipcode:string;
    geo:{
        lat:string;
        lng:string;
    }
}

interface iCompany{
    name:string;
    catchPhrase:string;
    bs:string;
}
export type { iUser };