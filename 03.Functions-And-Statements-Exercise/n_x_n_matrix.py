def create_matrix(num):
    return "\n".join([" ".join([str(num) for i in range(num)]) for j in range(num)])

print(create_matrix(7))