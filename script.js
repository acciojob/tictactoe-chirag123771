//your JS code here. If required.
 let currentPlayer = 1;
    let player1Name = "";
    let player2Name = "";
    let board = ['', '', '', '', '', '', '', '', ''];

    function startGame() {
      player1Name = document.getElementById('player-1').value;
      player2Name = document.getElementById('player-2').value;

      if (player1Name && player2Name) {
        document.getElementById('players').style.display = 'none';
        document.getElementById('board').style.display = 'grid';
        updateMessage();
      } else {
        alert('Please enter names for both players.');
      }
    }

    function cellClicked(index) {
      if (!board[index - 1]) {
        board[index - 1] = currentPlayer === 1 ? 'X' : 'O';
        checkWinner();
        currentPlayer = 3 - currentPlayer; // Switch player
        updateMessage();
        updateBoard();
      }
    }

    function updateMessage() {
      const messageElement = document.querySelector('.message');
      messageElement.textContent = currentPlayer === 1 ? `${player1Name}, you're up!` : `${player2Name}, you're up!`;
    }

    function updateBoard() {
      for (let i = 1; i <= 9; i++) {
        const cellElement = document.getElementById(`${i}`);
        cellElement.textContent = board[i - 1];
      }
    }

    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          alert(`${currentPlayer === 1 ? player1Name : player2Name}, congratulations, you won!`);
          resetGame();
          return;
        }
      }

      if (!board.includes('')) {
        alert('It\'s a draw!');
        resetGame();
      }
    }

    function resetGame() {
      currentPlayer = 1;
      board = ['', '', '', '', '', '', '', '', ''];
      document.getElementById('players').style.display = 'block';
      document.getElementById('board').style.display = 'none';
      document.getElementById('player-1').value = '';
      document.getElementById('player-2').value = '';
    }