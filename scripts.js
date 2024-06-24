
    function calcularNotas() {
      const nombre = document.getElementById('nombre').value;
      const identidad = document.getElementById('identidad').value;
      const nota1 = parseFloat(document.getElementById('nota1').value);
      const nota2 = parseFloat(document.getElementById('nota2').value);
      const nota3 = parseFloat(document.getElementById('nota3').value);
      const desempeño1 = parseFloat(document.getElementById('desempeño1').value);
      const desempeño2 = parseFloat(document.getElementById('desempeño2').value);
      const notaConocimiento = parseFloat(document.getElementById('notaConocimiento').value);


      const promedionotas = (nota1 + nota2 + nota3) / 3;
      const promedioDesempeño = (desempeño1 + desempeño2) / 2;

      const porcentajenotas = promedionotas * 0.4;
      const porcentajeDesempeño = promedioDesempeño * 0.3;
      const porcentajeConocimiento = notaConocimiento * 0.3;


      const notaDefinitiva = porcentajenotas + porcentajeDesempeño + porcentajeConocimiento;
      const estado = notaDefinitiva >= 70 ? '<p style="color: green;"><b>Aprobado</p>' : '<p style="color: red;"><b>Reprobado</p>';

      const resultadoElement = document.getElementById('resultado');
      resultadoElement.innerHTML = `
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Identidad</th>
                <th>Nota Final</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${nombre}</td>
                <td>${identidad}</td>
                <td>${notaDefinitiva.toFixed(2)}</td>
                <td>${estado}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }

    function limpiarFormulario() {
      document.getElementById('formulario-notas').reset();
      document.getElementById('resultado').innerHTML = '';
    }
