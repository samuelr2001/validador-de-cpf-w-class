//705.484.450-52
class CPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {

            writable: false,
            enumerable: true,
            configurable: false,

            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    novoCPF() {
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfParcial)
        const digito2 = this.geraDigito(cpfParcial + digito1)

        this.novoCPF2 = this.cpfParcial + digito1 + digito2
    }

    geraDigito(cpfParcial) {
        let total = 0
        let reverso = cpfParcial.length + 1

        for (let stringN of cpfParcial) {
            total += reverso * Number(stringN)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.sequencia()) return false
        this.novoCPF()
        return this.novoCPF2 === this.cpfLimpo
    }
}

const main = new CPF('705.484.450-52')
console.log(main.valida())

if (main.valida()) {
    console.log('CPF VALIDO!')

} else {
    console.log('CPF INVALIDO! ')
}
