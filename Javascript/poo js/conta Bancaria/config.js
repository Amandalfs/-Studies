class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo
    }

    set saldo(val) {
        this._saldo = val;
    }

    saque(val) {
        if(val > this._saldo) {
            return "Operacao Negada"
        } else {
            this._saldo = this._saldo - val;
            return "Operecao Relizada com Sucesso"
        }
        
    }

    depositar(val) {
        this._saldo = this._saldo + val 

        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = "Corrente";
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(val) {
        this._cartaoCredito = val;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Poupanca";
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Universitaria";
    }
    
    saque(val) {
        if(val>500) {
            return "Operacao Negada"
        } 

        this._saldo = this._saldo - val;
    }
}