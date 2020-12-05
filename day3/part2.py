from functools import reduce

results = []


def for_num(right, down=1):
    with open("part1.txt") as f:
        for _ in range(down):
            f.readline()
        line = f.readline()
        width = len(line) - 1
        dist = right  # horizontal distance
        trees = 0
        while line != '':
            if line[dist] == '#':
                trees += 1
            dist = (dist + right) % width
            for _ in range(down):
                line = f.readline()
        results.append(trees)


for_num(1)
for_num(3)
for_num(5)
for_num(7)
for_num(1, 2)
print(reduce(lambda a, b: a * b, results))
