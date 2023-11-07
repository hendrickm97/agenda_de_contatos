class ContatoClass {
  id: number
  nome: string
  email: string
  tel: string

  constructor(id: number, nome: string, email: string, tel: string) {
    this.id = id
    ;(this.nome = nome), (this.email = email), (this.tel = tel)
  }
}

export default ContatoClass
