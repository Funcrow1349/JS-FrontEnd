def create_matrix(num):
    return "\n".join(["\n".join([" ".join([str(k) for i in range(k)]) for j in range(k)]) for k in range(1, num + 1)])

print(create_matrix(7))