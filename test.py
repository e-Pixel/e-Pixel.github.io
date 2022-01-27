n = int(input())
f = int(input())

def multiply(number, finalRange):
  for i in range(finalRange + 1):
    print("{0} * {1} = {2} ".format(number, i, number * i))

multiply(n, f)