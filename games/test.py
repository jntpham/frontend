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

import numpy as np
import random

ROW_COUNT = 6
COLUMN_COUNT = 7

def create_board():
    board = np.zeros((ROW_COUNT, COLUMN_COUNT), dtype=int)
    return board

def drop_piece(board, col, piece):
    for row in range(ROW_COUNT - 1, -1, -1):
        if board[row][col] == 0:
            board[row][col] = piece
            return True
    return False

def is_valid_location(board, col):
    return board[0][col] == 0

def winning_move(board, piece):
    # Check for a win in rows
    for row in range(ROW_COUNT):
        for col in range(COLUMN_COUNT - 3):
            if all(board[row][col + i] == piece for i in range(4)):
                return True

    # Check for a win in columns
    for col in range(COLUMN_COUNT):
        for row in range(ROW_COUNT - 3):
            if all(board[row + i][col] == piece for i in range(4)):
                return True

    # Check for a win in diagonals (positive slope)
    for col in range(COLUMN_COUNT - 3):
        for row in range(ROW_COUNT - 3):
            if all(board[row + i][col + i] == piece for i in range(4)):
                return True

    # Check for a win in diagonals (negative slope)
    for col in range(COLUMN_COUNT - 3):
        for row in range(3, ROW_COUNT):
            if all(board[row - i][col + i] == piece for i in range(4)):
                return True

    return False

def evaluate_window(window, piece):
    score = 0
    opponent_piece = 1 if piece == 2 else 2

    if window.count(piece) == 4:
        score += 100
    elif window.count(piece) == 3 and window.count(0) == 1:
        score += 5
    elif window.count(piece) == 2 and window.count(0) == 2:
        score += 2

    if window.count(opponent_piece) == 3 and window.count(0) == 1:
        score -= 4

    return score

def score_position(board, piece):
    score = 0

    # Score center column
    center_array = [int(i) for i in list(board[:, COLUMN_COUNT // 2])]
    center_count = center_array.count(piece)
    score += center_count * 3

    # Score horizontal
    for row in range(ROW_COUNT):
        row_array = [int(i) for i in list(board[row, :])]
        for col in range(COLUMN_COUNT - 3):
            window = row_array[col:col + 4]
            score += evaluate_window(window, piece)

    # Score vertical
    for col in range(COLUMN_COUNT):
        col_array = [int(i) for i in list(board[:, col])]
        for row in range(ROW_COUNT - 3):
            window = col_array[row:row + 4]
            score += evaluate_window(window, piece)

    # Score positive slope diagonals
    for r in range(ROW_COUNT - 3):
        for c in range(COLUMN_COUNT - 3):
            window = [board[r + i][c + i] for i in range(4)]
            score += evaluate_window(window, piece)

    # Score negative slope diagonals
    for r in range(3, ROW_COUNT):
        for c in range(COLUMN_COUNT - 3):
            window = [board[r - i][c + i] for i in range(4)]
            score += evaluate_window(window, piece)

    return score

def get_valid_locations(board):
    valid_locations = []
    for col in range(COLUMN_COUNT):
        if is_valid_location(board, col):
            valid_locations.append(col)
    return valid_locations

def minimax(board, depth, alpha, beta, maximizing_player, piece):
    valid_locations = get_valid_locations(board)
    is_terminal = len(valid_locations) == 0 or depth == 0
    if is_terminal:
        if depth == 0:
            return None, score_position(board, piece)
        elif winning_move(board, piece):
            return None, float("inf")
        elif winning_move(board, 3 - piece):
            return None, float("-inf")
        else:
            return None, 0

    if maximizing_player:
        value = float("-inf")
        column = random.choice(valid_locations)
        for col in valid_locations:
            row = get_next_open_row(board, col)
            board_copy = board.copy()
            drop_piece(board_copy, col, piece)
            new_score = minimax(board_copy, depth - 1, alpha, beta, False, piece)[1]
            if new_score > value:
                value = new_score
                column = col
            alpha = max(alpha, value)
            if alpha >= beta:
                break
        return column, value
    else:
        value = float("inf")
        column = random.choice(valid_locations)
        for col in valid_locations:
            row = get_next_open_row(board, col)
            board_copy = board.copy()
            drop_piece(board_copy, col, 3 - piece)
            new_score = minimax(board_copy, depth - 1, alpha, beta, True, piece)[1]
            if new_score < value:
                value = new_score
                column = col
            beta = min(beta, value)
            if alpha >= beta:
                break
        return column, value

if __name__ == '__main__':
    board = create_board()
    game_over = False

    while not game_over:
        # User's turn
        col = int(input("Enter your move (0-6): "))
        if is_valid_location(board, col):
            row = get_next_open_row(board, col)
            drop_piece(board, col, 1)
            if winning_move(board, 1):
                print("You win!")
                game_over = True

        # AI's turn
        col, _ = minimax(board, 4, float("-inf"), float("inf"), True, 2)
        if is_valid_location(board, col):
            row = get_next_open_row(board, col)
            drop_piece(board, col, 2)
            if winning_move(board, 2):
                print("AI wins!")
                game_over = True

        print_board(board)
