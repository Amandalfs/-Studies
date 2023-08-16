import { Address } from "./address"

describe("Address unit tests", ()=>{
    
    it("Should throw error street required",()=>{
        expect(()=>{
            new Address("","Cidade","Estado","5455638", "Pais");
        }).toThrowError("Street is required");
    })

    it("Should throw error city required",()=>{
        expect(()=>{
            new Address("Rua","","Estado","5455638", "Pais");
        }).toThrowError("City is required");
    })

    it("Should throw error state required",()=>{
        expect(()=>{
            new Address("Rua","Cidade","","5455638", "Pais");
        }).toThrowError("State is required");
    })

    it("Should throw error cep required",()=>{
        expect(()=>{
            new Address("Rua","Cidade","Estado","", "Pais");
        }).toThrowError("CEP is required");
    })

    it("Should throw error country required",()=>{
        expect(()=>{
            new Address("Rua","Cidade","Estado","5455638", "");
        }).toThrowError("Country is required");
    })
})