// --bail no console para parar no primeiro fail

describe('Main', function() {
  describe('Method A', function() {
    context('Case 1', function() {
      it.skip('should happen blabla', function() {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
        throw new Error('just an error');
      });
    });

    context('Case 2', function() {
      // only para rodar só um bloco
      it('should happen blabla', function() {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
        throw new Error('just an error');
      });

      it('should happen mimimi', function() {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });
  });

  describe('Method B', function() {

  });
});
