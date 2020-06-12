function buscar (){
                var matricula = document.getElementById("Matriculatxt").value;
                 var documento = "Docs/" + matricula + ".pdf"
                window.open(documento);
            }