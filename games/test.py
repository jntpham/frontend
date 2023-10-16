# # import numpy as np

# # ROW_COUNT = 6
# # COLUMN_COUNT = 7

# # def create_board():
# #     board = np.zeros((ROW_COUNT, COLUMN_COUNT), dtype=int)
# #     return board

# # def drop_piece(board, col, piece):
# #     for row in range(ROW_COUNT - 1, -1, -1):
# #         if board[row][col] == 0:
# #             board[row][col] = piece
# #             return True
# #     return False

# # def is_valid_location(board, col):
# #     return board[0][col] == 0

# # def winning_move(board, piece):
# #     # Check horizontal locations for a win
# #     for r in range(ROW_COUNT):
# #         for c in range(COLUMN_COUNT - 3):
# #             if board[r][c] == piece and board[r][c + 1] == piece and board[r][c + 2] == piece and board[r][c + 3] == piece:
# #                 return True

# #     # Check vertical locations for a win
# #     for r in range(ROW_COUNT - 3):
# #         for c in range(COLUMN_COUNT):
# #             if board[r][c] == piece and board[r + 1][c] == piece and board[r + 2][c] == piece and board[r + 3][c] == piece:
# #                 return True

# #     # Check positively sloped diagonals
# #     for r in range(ROW_COUNT - 3):
# #         for c in range(COLUMN_COUNT - 3):
# #             if board[r][c] == piece and board[r + 1][c + 1] == piece and board[r + 2][c + 2] == piece and board[r + 3][c + 3] == piece:
# #                 return True

# #     # Check negatively sloped diagonals
# #     for r in range(3, ROW_COUNT):
# #         for c in range(COLUMN_COUNT - 3):
# #             if board[r][c] == piece and board[r - 1][c + 1] == piece and board[r - 2][c + 2] == piece and board[r - 3][c + 3] == piece:
# #                 return True

# #     return False

# # def print_board(board):
# #     print(np.flip(board, 0))

# # def play_game():
# #     board = create_board()
# #     print_board(board)
# #     game_over = False
# #     turn = 0

# #     while not game_over:
# #         col = int(input(f"Player {turn + 1}, select a column (0-{COLUMN_COUNT - 1}: "))

# #         if is_valid_location(board, col):
# #             if drop_piece(board, col, 1 if turn == 0 else 2):
# #                 print_board(board)
# #                 if winning_move(board, 1 if turn == 0 else 2):
# #                     print(f"Player {turn + 1} wins!!")
# #                     game_over = True
# #                 turn = (turn + 1) % 2
# #             else:
# #                 print("Column is full. Try again.")

# # if __name__ == '__main__':
# #     play_game()




# import numpy as np

# ROW_COUNT = 6
# COLUMN_COUNT = 7

# def create_board():
#     board = np.zeros((ROW_COUNT, COLUMN_COUNT), dtype=int)
#     return board

# def drop_piece(board, col, piece):
#     for row in range(ROW_COUNT - 1, -1, -1):
#         if board[row][col] == 0:
#             board[row][col] = piece
#             return True
#     return False

# def is_valid_location(board, col):
#     return board[0][col] == 0

# def winning_move(board, piece):
#     for r in range(ROW_COUNT):
#         for c in range(COLUMN_COUNT - 3):
#             if board[r][c] == piece and board[r][c + 1] == piece and board[r][c + 2] == piece and board[r][c + 3] == piece:
#                 return True

#     # Check vertical locations for a win
#     for r in range(ROW_COUNT - 3):
#         for c in range(COLUMN_COUNT):
#             if board[r][c] == piece and board[r + 1][c] == piece and board[r + 2][c] == piece and board[r + 3][c] == piece:
#                 return True

#     # Check positively sloped diagonals
#     for r in range(ROW_COUNT - 3):
#         for c in range(COLUMN_COUNT - 3):
#             if board[r][c] == piece and board[r + 1][c + 1] == piece and board[r + 2][c + 2] == piece and board[r + 3][c + 3] == piece:
#                 return True

#     # Check negatively sloped diagonals
#     for r in range(3, ROW_COUNT):
#         for c in range(COLUMN_COUNT - 3):
#             if board[r][c] == piece and board[r - 1][c + 1] == piece and board[r - 2][c + 2] == piece and board[r - 3][c + 3] == piece:
#                 return True

#     return False
# def print_board(board):
#     print(np.flip(board, 0))

# def play_game():
#     board = create_board()
#     print_board(board)
#     game_over = False
#     turn = 0

#     while not game_over:
#         col = None
#         while col is None:
#             try:
#                 col = int(input(f"Player {turn + 1}, select a column (0-{COLUMN_COUNT - 1}: "))
#                 if not 0 <= col < COLUMN_COUNT:
#                     raise ValueError("Invalid column number. Enter a valid column number.")
#                 if not is_valid_location(board, col):
#                     raise ValueError("Column is full. Try again.")
#             except ValueError as e:
#                 print(e)
#                 col = None

#         if drop_piece(board, col, 1 if turn == 0 else 2):
#             print_board(board)
#             if winning_move(board, 1 if turn == 0 else 2):
#                 print(f"Player {turn + 1} wins!!")
#                 game_over = True
#             turn = (turn + 1) % 2

# if __name__ == '__main__':
#     play_game()
