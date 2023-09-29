
export interface  InputCreateCustomerDTO {
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
        cep: string;
        country: string;
    }
}


export interface OutputCreateCustomerDTO {
    id: string;
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
        cep: string;
        country: string;
    }
}