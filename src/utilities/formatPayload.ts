import { User } from "../models";

export const formatPayload = (payload: User) => {
    return {
            "address": {
                "geolocation": {
                    "lat": "30.24788",
                    "long": "-20.545419"
                },
                "city": payload.address.city,
                "street": payload.address.street,
                "number": payload.address.number,
                "zipcode": payload.address.zipcode
            },
            "email": payload.email,
            "username": payload.username,
            "password": payload.password,
            "name": {
                "firstname": payload.name.firstname,
                "lastname": payload.name.lastname
            },
            "phone": payload.phone,
            "__v": 0
    }
};