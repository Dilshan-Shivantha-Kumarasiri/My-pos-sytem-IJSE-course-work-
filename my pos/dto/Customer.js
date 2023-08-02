export class Customer{

    constructor(id,name,number,email,address) {

        this._id = id;
        this._name = name;
        this._number = number;
        this._email = email;
        this._address = address;

    }

    get id(){
        return this._id
    }
    get name(){
        return this._name
    }
    get number(){
        return this._number
    }
    get email(){
        return this._email
    }
    get address(){
        return this._address
    }

}