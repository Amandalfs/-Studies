
export class Address {
    private _street: string;
    private _city: string;
    private _state: string;
    private _cep: string;
    private _country: string;

    constructor(street: string, city: string, state: string, cep: string, country: string) {
        this._street = street;
        this._city = city;
        this._state = state;
        this._cep = cep;
        this._country = country;
        this.validate();
    }

    validate(){
        if(this._street === ""){
            throw new Error("Street is required");
        }

        if(this._city === ""){
            throw new Error("City is required");
        }

        if(this._state === ""){
            throw new Error("State is required");
        }

        if(this._cep === ""){
            throw new Error("CEP is required");
        }

        if(this._country === ""){
            throw new Error("Country is required");
        }

        return true;
    }

    get street(): string {
        return this._street;
    }

    get city(): string {
        return this._city;
    }

    get state(): string {
        return this._state;
    }

    get cep(): string {
        return this._cep;
    }

    get country(): string {
        return this._country;
    }
}