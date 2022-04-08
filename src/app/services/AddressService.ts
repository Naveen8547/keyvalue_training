import { plainToClass } from "class-transformer";
import { Address } from "../entities/Address";
import { AddressRepository } from "../repository/AddressRepository";

export class AddressService {
    constructor(
        private addressRepository: AddressRepository
    ) {}
    public async createAddress(addressInput : any){
        const addressData  = plainToClass(Address,{
            "streetName": addressInput.streetName,
            "district": addressInput.district,
            "State":addressInput.state,
            "zip":addressInput.pin
        })
        const savedDet = await this.addressRepository.createAddress(addressData);
        return savedDet;
    }
    public async getAddressById(addressId: string) {
        return await this.addressRepository.getAddressById(addressId);
    }
}