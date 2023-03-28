export interface ReduxStore{
    users: UserState;
    // favs
}

//  redux user state
export interface UserState {
    usersContent: User[];
    isLoading: boolean;
    errs: any
}

export interface User {
    address:  Address;
    id?:       number;
    email:    string;
    username: string;
    password: string;
    name:     Name;
    phone:    string;
    __v?:      number;
}

export interface Address {
    city:        string;
    street:      string;
    number:      string;
    zipcode:     string;
}

export interface Name {
    firstname: string;
    lastname:  string;
}







