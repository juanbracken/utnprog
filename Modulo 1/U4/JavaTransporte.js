        var distancia;
        var transporte = ["a pie", "en bicicleta", "en colectivo", "en auto", "en avión"];
       
        distancia=prompt('A qué distancia(en metros) te encuentras?',' ');
        document.write('Te recomiendo que vayas ')
        if (distancia<=1000) {
            document.write(transporte[0])
        }
        else{
            if(distancia>1000 && distancia<=10000) {
                document.write(transporte[1])
            }
            else{
            if(distancia>10000 && distancia<=30000) {
                document.write(transporte[2])
            }
            else{
                if(distancia>30000 && distancia<=100000) {
                    document.write(transporte[3])
                } else{
                    document.write(transporte [4])
                }
            }
                
        }  
        
    }
