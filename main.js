const root = new Vue (
    {
        el: "#root",
        data: {
            nome: '',
            cognome: '',
            classe: 'text-blue'
        },
        methods: {
            cambiaColore: function() {

                //se volessi chiamare una funzione da un'altra funzione, dovrei usare this.nomeFunzione...
                let somma = this.sommaArray([1,2,3,67,23,90]);

                alert(somma);

                if (this.classe == 'text-red') {
                    this.classe = 'text-blue';
                } else {
                    this.classe = 'text-red';
                }
            
            }, 
            sommaArray: function(array) {
                
                let somma = 0;
                for(let i = 0; i<array.length; i++) {
                    somma += array[i];
                }
                return somma;

            }
        }
    }
);