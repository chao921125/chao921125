
pack = []
with open("requirements.txt", "r") as f:
    while True:
        content = f.readline()
        print(content)
        if "==" in content:
            pack.append(content)
        elif not content:
            break
print(pack)

with open('req.txt', "a") as req:
    for i in pack:
        req.write(i)

