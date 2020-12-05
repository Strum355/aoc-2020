with open("part1.txt") as f:
    f.readline()
    line = f.readline()
    width = len(line) - 1
    dist = 3  # horizontal distance
    trees = 0
    while line != '':
        if line[dist] == '#':
            trees += 1
        dist = (dist + 3) % width
        line = f.readline()
    print(trees)
